import { TrashIcon } from "lucide-react";
import DefaultButton from "../../components/DefaultBotton/DefaultButton";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTask";
import { useEffect, useState } from "react";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export default function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    }
  );

  useEffect(() => {
    setSortTasksOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  function handleSortTask({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "asc" ? "desc" : "asc";

    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: state.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    if (!confirm("Tem certeza que deseja apagar todo o histórico?")) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <Heading>
        <span>History</span>
        {hasTasks && (
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o hiorico"
              title="Apagar todo o hiorico"
              onClick={handleResetHistory}
            />
          </span>
        )}
      </Heading>

      {hasTasks ? (
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSortTask({ field: "name" })}
                  className={styles.thSort}
                >
                  Tarefa ↕
                </th>
                <th
                  onClick={() => handleSortTask({ field: "duration" })}
                  className={styles.thSort}
                >
                  Duração ↕
                </th>
                <th
                  onClick={() => handleSortTask({ field: "startDate" })}
                  className={styles.thSort}
                >
                  Data ↕
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {sortTasksOptions.tasks.map((task) => {
                const taskTypeDictionary = {
                  workTime: "Foco",
                  shortBreakTime: "Descanso Curta",
                  longBreakTime: "Descanso Longa",
                };

                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className={styles.emptyList}>Nenhuma tarefa encontrada</p>
      )}
    </MainTemplate>
  );
}
