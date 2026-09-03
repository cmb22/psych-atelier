import Link from "next/link";
import styles from "./LanguageSwitcher.module.css";

type Language = "en" | "de" | "fr";

type Props = {
    currentLanguage: Language;
    path?: string;
};

const languages: Language[] = ["en", "fr", "de"];

export default function LanguageSwitcher({
    currentLanguage,
    path = "",
}: Props) {
    return (
        <nav className={styles.languages} aria-label="Language">
            {languages.map((language, index) => (
                <span key={language} className={styles.item}>
                    {index > 0 && <span className={styles.separator}>·</span>}

                    <Link
                        href={`/${language}${path}`}
                        className={
                            language === currentLanguage ? styles.active : undefined
                        }
                    >
                        {language.toUpperCase()}
                    </Link>
                </span>
            ))}
        </nav>
    );
}