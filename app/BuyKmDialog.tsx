"use client";

import { useEffect, useId } from "react";
import { priceForKm } from "./data";
import styles from "./BuyKmDialog.module.css";

type BuyKmDialogProps = {
  km?: number;
  onClose: () => void;
};

export default function BuyKmDialog({ km, onClose }: BuyKmDialogProps) {
  const titleId = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.instructions}>
          <p>
            To complete your pledge, please send an e-transfer to {" "}
            <strong><a href="mailto:rideforkarma@gmail.com">rideforkarma@gmail.com</a></strong>. In the note section of the e-transfer, please
            list:
          </p>
          <ul>
            <li>Your name</li>
            <li>The kilometer you are buying (this should match the amount you are sending)</li>
            <li>Your address if you would like us to send you some thank you goodies</li>
          </ul>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.primary} onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
