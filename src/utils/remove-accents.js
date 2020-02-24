export function removeAccents(newString) {
  let string = newString;
  let accentsMap = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
    n: /\xF1/g
  };

  for (let letter in accentsMap) {
    let regex = accentsMap[letter];
    string = string.replace(regex, letter);
  }

  return string;
}
