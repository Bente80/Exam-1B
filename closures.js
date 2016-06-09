/** Created by Bente on 25-05-2016.

Closures gør det muligt at lave lokale metoder og variabler i JavaScript.
Closures er en funktion , der har adgang til forælder omfang(scope), selv efter forælder funktionen er afsluttet.
closures tilbyder/består af 2 ting:   en funktion &
                                      de lokale variabler der var i scopet da det blev oprettet*/

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() { return privateCounter;}
    }
};

// vi bliver nød til at kalde funktionen for at lave et objekt og tilgå de indre funktioner - modsat IIEF (1A)
var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.value());      // Resultere i 2, fordi den er incrementet 2 gange
console.log(counter2.value());      // Resultere i 1, fordi den er incrementet 1 gang