/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

// Estado inicial
const initialState: TaskStateModel = {
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

// Definindo o tipo do contexto
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// Criando o contexto com valor inicial
const initialContextValue: TaskContextProps = {
  state: initialState,
  setState: () => {},
};

// Criando o contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

// Componente para fornecer o contexto
export function TaskConstextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TaskContext.Provider value={{ ...initialContextValue }}>
      {children}
    </TaskContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useTaskContext() {
  return useContext(TaskContext);
}
