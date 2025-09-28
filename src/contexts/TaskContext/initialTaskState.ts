import type { TaskStateModel } from "../../models/TaskStateModel";

// Estado inicial
export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25 * 60, // 25 minutes
    shortBreakTime: 5 * 60, // 5 minutes
    longBreakTime: 15 * 60, // 15 minutes
  },
};
