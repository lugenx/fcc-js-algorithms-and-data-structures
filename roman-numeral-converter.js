function convertToRoman(num, result = "") {
  switch (true) {
    case num >= 1000:
      return convertToRoman(num - 1000, (result += "M"));

    case num < 1000 && num >= 900:
      return convertToRoman(num - 900, (result += "CM"));

    case num < 900 && num >= 500:
      return convertToRoman(num - 500, (result += "D"));

    case num < 500 && num >= 400:
      return convertToRoman(num - 400, (result += "CD"));

    case num < 400 && num >= 100:
      return convertToRoman(num - 100, (result += "C"));

    case num < 100 && num >= 90:
      return convertToRoman(num - 90, (result += "XC"));

    case num < 90 && num >= 50:
      return convertToRoman(num - 50, (result += "L"));

    case num < 50 && num >= 40:
      return convertToRoman(num - 40, (result += "XL"));

    case num < 40 && num >= 10:
      return convertToRoman(num - 10, (result += "X"));

    case num < 10 && num >= 9:
      return convertToRoman(num - 9, (result += "IX"));

    case num < 9 && num >= 5:
      return convertToRoman(num - 5, (result += "V"));

    case num === 4:
      return (result += "IV");

    case num < 4 && num > 0:
      return convertToRoman(num - 1, (result += "I"));
  }
  return result;
}

convertToRoman(36);
