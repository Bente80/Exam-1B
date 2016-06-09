/** Created by Bente on 15-02-2016
 Når man eksportere kan man bruge samme moduler igen og igen.
 Det er godt at dele sin kode op i moduler p.g.a.
    *overskuelighedens skyld ligesom klasser i java og kapitler i en bog.
    *vedligeholdelse - Opdatering af et enkelt modul er meget lettere, når modulet er afkoblet fra andre stykker kode
    *genbrug- hvis man har brug for den samme kode flere steder i programmet. */

module.exports = function (){                      // Modulet exporterer en funktion:
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







// Links:   https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.ry3ytp37v