import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManage } from "../../workers/timerWorkerManage";

type TaskConstextProviderProps = {
  children: React.ReactNode;
};

// Componente para fornecer o contexto
export function TaskConstextProvider({ children }: TaskConstextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManage.getInstance();

  worker.onmessage((event) => {
    const secondsRemaining = event.data;
    console.log(secondsRemaining);

    if (secondsRemaining <= 0) {
      console.log("worker terminou");
      worker.terminate();
    }
  });

  useEffect(() => {
    console.log(state);

    if (!state.activeTask) {
      console.log("worker terminou por falta de activerTask");
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
