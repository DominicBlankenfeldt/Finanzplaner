
// Den Beispielplan Kopieren

document.getElementById('planErstellenButton').onclick = duplicate;


var i = 0;
var original = document.getElementById('Beispielplan');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "SparplanNeu" + ++i; // neuer clone erhalt immer ein i zusätzlich dran
    var test = [...clone.getElementsByTagName('input')];  // <input type="text" placeholder="Name deines Sparplan´s"> </h5><p class="card-text"> <input class="col-10" type="text"placeholder="Gib deinem Plan eine kurze Beschreibung">
    for (let i = 0; i < test.length; i++) {
        console.log(test[i]);
        console.log(test);
        test[i].replaceWith(document.createElement("div"))
    }

    original.parentNode.appendChild(clone);
}



//     hat der schlauberger mir gesagt ist das gleiche

function modalText(id) {
    console.log(id);
    if (id === "einnahmenButton") {
        document.getElementById("geldHinzufügen").innerHTML = 'Einnahmen hinzufügen'
        document.getElementById("geldFür").innerHTML = 'Einnahmen aus:'
        document.getElementById("exampleModalLabel").innerHTML = 'Einnahmen'
        document.getElementById("geldVerkehrWann").innerHTML = 'Geldeinnahmen am:'
        document.getElementById("geldAngabe").innerHTML = 'Höhe der Einahmen:'
        return;
    }
    document.getElementById("geldHinzufügen").innerHTML = 'Ausgaben hinzufügen'
    document.getElementById("geldFür").innerHTML = 'Ausgaben für:'
    document.getElementById("exampleModalLabel").innerHTML = 'Ausgaben'
    document.getElementById("geldVerkehrWann").innerHTML = 'Geldausgaben am:'
    document.getElementById("geldAngabe").innerHTML = 'Höhe der Ausgaben:'
}


// tabellen funktion rechts(ausgaben)


