"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./FactsSlideshow.module.css";

export type KarmaFact = {
  fact: string;
  image: string;
};

type FactsSlideshowProps = {
  facts: KarmaFact[];
};

export default function FactsSlideshow({ facts }: FactsSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (facts.length <= 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % facts.length);
    }, 15_000);

    return () => window.clearTimeout(timer);
  }, [index, facts.length]);

  if (facts.length === 0) {
    return (
      <p className={styles.empty}>
        Add objects with a <code>fact</code> and <code>image</code> to{" "}
        <code>app/facts.json</code>.
      </p>
    );
  }

  const current = facts[index];
  const hasMultiple = facts.length > 1;

  function goNext() {
    setIndex((currentIndex) => (currentIndex + 1) % facts.length);
  }

  function goPrev() {
    setIndex((currentIndex) => (currentIndex - 1 + facts.length) % facts.length);
  }

  return (
    <div className={styles.slideshow}>
      <figure className={styles.slide}>
        <div className={styles.imageWrap}>
          <Image
            src={current.image}
            alt=""
            fill
            sizes="(max-width: 1080px) 84vw, 736px"
            className={styles.image}
            priority
          />
          {hasMultiple ? (
            <>
              <button
                type="button"
                className={`${styles.arrow} ${styles.prev}`}
                onClick={goPrev}
                aria-label="Previous fact"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.arrow} ${styles.next}`}
                onClick={goNext}
                aria-label="Next fact"
              >
                ›
              </button>
            </>
          ) : null}
        </div>
        <figcaption className={styles.fact}>{current.fact}</figcaption>
      </figure>
    </div>
  );
}
