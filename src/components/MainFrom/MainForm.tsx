import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import Cycles from '../Cycles/Cycles';
import DefaultButton from '../DefaultBotton/DefaultButton';
import DefaultInput from '../DefaultInput/DefaultInput';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/shownMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export default function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    // se o campo estiver vazio, retorna
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn('Digite o nome da tarefa');
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

    showMessage.success('Tarefa iniciada!');
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    showMessage.dismiss();
    showMessage.warn('Tarefa interrompida!');

    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <div className='formRow'>
        <DefaultInput
          id='task'
          type='text'
          label='Task'
          ref={taskNameInput}
          placeholder='Digit a task'
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='formRow'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar tarefa'
            title='Iniciar tarefa'
            icon={<PlayCircleIcon />}
            type='submit'
          />
        ) : (
          <DefaultButton
            aria-label='Parar tarefa'
            title='Parar tarefa'
            icon={<StopCircleIcon />}
            color='red'
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
