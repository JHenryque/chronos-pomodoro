import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles/Cycles";
import DefaultButton from "../DefaultBotton/DefaultButton";
import DefaultInput from "../DefaultInput/DefaultInput";
import { useRef, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";

export default function MainForm() {
  const [button, setButton] = useState<boolean>(true);
  const { setState } = useTaskContext();
  //const [taskName, setTaskName] = useState<string>("");
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: 1, // conferir
      secondsRemaining, // conferir
      formattedSecondsRemaining: "00:00", // conferi
      tasks: [...prevState.tasks, newTask],
    }));

    taskNameInput.current.value = "";
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
