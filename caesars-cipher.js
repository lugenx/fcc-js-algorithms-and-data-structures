function rot13(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let encoded = "";
  for (let letter of str) {
    if (alphabet.indexOf(letter) < 0) {
      encoded += letter;
    } else if (alphabet.indexOf(letter) >= 13) {
      encoded += alphabet[alphabet.indexOf(letter) - 13];
    } else if (alphabet.indexOf(letter) <= 12) {
      encoded += alphabet[alphabet.indexOf(letter) + 13];
    }
  }
  return encoded;
}

rot13("SERR PBQR PNZC");
