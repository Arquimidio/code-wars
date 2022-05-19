/*
Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.
*/

function encode(input) {
  return input.replace(/(.)\1*/g, match => `${match.length}${match[0]}`);
}

function decode(input) {
  return input.replace(/(\d+)([a-z])/gi, (match, g1, g2) => g2.repeat(g1));
}