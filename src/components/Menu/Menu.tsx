import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './Menu.module.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'light' | 'dark';

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(
    (localStorage.getItem('theme') as AvailableThemes) || 'dark',
  );

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  const nextTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // para salvar a preferencia de thema do usuario no navegador
    localStorage.setItem('theme', theme);
  }, [theme]); // executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <NavLink
        className={styles.menuLink}
        to={'/'}
        aria-label='Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </NavLink>

      <NavLink
        className={styles.menuLink}
        to={'/history'}
        aria-label='Histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </NavLink>

      <RouterLink
        className={styles.menuLink}
        href='/settings/'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>

      <a
        className={styles.menuLink}
        href=''
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={e => handleThemeChange(e)}
      >
        {nextTheme[theme]}
      </a>
    </nav>
  );
}
