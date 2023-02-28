// Define two arrays of characters, one for the large wheel and one for the small wheel
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
// Define a function that takes a cipher text and returns the plain text by looking up each character in the small wheel and finding its corresponding character in the large wheel
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
// Define a function that takes a plain text and returns the cipher text by looking up each character in the large wheel and finding its corresponding character in the small wheel
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
// Define a click event listener for the "Decrypt" button that takes the value of the input field, decrypts it, and sets the input field value to the decrypted text
const decryptButton = document.querySelector(".decrypt");
decryptButton.addEventListener("click", function () {
  const cipherText = document.querySelector("#hashes").value;
  if (cipherText === "") {
    alert("Please enter a cipher text to decrypt.");
    return;
  }
  const plainText = decrypt(cipherText);
  document.querySelector("#hashes").value = plainText;
});
// Define a click event listener for the "Encrypt" button that takes the value of the input field, encrypts it, and sets the input field value to the encrypted text
const encryptButton = document.querySelector(".encrypt");
encryptButton.addEventListener("click", function () {
  const plainText = document.querySelector("#hashes").value;
  const cipherText = encrypt(plainText);
  if (cipherText === "") {
    alert("Please enter a text to encrypt.");
    return;
  }
  document.querySelector("#hashes").value = cipherText;
});

// Define a function that deletes the text in the input field when called
function deleteText() {
  document.getElementById("hashes").value = "";
}
