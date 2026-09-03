"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./LanguageSwitcher.module.css";

type Language = "en" | "de" | "fr";

const languages: Language[] = ["en", "de", "fr"];

export default function LanguageSwitcher({
    currentLanguage,
}: {
    currentLanguage: Language;
}) {
    const pathname = usePathname();

    // Entfernt die aktuelle Sprache aus dem Pfad.
    //
    // /en/the-67 → /the-67
    // /de/the-67 → /the-67
    // /fr         → /
    const pathWithoutLanguage =
        pathname.replace(/^\/(en|de|fr)(?=\/|$)/, "") || "";

    return (
        <nav className={styles.languages} aria-label="Language">
            {languages.map((language, index) => {
                const href = `/${language}${pathWithoutLanguage}`;

                return (
                    <span key={language} className={styles.item}>
                        {index > 0 && (
                            <span className={styles.separator}>·</span>
                        )}

                        <Link
                            href={href}
                            className={
                                language === currentLanguage
                                    ? styles.active
                                    : undefined
                            }
                        >
                            {language.toUpperCase()}
                        </Link>
                    </span>
                );
            })}
        </nav>
    );
}