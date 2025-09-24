import  styles  from './Header.module.css';

export default function Header() {
    console.log(styles);
    return (
      <header>
          <nav>
              <h1 className={styles.list}>Home</h1>
          </nav>
      </header>
    );
}