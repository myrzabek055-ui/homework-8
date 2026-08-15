import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <h1>О нас</h1>

      <p>
        Это простое SPA-приложение "Блог", созданное с помощью React и
        React Router DOM.
      </p>
    </section>
  );
}

export default About;