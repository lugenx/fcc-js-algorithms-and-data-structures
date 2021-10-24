function telephoneCheck(str) {
  let regex =
    /^[1]?[-\s\.]?([(][0-9]{3}[)]|[0-9]{3})[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
