import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[]; // historioco de tasks, MainForm
  secondsRemaining: number; // Countdown, historico, MainForm, Buttons
  formattedSecondsRemaining: string; // Titulo, CountDown
  activeTask: TaskModel | null; // Countdown, historico, MainForm, Buttons
  currentCycle: number; // 1 a 8, Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
