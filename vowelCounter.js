function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log("Vowels in 'GitHub Repository':", countVowels("GitHub Repository"));