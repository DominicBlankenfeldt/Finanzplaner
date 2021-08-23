
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
    console.log('einnahme hinzugefügt');

}


function newRowMinus() {
    let newRowElement = document.createElement("div");

    newRowElement.classList.add("col-6")
    newRowElement.innerHTML = "test"
    document.getElementById("outcome").appendChild(newRowElement);
    console.log('ausgabe hinzugefügt');

}

// funktion um neuen plan zu erstellen

function newPlan() {

    let newPlanElement = document.createElement("div");
    let newImgForChild = document.createElement("svg");
    let newPlanElementName = document.createElement("div");
    let newPlanName = document.getElementById("textName").value
    let newPlanNameBig = document.createElement("h5")
    let newPlanPath1 = document.createElement("path")
    let newPlanPath2 = document.createElement("path")
    let newPlanPath3 = document.createElement("path")
    let newPlanPath4 = document.createElement("path")

    newPlanElement.classList.add("carousel-item")
    newPlanElement.appendChild(newImgForChild)

    newImgForChild.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    newImgForChild.setAttribute("width", "275")
    newImgForChild.setAttribute("height", "275")
    newImgForChild.setAttribute("fill", "currentColor")
    newImgForChild.classList.add("bi", "bi-cash-coin")
    newImgForChild.setAttribute("viewBox", "0 0 16 16")
    // newImgForChild.src = "https://accentsconagua.com/img/images/how-to-build-a-full-screen-responsive-carousel-slider-with-owljs_4.png"
    // newImgForChild.classList.add("m-auto")
    // newImgForChild.classList.add("d-block")
    newImgForChild.appendChild(newPlanPath1)
    newPlanPath1.setAttribute("fill-rule", "evenodd")
    newPlanPath1.setAttribute("d", "M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z")
    newImgForChild.appendChild(newPlanPath2)
    newPlanPath2.setAttribute("d", "M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z")
    newImgForChild.appendChild(newPlanPath3)
    newPlanPath3.setAttribute("d", "M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z")
    newImgForChild.appendChild(newPlanPath4)
    newPlanPath4.setAttribute("d", "M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z")

    newPlanNameBig.innerHTML = newPlanName
    newPlanElementName.appendChild(newPlanNameBig)
    newPlanElementName.classList.add("m-auto")
    newPlanElementName.classList.add("d-block")
    newPlanElementName.setAttribute("id", newPlanName)
    newPlanElement.appendChild(newPlanElementName)
    document.getElementById("carousel-inner").appendChild(newPlanElement)
    newPlanElement.setAttribute("data-toggle", "modal")
    newPlanElement.setAttribute("data-target", "#modalPlanSettings")

    console.log("neuer Plan erfolgreich erstellt")
}

