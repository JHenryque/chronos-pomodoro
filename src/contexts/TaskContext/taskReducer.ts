import type { TaskStateModel } from "../../models/TaskStateModel";
import { type TaskActionModel, TaskActionTypes } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
  switch (action.type) {
    case TaskActionTypes.START_TASK:
      return {
        ...state, //spread operator
        // activeTask: action.payload,
        // secondsRemaining: action.payload.duration * 60,
        // formattedSecondsRemaining: `${action.payload.duration}:00`,
      };
    case TaskActionTypes.INTERRUPT_TASK:
      return {
        ...state, //spread operator
      };
    case TaskActionTypes.RESET_STATE:
      return {
        ...state, //spread operator
      };
  }
}
