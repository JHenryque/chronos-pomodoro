import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainFrom/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import MainTemplate from "../../templates/MainTemplate";

export type HomeProps = {
  state: TaskStateModel;
  setState?: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export default function Home(props: HomeProps) {
  return (
    <MainTemplate>
      {/* <CountDown formattedSecondsRemaining={state.formattedSecondsRemaining} /> OU */}
      <CountDown {...props} />
      <MainForm {...props} />
    </MainTemplate>
  );
}
