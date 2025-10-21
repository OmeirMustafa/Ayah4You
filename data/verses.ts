import type { Ayah } from '../types';

export const verses: Ayah[] = [
  // Verses about Patience & Hardship
  {
    englishText: "So, verily, with every difficulty, there is relief: Verily, with every difficulty there is relief.",
    surahName: "Ash-Sharh",
    surahNumber: 94,
    ayahNumber: '5-6',
  },
  {
    englishText: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient.",
    surahName: "Al-Baqarah",
    surahNumber: 2,
    ayahNumber: 155,
  },
  {
    englishText: "Allah does not charge a soul except [with that within] its capacity.",
    surahName: "Al-Baqarah",
    surahNumber: 2,
    ayahNumber: 286,
  },
  {
    englishText: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
    surahName: "Al-Baqarah",
    surahNumber: 2,
    ayahNumber: 153,
  },
  {
    englishText: "And be patient, for indeed, Allah does not allow to be lost the reward of the doers of good.",
    surahName: "Hud",
    surahNumber: 11,
    ayahNumber: 115,
  },
  // Verses about Hope & Allah's Mercy
  {
    englishText: "And despair not of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.",
    surahName: "Yusuf",
    surahNumber: 12,
    ayahNumber: 87,
  },
  {
    englishText: "Indeed, the mercy of Allah is near to the doers of good.",
    surahName: "Al-A'raf",
    surahNumber: 7,
    ayahNumber: 56,
  },
  {
    englishText: "...And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect.",
    surahName: "At-Talaq",
    surahNumber: 65,
    ayahNumber: '2-3',
  },
  // Verses about Sadness, Fear & Trust
  {
    englishText: "Do not be sad, for Allah is with us.",
    surahName: "At-Tawbah",
    surahNumber: 9,
    ayahNumber: 40,
  },
  {
    englishText: "Unquestionably, by the remembrance of Allah hearts are assured.",
    surahName: "Ar-Ra'd",
    surahNumber: 13,
    ayahNumber: 28,
  },
  // Verses about Gratitude & Happiness
  {
    englishText: "If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.",
    surahName: "Ibrahim",
    surahNumber: 14,
    ayahNumber: 7,
  },
  {
    englishText: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    surahName: "Al-Baqarah",
    surahNumber: 2,
    ayahNumber: 152,
  },
  // Verses about Life & Morality
  {
    englishText: "So whoever does an atom's weight of good will see it, And whoever does an atom's weight of evil will see it.",
    surahName: "Az-Zalzalah",
    surahNumber: 99,
    ayahNumber: '7-8',
  },
  {
    englishText: "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better; and thereupon the one whom between you and him is enmity [will become] as though he was a devoted friend.",
    surahName: "Fussilat",
    surahNumber: 41,
    ayahNumber: 34,
  },
  {
    englishText: "Indeed, we belong to Allah, and indeed to Him we will return.",
    surahName: "Al-Baqarah",
    surahNumber: 2,
    ayahNumber: 156,
  },
];


/**
 * Simulates an asynchronous fetch for a random Ayah, with a chance of failure.
 * Ensures the new Ayah is different from the current one.
 * @param currentAyah The currently displayed Ayah, or null if none.
 * @returns A Promise that resolves with a new Ayah.
 */
export const fetchRandomAyah = (currentAyah: Ayah | null): Promise<Ayah> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a 20% chance of failure for demonstration
      if (Math.random() < 0.2) {
        reject(new Error('Failed to load verse.'));
      } else {
        let newAyah;
        do {
          newAyah = verses[Math.floor(Math.random() * verses.length)];
        } while (currentAyah && newAyah.englishText === currentAyah.englishText);
        resolve(newAyah);
      }
    }, 600); // Simulate network latency
  });
};
