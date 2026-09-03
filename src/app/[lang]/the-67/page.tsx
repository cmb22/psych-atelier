import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "../../ProductGallery";
import styles from "./page.module.css";
import LanguageSwitcher from "@/app/LanguageSwitcher";

const ETSY_URL =
  "https://www.etsy.com/de/listing/4561547758/the-67-car-coat-aus-pflanzlich-gegerbtem";

const content = {
  en: {
    subtitle: "Full-Grain Vegetable-Tanned Buffalo Leather Car Coat",
    buy: "BUY THE ’67",
    available: "Available through Etsy",

    story: [
      "The ’67 takes its inspiration from the long tradition of the car coat – a style whose roots reach back to the early days of motoring.",

      "The original car coats emerged in the early 20th century, when open and unheated automobiles called for substantial outerwear to protect drivers and passengers from the elements. Over the decades, the style evolved, becoming shorter, lighter and increasingly part of everyday menswear.",

      "By the late 1960s and early 1970s, leather versions had taken on a distinctly different character: cleaner lines, straighter silhouettes and the broad, expressive collars associated with the period.",

      "The ’67 is our interpretation of that tradition.",

      "Made from full-grain, vegetable-tanned buffalo leather, it combines the simplicity of the classic car coat with the unmistakable attitude of late-60s menswear. The design is deliberately restrained – a clean button front, two discreet welt pockets and a wide period-inspired collar. No unnecessary zips, hardware or decoration: the cut and the character of the leather do the work.",

      "The leather has a warm cognac tone, with the natural grain and variations in texture of the hide left visible rather than made perfectly uniform. As the full-grain, vegetable-tanned leather is worn, it will gradually develop a richer and more individual patina.",

      "As with our shirts, we favour a slightly longer sleeve as part of the silhouette. The sleeves are designed to extend just over the wrist, reaching approximately the base of the thumb rather than ending at the wrist bone. It is a subtle detail, but one that gives the jacket the elongated proportions we prefer.",

      "Inside, the jacket is finished with a contrasting 100% cotton camouflage-pattern lining – an unexpected detail that gives the jacket another side without disturbing the simplicity of the exterior.",
    ],

    sizeTitle: "Size & Fit",
    standardSize: "Currently available in one standard size:",
    measurements: [
      ["Pit to pit", "54 cm / 21.3 in"],
      ["Shoulder width", "41 cm / 16.1 in"],
      ["Sleeve length", "74 cm / 29.1 in"],
      ["Total length", "80 cm / 31.5 in"],
    ],
    flat:
      "Measurements are taken from the garment laid flat.",
    sleeves:
      "The sleeves are intentionally cut longer than on most contemporary jackets, designed to reach approximately the base of the thumb.",

    orderTitle: "Made to order",
    lining:
      "Prefer something more understated? The ’67 can also be ordered with a plain cotton lining in black or dark brown.",
    custom:
      "Need a different size? Custom sizing is available as an extra option.",
  },

  de: {
    subtitle:
      "Car Coat aus vollnarbigem, pflanzlich gegerbtem Büffelleder",
    buy: "THE ’67 KAUFEN",
    available: "Erhältlich über Etsy",

    story: [
      "The ’67 ist von der langen Tradition des Car Coats inspiriert – einem Kleidungsstück, dessen Ursprünge bis in die Anfänge des Automobils zurückreichen.",

      "Die ersten Car Coats entstanden zu Beginn des 20. Jahrhunderts, als offene und unbeheizte Automobile robuste Oberbekleidung erforderten, um Fahrer und Passagiere vor Wind und Wetter zu schützen. Im Laufe der Jahrzehnte entwickelte sich der Stil weiter: Die Mäntel wurden kürzer und leichter und fanden zunehmend Eingang in die alltägliche Herrenmode.",

      "In den späten 1960er- und frühen 1970er-Jahren entwickelten Lederversionen einen deutlich anderen Charakter: klare Linien, gerade Silhouetten und die breiten, ausdrucksstarken Kragen, die für diese Zeit typisch waren.",

      "The ’67 ist unsere Interpretation dieser Tradition.",

      "Gefertigt aus vollnarbigem, pflanzlich gegerbtem Büffelleder verbindet The ’67 die Schlichtheit des klassischen Car Coats mit der unverwechselbaren Haltung der Herrenmode der späten 60er-Jahre. Das Design ist bewusst reduziert – eine klare Knopfleiste, zwei dezente Leistentaschen und ein breiter, zeittypischer Kragen. Keine unnötigen Reißverschlüsse, Metallteile oder Verzierungen: Der Schnitt und der Charakter des Leders stehen im Mittelpunkt.",

      "Das Leder hat einen warmen Cognacton. Seine natürliche Narbung und die Unterschiede in der Struktur der Haut bleiben sichtbar, anstatt künstlich vereinheitlicht zu werden. Mit der Zeit entwickelt das vollnarbige, pflanzlich gegerbte Leder eine immer reichere und individuellere Patina.",

      "Wie bei unseren Hemden bevorzugen wir auch hier etwas längere Ärmel als Teil der Silhouette. Sie reichen bewusst über das Handgelenk hinaus bis ungefähr zum Daumenansatz. Ein kleines Detail, das der Jacke die längeren Proportionen verleiht, die wir bevorzugen.",

      "Innen ist die Jacke mit einem kontrastierenden Camouflage-Futter aus 100 % Baumwolle ausgestattet – ein unerwartetes Detail, das ihr eine zweite Seite verleiht, ohne die Schlichtheit des Äußeren zu beeinträchtigen.",
    ],

    sizeTitle: "Größe & Passform",
    standardSize: "Derzeit in einer Standardgröße erhältlich:",
    measurements: [
      ["Brustweite (Achsel zu Achsel)", "54 cm / 21.3 in"],
      ["Schulterbreite", "41 cm / 16.1 in"],
      ["Ärmellänge", "74 cm / 29.1 in"],
      ["Gesamtlänge", "80 cm / 31.5 in"],
    ],
    flat:
      "Die Maße wurden am flach liegenden Kleidungsstück genommen.",
    sleeves:
      "Die Ärmel sind bewusst länger geschnitten als bei den meisten modernen Jacken und reichen ungefähr bis zum Daumenansatz.",

    orderTitle: "Auf Bestellung",
    lining:
      "Du bevorzugst es etwas zurückhaltender? The ’67 kann auch mit einem einfarbigen Baumwollfutter in Schwarz oder Dunkelbraun bestellt werden.",
    custom:
      "Du brauchst eine andere Größe? Eine individuelle Größenanfertigung ist gegen Aufpreis möglich.",
  },

  fr: {
    subtitle:
      "Car coat en cuir de buffle pleine fleur à tannage végétal",
    buy: "ACHETER THE ’67",
    available: "Disponible sur Etsy",

    story: [
      "The ’67 s’inspire de la longue tradition du car coat, un vêtement dont les origines remontent aux débuts de l’automobile.",

      "Les premiers car coats sont apparus au début du XXe siècle, lorsque les automobiles ouvertes et non chauffées nécessitaient des vêtements d’extérieur suffisamment robustes pour protéger conducteurs et passagers des intempéries. Au fil des décennies, le style a évolué, devenant plus court, plus léger et de plus en plus présent dans la garde-robe masculine quotidienne.",

      "À la fin des années 1960 et au début des années 1970, les versions en cuir ont acquis un caractère bien différent : des lignes plus épurées, des silhouettes plus droites et les larges cols expressifs caractéristiques de cette période.",

      "The ’67 est notre interprétation de cette tradition.",

      "Confectionné en cuir de buffle pleine fleur à tannage végétal, The ’67 associe la simplicité du car coat classique à l’attitude caractéristique de la mode masculine de la fin des années 60. Le design est volontairement sobre : une fermeture boutonnée épurée, deux poches passepoilées discrètes et un large col inspiré de l’époque. Pas de fermetures éclair, de pièces métalliques ou d’ornements superflus : la coupe et le caractère du cuir parlent d’eux-mêmes.",

      "Le cuir présente une chaude teinte cognac, laissant visibles le grain naturel et les variations de texture de la peau plutôt que de chercher une uniformité parfaite. Avec le temps, ce cuir pleine fleur à tannage végétal développera une patine de plus en plus riche et personnelle.",

      "Comme pour nos chemises, nous privilégions des manches légèrement plus longues, qui font partie intégrante de la silhouette. Elles sont conçues pour dépasser légèrement le poignet et atteindre approximativement la base du pouce. C’est un détail subtil qui donne à la veste les proportions allongées que nous recherchons.",

      "À l’intérieur, la veste est doublée d’un coton 100 % à motif camouflage contrastant – un détail inattendu qui lui donne une autre facette sans perturber la simplicité de l’extérieur.",
    ],

    sizeTitle: "Taille & coupe",
    standardSize:
      "Actuellement disponible dans une taille standard :",
    measurements: [
      ["Aisselle à aisselle", "54 cm / 21.3 in"],
      ["Largeur des épaules", "41 cm / 16.1 in"],
      ["Longueur des manches", "74 cm / 29.1 in"],
      ["Longueur totale", "80 cm / 31.5 in"],
    ],
    flat:
      "Les mesures sont prises sur le vêtement posé à plat.",
    sleeves:
      "Les manches sont volontairement plus longues que sur la plupart des vestes contemporaines et sont conçues pour atteindre approximativement la base du pouce.",

    orderTitle: "Sur commande",
    lining:
      "Vous préférez quelque chose de plus discret ? The ’67 peut également être commandé avec une doublure unie en coton noir ou marron foncé.",
    custom:
      "Besoin d’une autre taille ? Une confection aux mesures est disponible moyennant un supplément.",
  },
} as const;

