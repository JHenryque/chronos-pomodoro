import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainFrom/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import MainTemplate from "../../templates/MainTemplate";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export default function Home(props: HomeProps) {
  console.log("Hello Home", props);
  return (
    <MainTemplate>
      <CountDown />
      <MainForm />
    </MainTemplate>
  );
}
