import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  ADD_NEW_TASK = "ADD_NEW_TASK",
}

export type TaskActionWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
