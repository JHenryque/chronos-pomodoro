import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles/Cycles";
import DefaultButton from "../DefaultBotton/DefaultButton";
import DefaultInput from "../DefaultInput/DefaultInput";
import { useRef, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export default function MainForm() {
  const [button, setButton] = useState<boolean>(true);
  const { state, setState } = useTaskContext();
  //const [taskName, setTaskName] = useState<string>("");
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // se o campo estiver vazio, retorna
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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle, // conferir
      secondsRemaining, // conferir
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // conferi
      tasks: [...prevState.tasks, newTask],
    }));

    //taskNameInput.current.value = "";
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
