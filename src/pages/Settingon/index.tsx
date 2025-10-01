import { SaveIcon } from "lucide-react";
import Container from "../../components/Container/Container";
import DefaultButton from "../../components/DefaultBotton/DefaultButton";
import DefaultInput from "../../components/DefaultInput/DefaultInput";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/shownMessage";

export default function Settingon() {
  const { state } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handelSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formErrors = [];

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas numeros");
    }

    if (workTime < 1 || workTime > 90) {
      formErrors.push("Digite apenas numeros maiores que zero e ate 99");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Digite apenas numeros maiores que zero e ate 30");
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Digite apenas numeros maiores que zero e ate 60");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    console.log("salvar");
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
              type="number"
              // min="1"
              // max="90"
              // step="2"
              // maxLength={2}
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              label="Descanso curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              label="Descanso longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
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
