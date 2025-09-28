import { useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskConstextProviderProps = {
  children: React.ReactNode;
};

// Componente para fornecer o contexto
export function TaskConstextProvider({ children }: TaskConstextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
