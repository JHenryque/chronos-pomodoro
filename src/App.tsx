import "./styles/global.css";
import Home from "./pages/Home";
import { TaskConstextProvider } from "./contexts/TaskContext/TaskContextProvider";

export default function App() {
  return (
    <TaskConstextProvider>
      <Home />
    </TaskConstextProvider>
  );
}
