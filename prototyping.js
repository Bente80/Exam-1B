/**Created by Bente on 25-05-2016.

Alle JavaScript objekter har en prototype. Prototypen er også et objekt.
Alle JavaScript objekter arver egenskaberne og metoder fra deres prototype .
Objekter skabt ved hjælp af et objekt bogstavelig, eller med nye Object( ), arve fra en prototype kaldet Object.prototype.
Objekter , der er oprettet med ny Dato ( ) arve fra Date.prototype.
Object.prototype er øverst på ​​prototypen kæden.
Alle JavaScript objekter (Dato, Array , RegExp , functions, ....) arver fra Object.prototype .*/

// Konstruktør funktion til at oprette et objekt
function CreateNewPersonObject(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
}

// Her tilføjer jeg en ny metode til CreateNewPerson prototypen:
CreateNewPersonObject.prototype.halloMetode = function() {
    console.log("Hello from: "+ this.firstName+", "+ this.lastName);
}

//Ny prototype til et enkelt objekt
var newPerson = new CreateNewPersonObject("Buller", "Fnis", "11");
var newPerson2 = new CreateNewPersonObject("Peter", "Madsen", "77");

// Her tilføjer vi en property til et objekt:
newPerson.town = "Vinterby Øster";
console.log("Her bliver: "+newPerson.town+" tilføjet til: "+newPerson.firstName);

// Brug af ny metode
newPerson.halloMetode();
newPerson2.halloMetode();

