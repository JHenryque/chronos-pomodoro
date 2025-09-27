import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "light" | "dark";

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  // useEffect(() => {
  //   console.log("count", Date.now());
  // }); // executa toda vez que o componente for atualizado na tela

  // useEffect(() => {
  //   console.log("count", Date.now());
  // }, []); // executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      console.log("Conmponents será atualizado");
    };
  }, [theme]); // executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
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
