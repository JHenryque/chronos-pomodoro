import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

// Definindo o tipo do contexto
type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

// Criando o contexto com valor inicial
const initialContextValue: TaskContextProps = {
  // Estado inicial
  state: initialTaskState,
  dispatch: () => {},
};

// Criando o contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
