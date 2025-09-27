import "./styles/global.css";
import Home from "./pages/Home";
import type { TaskStateModel } from "./models/TaskStateModel";
import { useState } from "react";

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
  console.log("Hello App");

  const [state, setState] = useState(initialState);

  return (
    <>
      <Home state={state} setState={setState} />
    </>
  );
}
