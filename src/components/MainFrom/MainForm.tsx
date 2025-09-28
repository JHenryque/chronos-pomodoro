import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles/Cycles";
import DefaultButton from "../DefaultBotton/DefaultButton";
import DefaultInput from "../DefaultInput/DefaultInput";
import { useRef, useState } from "react";

export default function MainForm() {
  const [button, setButton] = useState<boolean>(true);
  const [taskName, setTaskName] = useState<string>("");
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("create new task", taskNameInput.current?.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form">
      <h1>{button}</h1>
      <div className="formRow">
        {/*  <DefaultInput abc={123} type="text" label="Task" /> iterxecion com a uniao */}

        <DefaultInput
          id="task"
          type="text"
          label="Task"
          // onChange={(event) => setTaskName(event.target.value)}
          // value={taskName}
          ref={taskNameInput}
          placeholder="Digit a task"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min.</p>
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
