import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <section className={styles.notFound}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>К сожалению, такой страницы не существует.</p>

      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFound;