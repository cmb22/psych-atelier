import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./page.module.css";

const content = {
  en: {
    discover: "Discover The ’67",
  },
  de: {
    discover: "The ’67 entdecken",
  },
  fr: {
    discover: "Découvrir The ’67",
  },
};

type Language = keyof typeof content;

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!(lang in content)) {
    notFound();
  }

  const language = lang as Language;
  const text = content[language];

  return (
    <main className={styles.home}>
      <LanguageSwitcher currentLanguage={language} />

      <Image
        className={styles.logo}
        src="/logo.jpg"
        alt="PsychAtelier — Designed in Outer Space"
        width={700}
        height={250}
        priority
      />

      <Link
        className={styles.productLink}
        href={`/${language}/the-67`}
      >
        {text.discover}
      </Link>
    </main>
  );
}