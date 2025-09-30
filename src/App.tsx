import "./styles/global.css";
import Home from "./pages/Home";
import { TaskConstextProvider } from "./contexts/TaskContext/TaskContextProvider";
import MessagesContainer from "./components/MessagesContainer";

export default function App() {
  return (
    <TaskConstextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskConstextProvider>
  );
}
