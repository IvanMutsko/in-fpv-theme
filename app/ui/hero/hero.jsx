import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`content-wrap ${styles.wrap}`}>
        <h1>In FPV theme</h1>
      </div>
    </section>
  );
}
