/*
Ascii Shift Encryption/Decryption
The goal of this kata is to create a very simple ASCII encryption and decryption. The encryption algorithm should shift each character's charcode by the character's current index in the string (0-based).

The input strings will never require to go outside of the ASCII range.
*/

function asciiEncrypt(plaintext) {
  return plaintext.replace(/./g, (char, i) => String.fromCharCode(char.charCodeAt() + i));
}
  
function asciiDecrypt(ciphertext) {
  return ciphertext.replace(/./g, (char, i) => String.fromCharCode(char.charCodeAt() - i));
}