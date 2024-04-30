import Link from "next/link";

import styles from "./main-nav.module.css";

export default function MainNav({ links }) {
  return (
    <nav >
      <ul className={styles.list}>
        {links?.map((link) => (
          <li key={link.name}>
            <Link className={styles.navLink} href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
