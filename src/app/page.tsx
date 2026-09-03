import Image from "next/image";
import ProductGallery from "./ProductGallery";
import styles from "./page.module.css";

const ETSY_URL =
  "https://www.etsy.com/de/listing/4561547758/the-67-car-coat-aus-pflanzlich-gegerbtem";

const measurements = [
  ["Pit to pit", "54 cm / 21.3 in"],
  ["Shoulder width", "41 cm / 16.1 in"],
  ["Sleeve length", "74 cm / 29.1 in"],
  ["Total length", "80 cm / 31.5 in"],
];

function BuyButton() {
  return (
    <a className={styles.buy} href={ETSY_URL}>
      BUY THE ’67
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
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

      <section className={styles.hero}>
        <ProductGallery />

        <div className={styles.intro}>
          <p className={styles.eyebrow}>PSYCHATELIER</p>
          <h1>The ’67</h1>

          <h2>
            Full-Grain Vegetable-Tanned
            <br />
            Buffalo Leather Car Coat
          </h2>

          <p className={styles.price}>€399</p>
          <BuyButton />
          <p className={styles.note}>Available through Etsy</p>
        </div>
      </section>

      <section className={styles.productInfo}>
        <article className={styles.story}>
          <h3>The ’67</h3>

          <p>
            The ’67 takes its inspiration from the long tradition of the car coat –
            a style whose roots reach back to the early days of motoring.
          </p>

          <p>
            The original car coats emerged in the early 20th century, when open and
            unheated automobiles called for substantial outerwear to protect drivers
            and passengers from the elements. Over the decades, the style evolved,
            becoming shorter, lighter and increasingly part of everyday menswear.
          </p>

          <p>
            By the late 1960s and early 1970s, leather versions had taken on a
            distinctly different character: cleaner lines, straighter silhouettes
            and the broad, expressive collars associated with the period.
          </p>

          <p>The ’67 is our interpretation of that tradition.</p>

          <p>
            Made from full-grain, vegetable-tanned buffalo leather, it combines the
            simplicity of the classic car coat with the unmistakable attitude of
            late-60s menswear. The design is deliberately restrained – a clean button
            front, two discreet welt pockets and a wide period-inspired collar. No
            unnecessary zips, hardware or decoration: the cut and the character of
            the leather do the work.
          </p>

          <p>
            The leather has a warm cognac tone, with the natural grain and variations
            in texture of the hide left visible rather than made perfectly uniform.
            As the full-grain, vegetable-tanned leather is worn, it will gradually
            develop a richer and more individual patina.
          </p>

          <p>
            As with our shirts, we favour a slightly longer sleeve as part of the
            silhouette. The sleeves are designed to extend just over the wrist,
            reaching approximately the base of the thumb rather than ending at the
            wrist bone. It is a subtle detail, but one that gives the jacket the
            elongated proportions we prefer.
          </p>

          <p>
            Inside, the jacket is finished with a contrasting 100% cotton
            camouflage-pattern lining – an unexpected detail that gives the jacket
            another side without disturbing the simplicity of the exterior.
          </p>
        </article>

        <div className={styles.details}>
          <section>
            <h3>Size &amp; Fit</h3>

            <p>Currently available in one standard size:</p>

            <dl className={styles.measurements}>
              {measurements.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.small}>
              Measurements are taken from the garment laid flat.
            </p>

            <p className={styles.small}>
              The sleeves are intentionally cut longer than on most contemporary
              jackets, designed to reach approximately the base of the thumb.
            </p>
          </section>

          <section>
            <h3>Made to order</h3>

            <p>
              Prefer something more understated? The ’67 can also be ordered with a
              plain cotton lining in black or dark brown.
            </p>

            <p>
              Need a different size? Custom sizing is available as an extra option.
            </p>
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