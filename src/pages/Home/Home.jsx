import styles from "./Home.module.scss";

function Home() {
  return (
    <section className={styles.home}>
      <h1>Добро пожаловать в наш блог!</h1>
      <p>
        Здесь вы можете читать интересные посты и узнавать что-то новое.
      </p>
    </section>
  );
}

export default Home;