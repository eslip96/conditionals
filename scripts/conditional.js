// 1

let firstObject = {
  id: 1,
  name: "Ryan",
};

let secondObject = {
  address: "123 fake street",
  Phone: "555-555-5555",
};

let thirdObject = {
  ...firstObject,
  ...secondObject,
};

console.log(firstObject);
console.log(thirdObject);

// 2

let firstNum = 5;
let secondNum = 10;

if (firstNum >= secondNum) {
  console.log(`${firstNum} is greater than ${secondNum}`);
} else {
  console.log(`${secondNum} is greater than ${firstNum}`);
}

// 3
let sentence = "i am a sentence";

let words = sentence.split(" ");
console.log(words);

words = words
  .filter((word) => word !== "")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

let finishedSentence = words.join(" ");
console.log(finishedSentence);

// 4
let inputSentence = "Hi there My Name is Enoka cba";

let cleanedSentence = inputSentence.toLowerCase();

if (cleanedSentence.length > 0) {
  let sortedSentence = cleanedSentence.split("");

  sortedSentence.sort();

  let finalSentence = sortedSentence.join("");

  console.log(finalSentence);
} else {
  console.log("input not a string");
}
