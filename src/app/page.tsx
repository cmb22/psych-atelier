import Image from "next/image";
import ProductGallery from "./ProductGallery";
import styles from "./page.module.css";

const ETSY_URL =
  "https://www.etsy.com/de/listing/4561547758/the-67-car-coat-aus-pflanzlich-gegerbtem";

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

          <a className={styles.buy} href={ETSY_URL}>
            BUY THE ’67
          </a>

          <p className={styles.note}>Available through Etsy</p>
        </div>
      </section>

      <section className={styles.content}>
        <div>
          <h3>The ’67</h3>

          <p>
            Inspired by the leather car coats of the late 1960s and early
            1970s.
          </p>

          <p>
            Full-grain vegetable-tanned buffalo leather. Wide 60s collar.
            Extra-long sleeves. Psychedelic camouflage cotton lining. Made in
            small batches.
          </p>
        </div>

        <div>
          <h3>Size &amp; Fit</h3>

          <p>Currently available in one standard size:</p>

          <dl className={styles.measurements}>
            <div>
              <dt>Pit to pit</dt>
              <dd>54 cm / 21.3 in</dd>
            </div>

            <div>
              <dt>Shoulder width</dt>
              <dd>41 cm / 16.1 in</dd>
            </div>

            <div>
              <dt>Sleeve length</dt>
              <dd>74 cm / 29.1 in</dd>
            </div>

            <div>
              <dt>Total length</dt>
              <dd>80 cm / 31.5 in</dd>
            </div>
          </dl>

          <p className={styles.small}>
            Measurements are taken from the garment laid flat.
          </p>

          <p className={styles.small}>
            The sleeves are intentionally cut longer than on most contemporary
            jackets, designed to reach approximately the base of the thumb.
          </p>
        </div>
      </section>

      <section className={styles.gallery}>
        <h3 className={styles.galleryTitle}>The ’67 in detail</h3>

        <div className={styles.galleryGrid}>
          <div className={styles.galleryImageWrap}>
            <Image
              className={styles.galleryImage}
              src="/vorne-1.jpg"
              alt="The '67 leather and collar detail"
              fill
              sizes="(max-width: 800px) 100vw, 33vw"
            />
          </div>

          <div className={styles.galleryImageWrap}>
            <Image
              className={styles.galleryImage}
              src="/vorne-2.jpg"
              alt="Front detail of The '67 leather car coat"
              fill
              sizes="(max-width: 800px) 100vw, 33vw"
            />
          </div>

          <div className={styles.galleryImageWrap}>
            <Image
              className={styles.galleryImage}
              src="/hinten.jpg"
              alt="Back of The '67 leather car coat"
              fill
              sizes="(max-width: 800px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.madeToOrder}>
        <h3>Made to order</h3>

        <p>
          Prefer something more understated? The ’67 can also be ordered with
          a plain cotton lining in black or dark brown.
        </p>

        <p>
          Need a different size? Custom sizing is available as an extra option.
        </p>
      </section>

      <section className={styles.cta}>
        <h2>The ’67</h2>
        <p className={styles.price}>€399</p>

        <a className={styles.buy} href={ETSY_URL}>
          BUY THE ’67
        </a>
      </section>

      <footer className={styles.footer}>
        PSYCHATELIER <span>·</span> DESIGNED IN OUTER SPACE
      </footer>
    </main>
  );
}