import { useEffect } from "react";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainFrom/MainForm";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Chronos Pomodoro";
  }, []);
  return (
    <MainTemplate>
      {/* <CountDown formattedSecondsRemaining={state.formattedSecondsRemaining} /> OU */}
      <CountDown />
      <MainForm />
    </MainTemplate>
  );
}
