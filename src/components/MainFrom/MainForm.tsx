import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles/Cycles";
import DefaultButton from "../DefaultBotton/DefaultButton";
import DefaultInput from "../DefaultInput/DefaultInput";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { TimerWorkerManage } from "../../workers/timerWorkerManage";

export default function MainForm() {
  const { state, dispatch } = useTaskContext();
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    const worker = TimerWorkerManage.getInstance();

    worker.postMessage("FAVOR"); // Sim, posso fazer um favor

    worker.postMessage("FALA_OI"); // OK: OI!

    worker.postMessage("BLALBLA"); // Não entendi!

    worker.postMessage("FECHAR"); // Tá bom, vou fechar

    worker.onmessage((event) => {
      console.log("PRINCIPAL recebeu:", event.data);
      worker.terminate();
    });
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form">
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
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {/*o react nao reconhece o botao de parar po causa do componente igual, por isso o ! tem que ser usado key='para que ele reconheca coloando nome diferente' de que butao ta clicando 
          ou
          usar dois componentes diferentes
          ou 
          usar uma funçao e passar e previnir o default
        --------------------------------------------------- opcional, outra forma de fazer ----------------------------------------------------------------------------------
        {!state.activeTask && (
          <DefaultButton
            aria-label="Iniciar tarefa"
            title="Iniciar tarefa"
            icon={<PlayCircleIcon />}
            type="submit"
            key="button_play"
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label="Parar tarefa"
            title="Parar tarefa"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptTask}
            key="button_stop"
          />
        )} */}

        {!state.activeTask ? (
          <DefaultButton
            aria-label="Iniciar tarefa"
            title="Iniciar tarefa"
            icon={<PlayCircleIcon />}
            type="submit"
          />
        ) : (
          <DefaultButton
            aria-label="Parar tarefa"
            title="Parar tarefa"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
