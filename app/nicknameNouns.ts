type DatamuseWord = {
  word: string;
  tags?: string[];
};

const nounCache = new Map<string, string[]>();

export function firstLetterOfName(name: string) {
  const match = name.trim().match(/\p{L}/u);
  return match ? match[0].toUpperCase() : null;
}

function toNicknameNoun(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function nounsStartingWith(letter: string) {
  const key = letter.toUpperCase();
  const cached = nounCache.get(key);

  if (cached) {
    return cached;
  }

  const response = await fetch(
    `https://api.datamuse.com/words?sp=${encodeURIComponent(key.toLowerCase())}*&md=p&max=1000`,
  );

  if (!response.ok) {
    throw new Error("Could not load English nouns.");
  }

  const data = (await response.json()) as DatamuseWord[];
  const nouns = [
    ...new Set(
      data
        .filter((item) => item.tags?.includes("n") && !item.tags.includes("prop"))
        .map((item) => item.word.trim())
        .filter((word) => /^[a-z][a-z'-]{1,}$/i.test(word))
        .map(toNicknameNoun),
    ),
  ];

  nounCache.set(key, nouns);
  return nouns;
}

export function pickRandomNoun(options: string[], avoid?: string) {
  const pool = options.filter((noun) => noun.toLowerCase() !== avoid?.toLowerCase());
  const source = pool.length > 0 ? pool : options;
  return source[Math.floor(Math.random() * source.length)] ?? null;
}
