import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Menu.module.css";
import { useState } from "react";

type AvailableThemes = "light" | "dark";

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href=""
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={(e) => handleThemeChange(e)}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
