import "./styles/global.css";
import Home from "./pages/Home";
import { useState } from "react";
import { TaskContext } from "./contexts/TaskContext";

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

export default function App() {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <Home />
    </TaskContext.Provider>
  );
}
