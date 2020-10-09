/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små)
 till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/
let stringToBeSafe = "<h1>Sjörövare, O'hoj</h1>";
// let checkArray = [];

for (let i = 0; i < stringToBeSafe.length; i++) {
  if (stringToBeSafe.charAt(i) == ("ö" || "<")) {
    console.log("det kom ett ö!");
  }
  console.log(stringToBeSafe.charAt(i));
}
// array.forEach(element => {

// });

// checkArray.forEach((char) => {
//   if (condition) {
//   }
// });
// console.log(checkArray);
//   if (stringToBeSafe[i] == ("ö" || ",")) {
//     console.log(stringToBeSafe[i]);
//  }
//}

// console.log(encodeURIComponent("<h1>Sjörövare, O'hoj</h1>"));
// function safe_string(stringToBeSafe) {
//   let stringContainer = []:
//     for (let i = 0; i < stringToBeSafe.length; i++) {
//         if (!stringToBeSafe[i] == a||b||c||d||e||f||g||h||i||j||k||l||m||n||o||p||q||r||s||u||v||w||x||y||z){
//             console.log(i);
//         }
//   }

//     console.log(encodeURIComponent(stringToBeSafe));
//   return stringToBeSafe;
// }

// console.log(safe_string("<h1>Sjörövare, O'hoj</h1>")); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;
