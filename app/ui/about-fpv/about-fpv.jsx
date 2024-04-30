import Image from "next/image";
import styles from "./about-fpv.module.css";
import pilot from "../../../public/images/pilot.jpg";
import racing from "../../../public/images/racing.jpg";
import cinematic from "../../../public/images/cinematic.jpg";
import freestyle from "../../../public/images/freestyle.jpg";
import resque from "../../../public/images/resque.jpg";
import agriculture from "../../../public/images/agriculture.jpg";

export default function AboutFPV() {
  return (
    <section className={`content-wrap ${styles.about}`}>
      <h2>Цей блог допоможе розібратись з тим що ж таке FPV</h2>
      <p>
        FPV &#10098;First Person View&#10099; - це абревіатура, яка означає «Вид
        від першої особи»
      </p>
      <div className={styles.subwrap}>
        <p>
          FPV дрон — це безпілотний літальний апарат з кмерою, яка транслює
          відео в прямому ефірі на окуляри або шолом пілота. Таке налаштування
          дає пілоту можливість бачити безпілотник у режимі реального часу «від
          першої особи», ніби він сидів у кабіні, незважаючи на керування ним із
          землі.
        </p>
        <Image
          src={pilot}
          alt="Хлопець в FPV окулярах"
          width={400}
          height="auto"
          className={styles.image}
        />
      </div>
      <h2>Напрямки використання бувають різні, ось деякі приклади:</h2>
      <ul>
        <li className={styles.item}>
          <Image
            src={racing}
            alt="Гонки на FPV"
            width={300}
            height="auto"
            className={styles.cardImage}
          />
          <div>
            <h3>Перегони</h3>
            <p>
              Пілоти змагаються один з одним, пролітаючи через складні траси на
              максимально високій швидкості.
            </p>
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <h3>Аерозйомка &#10098;cinematic&#10099;</h3>
            <p>
              FPV-дрони використовуються для зйомки приголомшливих повітряних
              кадрів, які були б неможливі за допомогою традиційних методів.
            </p>
          </div>
          <Image
            src={cinematic}
            alt="Відеозйомка на FPV"
            width={300}
            height="auto"
            className={styles.cardImage}
          />
        </li>
        <li className={styles.item}>
          <Image
            src={freestyle}
            alt="Трюки на FPV"
            width={300}
            height="auto"
            className={styles.cardImage}
          />
          <div>
            <h3>Трюки &#10098;freestyle&#10099;</h3>
            <p>
              Виконанні складних акробатичних трюків, поєднаних у динамічні та
              візуально вражаючі комбінації.
            </p>
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <h3>Пошуково-рятувальні роботи</h3>
            <p>
              FPV-дрони використовуються для пошуку людей, які загубилися або
              постраждали в стихійних лихах.
            </p>
          </div>
          <Image
            src={resque}
            alt="Пошуково-рятувальні роботи на FPV"
            width={300}
            height="auto"
            className={styles.cardImage}
          />
        </li>
        <li className={styles.item}>
          <Image
            src={agriculture}
            alt="Добриво на FPV дроні"
            width={350}
            height="auto"
            className={styles.cardImage}
          />
          <div>
            <h3>Сільське господарство</h3>
            <p>
              FPV-дрони використовуються для моніторингу посівів та худоби, а
              також для внесення добрив і пестицидів.
            </p>
          </div>
        </li>
      </ul>
      <p>
        Це лише частина прикладів, можна вигадати багато застосувань на скільки
        вистачить фантазії!
      </p>
    </section>
  );
}
