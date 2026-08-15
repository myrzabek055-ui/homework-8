import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 className={styles.logo}>Блог</h2>

        <nav className={styles.nav}>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/posts">Посты</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;