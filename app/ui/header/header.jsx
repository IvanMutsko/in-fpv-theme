import Image from "next/image";
import Link from "next/link";
import MainNav from "../main-nav/main-nav";
import styles from "./header.module.css";

const links = [
  {
    name: "Моя сторінка",
    path: "/my-page",
  },
  {
    name: "Трюки/Freestyle",
    path: "/tricks",
  },
  {
    name: "Блог",
    path: "/blog",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link href={"/"} className={styles.link}>
          <Image
            priority
            className={styles.logo}
            src="/images/logo.svg"
            width={50}
            height={50}
            alt="Logo"
          />
          <p>In FPV theme</p>
        </Link>
        <MainNav links={links} />
      </div>
    </header>
  );
}
