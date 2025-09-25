import { TimerIcon } from "lucide-react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink} id="logo">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
