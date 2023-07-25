export default function convertToRoman(num) {
  let roman = "";
  while (num > 0) {
    if (num >= 1000) getRoman("M", 1000);
    else if (num >= 900) getRoman("CM", 900);
    else if (num >= 500) getRoman("D", 500);
    else if (num >= 400) getRoman("CD", 400);
    else if (num >= 100) getRoman("C", 100);
    else if (num >= 90) getRoman("XC", 90);
    else if (num >= 50) getRoman("L", 50);
    else if (num >= 40) getRoman("XL", 40);
    else if (num >= 10) getRoman("X", 10);
    else if (num >= 9) getRoman("IX", 9);
    else if (num >= 5) getRoman("V", 5);
    else if (num >= 4) getRoman("IV", 4);
    else getRoman("I", 1);
  }

  function getRoman(string, integer) {
    roman += string;
    num -= integer;
  }

  return roman;
}
