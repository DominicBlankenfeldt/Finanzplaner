
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
    let newImgForChild = document.createElement("img");
    let newPlanElementName = document.createElement("div");
    let newPlanName = document.getElementById("textName").value

    let newPlanErstellenDate = document.getElementById("erstellenDate").value
    let newPlanGeld = document.getElementById("geld").value
    let newPlanNotiz = document.getElementById("notiz").value

    let newPlanDivDate = document.createElement("div")
    let newPlanDivGeld = document.createElement("div")
    let newPlanDivNotiz = document.createElement("div")
    let newPlanDivName = document.createElement("div")

    let newPlanNameBig0 = document.createElement("h5")
    let newPlanNameBig1 = document.createElement("h5")
    let newPlanNameBig2 = document.createElement("h5")
    let newPlanNameBig3 = document.createElement("h5")


    newPlanElement.classList.add("carousel-item")
    newPlanElement.appendChild(newImgForChild)
    newImgForChild.src = "cash.svg"
    newImgForChild.classList.add("m-auto")
    newImgForChild.classList.add("d-block")

    newPlanNameBig0.innerHTML = newPlanName
    newPlanElementName.appendChild(newPlanDivName)
    newPlanDivName.classList.add("col-4")
    newPlanDivName.innerHTML = "Name:"
    newPlanDivName.appendChild(newPlanNameBig0)

    newPlanNameBig1.innerHTML = newPlanErstellenDate
    newPlanElementName.appendChild(newPlanDivDate)
    newPlanDivDate.classList.add("col-4")
    newPlanDivDate.innerHTML = "Erstellt am:"
    newPlanDivDate.appendChild(newPlanNameBig1)

    newPlanNameBig2.innerHTML = newPlanGeld + "€"
    newPlanElementName.appendChild(newPlanDivGeld)
    newPlanDivGeld.classList.add("col-4")
    newPlanDivGeld.innerHTML = "Sparziel in €:"
    newPlanDivGeld.appendChild(newPlanNameBig2)

    newPlanNameBig3.innerHTML = newPlanNotiz
    newPlanElementName.appendChild(newPlanDivNotiz)
    newPlanDivNotiz.classList.add("col-12")
    newPlanDivNotiz.innerHTML = "Notiz:"
    newPlanDivNotiz.appendChild(newPlanNameBig3)

    // newPlanElementName.classList.add("m-auto")
    // newPlanElementName.classList.add("d-block")
    newPlanElementName.classList.add("row")

    newPlanElement.setAttribute("id", newPlanName)
    newPlanElement.appendChild(newPlanElementName)
    document.getElementById("carousel-inner").appendChild(newPlanElement)
    newPlanElement.setAttribute("data-toggle", "modal")
    newPlanElement.setAttribute("data-target", "#modalPlanSettings")
    newPlanElement.onclick = function () {
        findId = newPlanName;
    }

    console.log("neuer Plan erfolgreich erstellt")


}


// löschenfunktion für ausgewählten plan

let findId = null

function planDelete() {
    // document.getElementById("examplePlan").classList.add(active)
    node = document.getElementById(findId)
    node.remove()
}
