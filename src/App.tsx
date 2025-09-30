import "./styles/global.css";
import Home from "./pages/Home";
import { TaskConstextProvider } from "./contexts/TaskContext/TaskContextProvider";
import MessagesContainer from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";

export default function App() {
  return (
    <TaskConstextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-pomodoro/" element={<AboutPomodoro />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskConstextProvider>
  );
}
