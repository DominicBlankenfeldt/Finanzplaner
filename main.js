
// // Den Beispielplan Kopieren

// document.getElementById('planErstellenButton').onclick = duplicate;


// var i = 0;
// var original = document.getElementById('Beispielplan');

// function duplicate() {
//     var clone = original.cloneNode(true); // "deep" clone
//     clone.id = "SparplanNeu" + ++i; // neuer clone erhalt immer ein i zusätzlich dran
//     var test = [...clone.getElementsByTagName('input')];  // <input type="text" placeholder="Name deines Sparplan´s"> </h5><p class="card-text"> <input class="col-10" type="text"placeholder="Gib deinem Plan eine kurze Beschreibung">
//     for (let i = 0; i < test.length; i++) {
//         console.log(test[i]);
//         console.log(test);
//         test[i].replaceWith(document.createElement("div"))
//     }

//     original.parentNode.appendChild(clone);
// }



// //     hat der schlauberger mir gesagt ist das gleiche

// function modalText(id) {
//     console.log(id);
//     if (id === "einnahmenButton") {
//         document.getElementById("geldHinzufügen").innerHTML = 'Einnahmen hinzufügen'
//         document.getElementById("geldFür").innerHTML = 'Einnahmen aus:'
//         document.getElementById("exampleModalLabel").innerHTML = 'Einnahmen'
//         document.getElementById("geldVerkehrWann").innerHTML = 'Geldeinnahmen am:'
//         document.getElementById("geldAngabe").innerHTML = 'Höhe der Einahmen:'
//         return;
//     }
//     document.getElementById("geldHinzufügen").innerHTML = 'Ausgaben hinzufügen'
//     document.getElementById("geldFür").innerHTML = 'Ausgaben für:'
//     document.getElementById("exampleModalLabel").innerHTML = 'Ausgaben'
//     document.getElementById("geldVerkehrWann").innerHTML = 'Geldausgaben am:'
//     document.getElementById("geldAngabe").innerHTML = 'Höhe der Ausgaben:'
// }


// // neuen Eintrag auf buttonpress


// function newRow(btn) {
//     let newRowElement = document.createElement("div");

//     newRowElement.classList.add("col-6")
//     newRowElement.classList.add("row")
//     newRowElement.innerHTML = 'test'
//     document.getElementById("linksFinanzBody").appendChild(newRowElement);
//     let testInhalt = document.createTextNode("test");
//     console.log(alg);

//     if (btn.innerText === "Einnahmen hinzufügen") {

//         newRowElement.classList.add("col-6")
//         newRowElement.classList.add("row")
//         newRowElement.innerHTML = 'test'
//         document.getElementById("linksFinanzBody").appendChild(newRowElement);
//     }

// }


// ab hier alles main davor war alles main1 <---------------------------------------------------------------------------------


// funktion zum eintragen in die Tabelle(Monat)

function newRowPlus() {
    let newRowElement = document.createElement("div");

    newRowElement.classList.add("col-6")
    newRowElement.innerHTML = "test"
    document.getElementById("income").appendChild(newRowElement);
    console.log('test');

}


function newRowMinus() {
    let newRowElement = document.createElement("div");

    newRowElement.classList.add("col-6")
    newRowElement.innerHTML = "test"
    document.getElementById("outcome").appendChild(newRowElement);
    console.log('test');

}

// funktion um neuen plan zu erstellen

function newPlan() {
    let newPlanElement = document.createElement("div");
    let newImgForChild = document.createElement("img");
    let newPlanElementName = document.createElement("div");
    let newPlanName = document.getElementById("textName").value

    newPlanElement.classList.add("carousel-item")
    newPlanElement.appendChild(newImgForChild)
    newImgForChild.src = "https://accentsconagua.com/img/images/how-to-build-a-full-screen-responsive-carousel-slider-with-owljs_4.png"
    newImgForChild.classList.add("m-auto")
    newImgForChild.classList.add("d-block")
    newPlanElementName.innerHTML = newPlanName
    newPlanElementName.classList.add("m-auto")
    newPlanElementName.classList.add("d-block")
    newPlanElement.appendChild(newPlanElementName)
    document.getElementById("carousel-inner").appendChild(newPlanElement)

    console.log("neuer Plan erfolgreich erstellt")
}

