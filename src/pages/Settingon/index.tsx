import { SaveIcon } from "lucide-react";
import Container from "../../components/Container/Container";
import DefaultButton from "../../components/DefaultBotton/DefaultButton";
import DefaultInput from "../../components/DefaultInput/DefaultInput";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export default function Settingon() {
  const { state } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handelSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakTimeInputRef.current?.value;
    const longBreakTime = longBreakTimeInputRef.current?.value;

    console.log("InputRef", workTime, shortBreakTime, longBreakTime);
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>configurações</Heading>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>
      </Container>
      <Container>
        <form action="" onSubmit={handelSaveSettings} className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              label="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              label="Descanso curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              label="Descanso longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
            />
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
