function palindrome(str) {
  let forward = str
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("");
  let backward = [];
  let trueOrFalse = [];
  for (let i = forward.length - 1; i >= 0; i--) {
    backward.push(forward[i]);
  }
  for (let i = 0; i < backward.length; i++) {
    trueOrFalse.push(backward[i] === forward[i]);
  }
  return trueOrFalse.every((elem) => elem === true);
}

palindrome("eye");
