import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

// Definindo o tipo do contexto
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// Criando o contexto com valor inicial
const initialContextValue: TaskContextProps = {
  // Estado inicial
  state: initialTaskState,
  setState: () => {},
};

// Criando o contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
