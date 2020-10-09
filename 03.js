/*

Gör en funktion som tar emot en fras som parameter och returnerar true (boolskt, inte sträng eller annat) om strängen är ett palindrom eller false om den inte är det.

https://sv.wikipedia.org/wiki/Palindrom

https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827

Lägg märke till att ni måste hantera mellanslag. "Ni talar bra latin" är t ex ett palindrom. Ni behöver bara hantera små bokstäver.

*/

function is_palindrome(parameter) {
  let array1 = [];
  let array2 = [];
  let boolean = false;
  let checksum = 0;
  for (let i = 0; i < parameter.length; i++) {
    array1[i] = parameter.charAt(i);
  }
  array2 = [...array1];
  array1.reverse();
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] == array2[index]) {
      checksum++;
    }
  }
  if (checksum == array1.length) {
    boolean = true;
  }
  return boolean;
}

let test_string = "sirap i paris";
if (is_palindrome(test_string)) {
  console.log(test_string + " is a palindrome");
} else {
  console.log(test_string + " is NOT a palindrome");
}
