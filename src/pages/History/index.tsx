import { TrashIcon } from "lucide-react";
import DefaultButton from "../../components/DefaultBotton/DefaultButton";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import styles from "./styles.module.css";

export default function History() {
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
            {Array.from({ length: 20 }).map((_, index) => {
              return (
                <tr key={index}>
                  <td>Estudar</td>

                  <td>25min</td>

                  <td>20/04/2025 08:00</td>

                  <td>Completa</td>

                  <td>Foco</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </MainTemplate>
  );
}
