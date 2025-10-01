import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManage } from "../../workers/timerWorkerManage";

import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionTypes } from "./taskActions";

type TaskConstextProviderProps = {
  children: React.ReactNode;
};

// Componente para fornecer o contexto
export function TaskConstextProvider({ children }: TaskConstextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storedState = localStorage.getItem("state");

    if (storedState === null) return initialTaskState;

    const parsedStorageState = JSON.parse(storedState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: "00:00",
    };
  });

  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManage.getInstance();

  worker.onmessage((event) => {
    const countDownSeconds = event.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      if (playBeepRef.current !== null) {
        console.log("Tocando audio");
        playBeepRef.current();
        playBeepRef.current = null;
      }

      dispatch({ type: TaskActionTypes.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));

    if (!state.activeTask) {
      loadBeep();
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      console.log("Carregando audio....");
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
