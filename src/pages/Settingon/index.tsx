import { SaveIcon } from "lucide-react";
import Container from "../../components/Container/Container";
import DefaultButton from "../../components/DefaultBotton/DefaultButton";
import DefaultInput from "../../components/DefaultInput/DefaultInput";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function Settingon() {
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
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput id="workTime" label="Foco" />
          </div>

          <div className="formRow">
            <DefaultInput id="shortBreakTime" label="Descanso curto" />
          </div>

          <div className="formRow">
            <DefaultInput id="longBreakTime" label="Descanso longo" />
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
