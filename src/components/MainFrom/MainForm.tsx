import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles/Cycles";
import DefaultButton from "../DefaultBotton/DefaultButton";
import DefaultInput from "../DefaultInput/DefaultInput";
import { useState } from "react";
import type { HomeProps } from "../../pages/Home";

export default function MainForm({ state }: HomeProps) {
  const [button, setButton] = useState<boolean>(true);

  return (
    <form className="form">
      <h1>{button}</h1>
      <div className="formRow">
        {/*  <DefaultInput abc={123} type="text" label="Task" /> iterxecion com a uniao */}

        <DefaultInput
          id="task"
          type="text"
          label="Task"
          placeholder="Digit a task"
          disabled
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de {state.config.workTime}min.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        {button ? (
          <DefaultButton
            icon={<PlayCircleIcon />}
            color="green"
            onClick={() => setButton(true)}
          />
        ) : (
          <DefaultButton
            icon={<StopCircleIcon />}
            color="red"
            onClick={() => setButton(false)}
          />
        )}
      </div>
    </form>
  );
}
