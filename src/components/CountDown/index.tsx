import type { HomeProps } from "../../pages/Home";
import styles from "./styles.module.css";

type CountDownProps = {} & HomeProps;

export default function CountDown({ state }: CountDownProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
