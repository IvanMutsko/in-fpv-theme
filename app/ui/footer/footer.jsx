import { FaTiktok } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <a
          href="https://www.tiktok.com/@skally_ua_124"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaTiktok /> TikTok
        </a>
        <p>Сайт створено для тих кому не байдужа тема FPV польотів</p>
        <p>Created by Ivan Mutsko. &#169; 2024.</p>
      </div>
    </footer>
  );
}
