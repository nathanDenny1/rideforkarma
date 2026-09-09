"use client";

import { useMemo, useState } from "react";
import BuyKmDialog from "./BuyKmDialog";
import { donorByKm, GOAL_KM, priceForKm } from "./data";
import styles from "./Road.module.css";

const kilometers = Array.from({ length: GOAL_KM }, (_, index) => index + 1);

type RoadProps = {
  kmClaimed: number;
  goalKm: number;
};

export default function Road({ kmClaimed, goalKm }: RoadProps) {
  const kmRemaining = goalKm - kmClaimed;
  const progress = Math.round((kmClaimed / goalKm) * 100);
  const [dialog, setDialog] = useState<number | "general" | null>(null);

  const donors = useMemo(() => new Map(donorByKm), []);

  return (
    <section className={styles.section} aria-labelledby="road-heading">
      <div className={styles.header}>
        <div className={styles.headerCopy}>
          <p className={styles.headerCopyText}>
            The road below lists all our wonderful donors who have pledged to help get Karma irradiated.
          </p>
          <p className={styles.headerCopyText}>
            If you would like to help Karma out, you can pledge to buy a kilometer of the road. Each kilometer on the road costs the same as the kilometer number. For example, the first kilometer costs $1, the second kilometer costs $2, and so on.
          </p>
          <button
            type="button"
            className={styles.buyButton}
            onClick={() => setDialog("general")}
          >
            Buy a kilometer
          </button>
        </div>
        <div className={styles.claimedStat}>
          <span className={styles.claimedLabel}>Kilometers claimed</span>
          <strong>
            {kmClaimed} / {goalKm}
          </strong>
          <span className={styles.claimedHint}>{kmRemaining} km still available</span>
          <div
            className={styles.progress}
            role="progressbar"
            aria-valuenow={kmClaimed}
            aria-valuemin={0}
            aria-valuemax={goalKm}
            aria-label={`${kmClaimed} of ${goalKm} kilometers claimed`}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className={styles.scroller} tabIndex={0} aria-label="100 kilometer road of donors">
        <div className={styles.trackShell}>
          <div className={styles.track}>
            <div className={styles.lane} aria-hidden="true" />
            <div className={`${styles.marker} ${styles.start}`}>
              <span className={styles.flag}>Start</span>
            </div>

          {kilometers.map((km) => {
            const donor = donors.get(km);

            if (donor) {
                let kmStyle = styles.plain;
                if (km < 25) {
                  kmStyle = styles.plain;
                } else if (km < 50) {
                  kmStyle = styles.bronze;
                } else if (km < 75) {
                  kmStyle = styles.silver;
                } else {
                  kmStyle = styles.gold;
                }
              return (
                <article
                  key={km}
                  className={`${styles.segment} ${styles.claimed} ${kmStyle}`}
                  aria-label={`Kilometer ${km}, claimed by ${donor.name} for $${priceForKm(km)}`}
                >
                  <span className={styles.kmLabel}>Km {km}</span>
                  <strong className={styles.donorName}>{donor.name}</strong>
                  <span className={styles.amount}>${priceForKm(km)}</span>
                </article>
              );
            }

            return (
              <button
                key={km}
                type="button"
                className={`${styles.segment} ${styles.available}`}
                aria-label={`Kilometer ${km}, unclaimed, $${priceForKm(km)}. Click for e-transfer instructions.`}
                onClick={() => setDialog(km)}
              >
                <span className={styles.kmLabel}>Km {km}</span>
                <span className={styles.availableLabel}>Available</span>
                <span className={styles.amount}>${priceForKm(km)}</span>
              </button>
            );
          })}

            <div className={`${styles.marker} ${styles.finish}`}>
              <span className={styles.flag}>Finish</span>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.hint}>*If the kilometer you are buying has already been claimed, you will be assigned to the nearest available kilometer. Please do not attempt to buy a kilometer that already shows as claimed.</p>

      {dialog != null ? (
        <BuyKmDialog
          km={dialog === "general" ? undefined : dialog}
          onClose={() => setDialog(null)}
        />
      ) : null}
    </section>
  );
}
