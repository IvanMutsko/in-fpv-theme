import Image from "next/image";
import Link from "next/link";
import ava1 from "../../../../public/images/tricks/ava1.png";
import ava2 from "../../../../public/images/tricks/ava2.png";
import ava3 from "../../../../public/images/tricks/ava3.png";
import styles from "./levels.module.css";

export default function Levels() {
  return (
    <section className={`content-wrap ${styles.levels}`}>
      <h2>Трюки по рівню складності</h2>
      <p>
        Якщо ви новачок у світі польотів FPV, опанування різних елементів буде
        складним, але результат того вартий! У цьому розділі ви знайдете гайди
        по фрістайлу на FPV для різних рівнів пілотів. Дякуючи гарним гайдам з
        YouTube-каналу &#171;headmazta&#187; ви зможете з усім розібратись.
      </p>
      <ul className={styles.list}>
        <li className={styles.card}>
          <Link className={styles.link} href="/tricks/junior">
            <Image
              src={ava1}
              alt="Трюки на FPV"
              width={300}
              height={300}
              className={styles.cardImage}
            />
            Початківець
          </Link>
        </li>
        <li className={styles.card}>
          <Link className={styles.link} href="/tricks/middle">
            <Image
              src={ava2}
              alt="Трюки на FPV"
              width={300}
              height={300}
              className={styles.cardImage}
            />
            Досвідчений
          </Link>
        </li>
        <li className={styles.card}>
          <Link className={styles.link} href="/tricks/senior">
            <Image
              src={ava3}
              alt="Трюки на FPV"
              width={300}
              height={300}
              className={styles.cardImage}
            />
            Профік
          </Link>
        </li>
      </ul>
    </section>
  );
}
