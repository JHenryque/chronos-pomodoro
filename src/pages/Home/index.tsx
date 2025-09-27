import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainFrom/MainForm";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <CountDown />
      <MainForm />
    </MainTemplate>
  );
}
