import styles from "./stylles.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <label htmlFor="task">task:</label>
        <input type="text" id="task" />
      </div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <p>Ciclos</p>
        <p>0 0 0 0 0 0</p>
      </div>

      <div className={styles.formRow}>
        <button type="submit">Começar</button>
      </div>
    </form>
  );
}
