import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`content-wrap ${styles.wrap}`}>
        <h1>Гайд по FPV фрістайлу</h1>
      </div>
    </section>
  );
}
