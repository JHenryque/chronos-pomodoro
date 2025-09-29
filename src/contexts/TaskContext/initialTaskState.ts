import type { TaskStateModel } from "../../models/TaskStateModel";

// Estado inicial
export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1, // 25 minutes
    shortBreakTime: 1, // 5 minutes
    longBreakTime: 1, // 15 minutes
  },
};
