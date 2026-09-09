"use client";

import { useState } from "react";
import FactsSlideshow, { type KarmaFact } from "./FactsSlideshow";
import Fundraising from "./Fundraising";
import NicknameGenerator from "./NicknameGenerator";
import facts from "./facts.json";
import styles from "./page.module.css";

const tabs = [
  { id: "treatment", label: "The Cause" },
  { id: "ride", label: "The Ride" },
  { id: "facts", label: "Karma Facts" },
  { id: "nicknames", label: "Karma Nickname Generator" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function HomeTabs() {
  const [tab, setTab] = useState<TabId>("treatment");

  return (
    <>
      <div className={styles.tabSection}>
        <div className={styles.tabs} role="tablist" aria-label="Ride for Karma">
        {tabs.map((item) => {
          const selected = tab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className={styles.tabPanel}>
        {tab === "treatment" ? (
          <section
            role="tabpanel"
            id="panel-treatment"
            aria-labelledby="tab-treatment"
            className={`${styles.about} ${styles.tabCopy}`}
          >
            <p className={styles.story}>
              Poor Karma has recently been diagnosed with hyperthyroidism. Due to this condition, she has been losing weight, 
              sleeping irregularly, and vocalizing much more than usual. Luckily, a cure is available. Unfortunately,
              Karma is unemployed (she has been applying to lots of places though!) and can&apos;t
              afford the treatment on her own.
            </p>
            <h3>More about the treatment</h3>
            <p className={styles.story}>
              The treatment for hyperthyroidism in cats involves the use of radioactive iodine which is administered orally. 
              The iodine targets abnormal thyroid cells only, so Karma has no risk of turning into the Hulk during the treatment.
              Karma will be treated by North West Nuclear Medicine for Animals in Vancouver, you can
              see more information about the treatment{" "}
              <a
                className={styles.inlineLink}
                href="https://www.iodinecafe.com/treatment"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . Make sure to follow their Instagram, they post pictures of all their patients (including Karma in the future!)
            </p>
          </section>
        ) : null}

        {tab === "ride" ? (
          <section
            role="tabpanel"
            id="panel-ride"
            aria-labelledby="tab-ride"
            className={`${styles.about} ${styles.tabCopy}`}
          >
            <p className={styles.story}>
              On September 30th, 2026, we are organizing a 100km bike ride to raise money for Karma's treatment.
              You can help Karma out by pledging to buy a kilometer on the road below. Each
              kilometer can be claimed by one donor, and costs the same as the kilometer number
              (eg. km 10 costs $10, km 25 costs $25, etc.). If you would like to help Karma out, you can pledge to buy a kilometer below.
            </p>
            <p className={styles.story}>
              The "Karma Ride for the Cure" will be documented on <a className={styles.inlineLink} href="https://www.instagram.com/delaney.bella/" target="_blank" rel="noopener noreferrer">Delaney's Instagram</a>.
              We will be shouting out all donors on the day of the ride so make sure to follow!
            </p>
          </section>
        ) : null}

        {tab === "facts" ? (
          <section
            role="tabpanel"
            id="panel-facts"
            aria-labelledby="tab-facts"
            className={`${styles.about} ${styles.facts}`}
          >
            <FactsSlideshow facts={facts as KarmaFact[]} />
          </section>
        ) : null}

        {tab === "nicknames" ? (
          <section
            role="tabpanel"
            id="panel-nicknames"
            aria-labelledby="tab-nicknames"
            className={`${styles.about} ${styles.tabCopy}`}
          >
            <NicknameGenerator />
          </section>
        ) : null}
      </div>
      </div>

      <Fundraising />
    </>
  );
}
