/*
Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

Your task
Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

function encryptor (key, message) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return message.replace(/[a-z]/gi, letter => {
    const isUpper = letter === letter.toUpperCase();
    const lowerLetter = letter.toLowerCase();
    const index = lower.indexOf(lowerLetter);
    const newKey = Math.abs(key) % 26;
    const newIndex = key >= 0
                     ? index + newKey <= 25? newKey + index : newKey + index - 26
                     : index - newKey >= 0? index - newKey : 26 + index - newKey
    return isUpper? lower[newIndex].toUpperCase() : lower[newIndex]
  })
}