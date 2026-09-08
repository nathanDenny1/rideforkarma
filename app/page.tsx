import Image from "next/image";
import HomeTabs from "./HomeTabs";
import karmaPhoto from "./images/karmaLick.jpeg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.banner}>
        <Image
          src={karmaPhoto}
          alt="Karma cat"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.bannerInner}>
          <h1>Ride for Karma</h1>
          <p className={styles.bannerTagline}>Together, we can irradiate Karma</p>
        </div>
      </header>

      <div className={styles.page}>
        <HomeTabs />
      </div>
    </div>
  );
}
