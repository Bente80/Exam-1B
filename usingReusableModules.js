/**Created by Bente on 15-02-2016.*/

var counter = require('./reusableModules.js');

var counter1 = counter();           // Opretter to objekter ud fra modulet.
var counter2 = counter();

counter1.increment();               // Bruger increment metoden
counter1.increment();
counter2.increment();

console.log(counter1.value());      // Udskriver resultatet 2, fordi den er incrementet 2 gange
console.log(counter2.value());      // Udskriver resultere 1, fordi den er incrementet 1 gang