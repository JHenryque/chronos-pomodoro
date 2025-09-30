import "./styles/global.css";
import { TaskConstextProvider } from "./contexts/TaskContext/TaskContextProvider";
import MessagesContainer from "./components/MessagesContainer";
import MainRouter from "./routers/MainRouter";

export default function App() {
  return (
    <TaskConstextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskConstextProvider>
  );
}
