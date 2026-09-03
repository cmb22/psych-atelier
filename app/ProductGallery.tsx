"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProductGallery.module.css";

const images = [
    {
        src: "/hauptbild.jpg",
        alt: "The '67 buffalo leather car coat",
    },
    {
        src: "/vorne-1.jpg",
        alt: "Close-up of The '67 vegetable-tanned buffalo leather",
    },
    {
        src: "/innen-1.jpg",
        alt: "Close-up of The '67 lining and inside",
    },
    {
        src: "/vorne-2.jpg",
        alt: "Front detail of The '67 leather car coat",
    },
    {
        src: "/hinten.jpg",
        alt: "Back of The '67 leather car coat",
    },
];

export default function ProductGallery() {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className={styles.gallery}>
            <div className={styles.mainImage}>
                <Image
                    src={images[activeImage].src}
                    alt={images[activeImage].alt}
                    fill
                    priority={activeImage === 0}
                    className={styles.productImage}
                    sizes="(max-width: 800px) 100vw, 60vw"
                />
            </div>

            <div className={styles.thumbnails}>
                {images.map((image, index) => (
                    <button
                        key={image.src}
                        type="button"
                        className={`${styles.thumbnail} ${activeImage === index ? styles.thumbnailActive : ""
                            }`}
                        onClick={() => setActiveImage(index)}
                        aria-label={`View image ${index + 1}`}
                    >
                        <Image
                            src={image.src}
                            alt=""
                            fill
                            className={styles.thumbnailImage}
                            sizes="100px"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}