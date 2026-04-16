const palindromes = function (text) {
const cleanedText = text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .join("");
  const reversedText = cleanedText.split("").reverse().join("");
  return cleanedText === reversedText ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
