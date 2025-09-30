import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

type AvailableThemes = "light" | "dark";

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(
    (localStorage.getItem("theme") as AvailableThemes) || "dark"
  );

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

  const nextTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    // para salvar a preferencia de thema do usuario no navegador
    localStorage.setItem("theme", theme);

    return () => {
      console.log("Conmponents será atualizado");
    };
  }, [theme]); // executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <NavLink
        className={styles.menuLink}
        to={"/"}
        aria-label="Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </NavLink>

      <NavLink
        className={styles.menuLink}
        to={"/history"}
        aria-label="Histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </NavLink>

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
        {nextTheme[theme]}
      </a>
    </nav>
  );
}
