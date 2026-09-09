"use client";

import { FormEvent, useState } from "react";
import { firstLetterOfName, nounsStartingWith, pickRandomNoun } from "./nicknameNouns";
import styles from "./NicknameGenerator.module.css";

export default function NicknameGenerator() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate(currentName: string) {
    const letter = firstLetterOfName(currentName);

    if (!letter) {
      setNickname("");
      setError("Please enter a name that starts with a letter.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const nouns = await nounsStartingWith(letter);
      const currentNoun = nickname.endsWith(" the cat")
        ? nickname.slice(0, -" the cat".length)
        : undefined;
      const noun = pickRandomNoun(nouns, currentNoun);

      if (!noun) {
        setNickname("");
        setError("Could not invent a nickname for that letter. Try another name.");
        return;
      }

      setNickname(`${noun} the cat`);
    } catch {
      setError("Could not look up English nouns right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void generate(name);
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.intro}>
        Karma has many nicknames, such as &quot;Concrete the Cat&quot; and &quot;Schnatt the Cat&quot;. Type
        your name below to get your very own Karma nickname!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Your name
          <input
            name="nickname-name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Gathering nouns…" : nickname ? "Generate another" : "Generate nickname"}
        </button>
      </form>
      {error ? <p className={styles.error}>{error}</p> : null}
      {nickname ? (
        <p className={styles.result} aria-live="polite">
          <span className={styles.resultLabel}>Your Karma nickname is</span>
          <strong>{nickname}</strong>
        </p>
      ) : null}
    </div>
  );
}
