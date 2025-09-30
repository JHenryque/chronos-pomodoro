/* eslint-disable no-case-declarations */
import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { initialTaskState } from "./initialTaskState";
import { type TaskActionModel, TaskActionTypes } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const secondsRemaining = newTask.duration * 60;
      const getNextcycle = getNextCycle(state.currentCycle);
      return {
        ...state, //spread operator
        config: { ...state.config },
        activeTask: newTask,
        currentCycle: getNextcycle, // conferir
        secondsRemaining, // conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // conferi
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      //   setState((prevState) => ({
      //     ...prevState,
      //     activeTask: null,
      //     secondsRemaining: 0,
      //     formattedSecondsRemaining: "00:00",
      //     tasks: prevState.tasks.map((task) => {
      //       if (prevState.activeTask?.id === task.id) {
      //         return { ...task, interruptDate: Date.now() };
      //       }
      //       return task;
      //     }),
      //   }));
      return {
        ...state, //spread operator
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask?.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state, //spread operator
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        //currentCycle: getNextCycle(state.currentCycle),
        tasks: state.tasks.map((task) => {
          if (state.activeTask?.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }

    case TaskActionTypes.RESET_STATE:
      return {
        ...initialTaskState, //spread operator
      };

    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state, //spread operator
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining
        ),
      };
    }
  }
}
