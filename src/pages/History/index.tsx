import { TrashIcon } from "lucide-react";
import DefaultButton from "../../components/DefaultBotton/DefaultButton";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTask";
import { fi } from "date-fns/locale";
import { useState } from "react";

export default function History() {
  const { state } = useTaskContext();
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    }
  );

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

  return (
    <MainTemplate>
      <Heading>
        <span>History</span>
        <span className={styles.buttonContainer}>
          <DefaultButton
            icon={<TrashIcon />}
            color="red"
            aria-label="Apagar todo o hiorico"
            title="Apagar todo o hiorico"
          />
        </span>
      </Heading>

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
    </MainTemplate>
  );
}
