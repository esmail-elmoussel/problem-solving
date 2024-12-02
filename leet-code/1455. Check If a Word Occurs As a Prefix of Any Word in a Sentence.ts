// Problem Link: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

export function isPrefixOfWordEasySolution(
  sentence: string,
  searchWord: string
): number {
  const index = sentence
    .split(" ")
    .findIndex((word) => word.slice(0, searchWord.length) === searchWord);

  return index > -1 ? index + 1 : -1;
}

export function isPrefixOfWord(sentence: string, searchWord: string): number {
  let spacesCount = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      spacesCount++;

      continue;
    }

    if (sentence[i] === searchWord[0] && (sentence[i - 1] === " " || i === 0)) {
      for (let j = i; j <= i + searchWord.length; j++) {
        if (sentence[j] !== searchWord[j - i]) {
          break;
        }

        if (j - i === searchWord.length - 1) {
          return spacesCount + 1;
        }
      }
    }
  }

  return -1;
}

const sentence = "i love eating burger",
  searchWord = "burg";

console.log(isPrefixOfWord(sentence, searchWord));
