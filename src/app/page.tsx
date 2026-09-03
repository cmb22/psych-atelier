import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Image
        className={styles.logo}
        src="/logo.jpg"
        alt="PsychAtelier — Designed in Outer Space"
        width={700}
        height={250}
        priority
      />

      <Link className={styles.productLink} href="/the-67">
        Discover The ’67
      </Link>
    </main>
  );
}