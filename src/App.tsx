import "./styles/global.css";
import Home from "./pages/Home";
import { TaskConstextProvider, useTaskContext } from "./contexts/TaskContext";

export default function App() {
  const taskContext = useTaskContext();

  console.log(taskContext);

  return (
    <TaskConstextProvider>
      <Home />
    </TaskConstextProvider>
  );
}
