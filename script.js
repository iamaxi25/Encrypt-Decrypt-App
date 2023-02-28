const largeWheel = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "I",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "X",
  "Z",
  "1",
  "2",
  "3",
  "4",
];
const smallWheel = [
  "g",
  "k",
  "l",
  "n",
  "p",
  "r",
  "t",
  "u",
  "z",
  "&",
  "x",
  "y",
  "s",
  "o",
  "m",
  "q",
  "i",
  "h",
  "f",
  "d",
  "b",
  "a",
  "c",
  "e",
];

function decrypt(cipherText) {
  let plainText = "";
  for (let i = 0; i < cipherText.length; i++) {
    const index = smallWheel.indexOf(cipherText[i].toLowerCase());
    if (index !== -1) {
      plainText += largeWheel[index];
    } else {
      plainText += cipherText[i];
    }
  }
  return plainText;
}

function encrypt(plainText) {
  let cipherText = "";
  for (let i = 0; i < plainText.length; i++) {
    const index = largeWheel.indexOf(plainText[i].toUpperCase());
    if (index !== -1) {
      cipherText += smallWheel[index];
    } else {
      cipherText += plainText[i];
    }
  }
  return cipherText;
}

const decryptButton = document.querySelector(".decrypt");
decryptButton.addEventListener("click", function () {
  const cipherText = document.querySelector("#hashes").value;
  const plainText = decrypt(cipherText);
  document.querySelector("#hashes").value = plainText;
});

const encryptButton = document.querySelector(".encrypt");
encryptButton.addEventListener("click", function () {
  const plainText = document.querySelector("#hashes").value;
  const cipherText = encrypt(plainText);
  document.querySelector("#hashes").value = cipherText;
});