type Language = keyof typeof content;

export default async function ProductPage({
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

  function BuyButton() {
    return (
      <a className={styles.buy} href={ETSY_URL}>
        {text.buy}
      </a>
    );
  }

  return (
    <main className={styles.page}>
      <LanguageSwitcher currentLanguage={language} />

      <Link className={styles.productLink} href={`/${language}`}>
        <header className={styles.header}>
          <Image
            className={styles.logo}
            src="/logo.jpg"
            alt="PsychAtelier — Designed in Outer Space"
            width={465}
            height={165}
            priority
          />
        </header>
      </Link>

      <section className={styles.hero}>
        <ProductGallery />

        <div className={styles.intro}>
          <p className={styles.eyebrow}>PSYCHATELIER</p>

          <h1>The ’67</h1>

          <h2>{text.subtitle}</h2>

          <p className={styles.price}>€399</p>

          <BuyButton />

          <p className={styles.note}>{text.available}</p>
        </div>
      </section>

      <section className={styles.productInfo}>
        <article className={styles.story}>
          <h3>The ’67</h3>

          {text.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <div className={styles.details}>
          <section>
            <h3>{text.sizeTitle}</h3>

            <p>{text.standardSize}</p>

            <dl className={styles.measurements}>
              {text.measurements.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.small}>{text.flat}</p>
            <p className={styles.small}>{text.sleeves}</p>
          </section>

          <section>
            <h3>{text.orderTitle}</h3>

            <p>{text.lining}</p>
            <p>{text.custom}</p>
          </section>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>The ’67</h2>

        <p className={styles.price}>€399</p>

        <BuyButton />
      </section>

      <footer className={styles.footer}>
        PSYCHATELIER <span>·</span> DESIGNED IN OUTER SPACE
      </footer>
    </main>
  );
}