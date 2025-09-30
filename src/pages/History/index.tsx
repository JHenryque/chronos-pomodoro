import { TrashIcon } from "lucide-react";
import DefaultButton from "../../components/DefaultBotton/DefaultButton";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";

export default function History() {
  const { state } = useTaskContext();

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
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Data</th>
              <th>Status</th>
              <th>Tipo</th>
            </tr>
          </thead>

          <tbody>
            {state.tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.duration}min</td>
                  <td>{formatDate(task.startDate)}</td>
                  <td>{getTaskStatus(task, state.activeTask)}</td>
                  <td>{task.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </MainTemplate>
  );
}
