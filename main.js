
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
    let newPlanGeldGespart = "0 €"

    let newPlanDivDate = document.createElement("div")
    let newPlanDivGeld = document.createElement("div")
    let newPlanDivNotiz = document.createElement("div")
    let newPlanDivName = document.createElement("div")
    let newPlanDivGeldGespart = document.createElement("div")

    let newPlanNameBig0 = document.createElement("h5")
    let newPlanNameBig1 = document.createElement("h5")
    let newPlanNameBig2 = document.createElement("h5")
    let newPlanNameBig3 = document.createElement("h5")
    let newPlanNameBig4 = document.createElement("h5")

    let newProgressBar = document.createElement("div")
    let newProgressBarDivClasses = document.createElement("div")

    let sparplanAuswahlmöglichkeit = document.createElement("option")


    newPlanElement.classList.add("carousel-item")
    newPlanElement.appendChild(newImgForChild)
    newImgForChild.src = "cash.svg"
    newImgForChild.classList.add("m-auto")
    newImgForChild.classList.add("d-block")

    newPlanNameBig0.innerHTML = newPlanName
    newPlanNameBig0.setAttribute("id", "1a")
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
    newPlanNameBig2.setAttribute("id", "2a")
    newPlanElementName.appendChild(newPlanDivGeld)
    newPlanDivGeld.classList.add("col-4")
    newPlanDivGeld.innerHTML = "Sparziel in €:"
    newPlanDivGeld.appendChild(newPlanNameBig2)

    newPlanNameBig3.innerHTML = newPlanNotiz
    newPlanNameBig3.setAttribute("id", "3a")
    newPlanElementName.appendChild(newPlanDivNotiz)
    newPlanDivNotiz.classList.add("col-8")
    newPlanDivNotiz.innerHTML = "Notiz:"
    newPlanDivNotiz.appendChild(newPlanNameBig3)

    newPlanNameBig4.innerHTML = newPlanGeldGespart
    newPlanNameBig4.setAttribute("id", "4a")
    newPlanElementName.appendChild(newPlanDivGeldGespart)
    newPlanDivGeldGespart.classList.add("col-4")
    newPlanDivGeldGespart.innerHTML = "Aktuell gespart:"
    newPlanDivGeldGespart.appendChild(newPlanNameBig4)

    newPlanElementName.classList.add("row")

    newPlanElement.setAttribute("id", newPlanName)
    newPlanElement.appendChild(newPlanElementName)
    document.getElementById("carousel-inner").appendChild(newPlanElement)
    newPlanElement.setAttribute("data-toggle", "modal")
    newPlanElement.setAttribute("data-target", "#modalPlanSettings")

    newPlanElement.appendChild(newProgressBar)
    newProgressBar.classList.add("progress")
    newProgressBar.appendChild(newProgressBarDivClasses)
    newProgressBarDivClasses.classList.add("progress-bar")
    newProgressBarDivClasses.classList.add("bg-success")
    newProgressBarDivClasses.classList.add("progress-bar-striped")
    newProgressBarDivClasses.classList.add("progress-bar-animated")
    newProgressBarDivClasses.setAttribute("role", "progressbar")
    newProgressBarDivClasses.setAttribute("style", "width:")
    newProgressBarDivClasses.setAttribute("aria-valuenow", "")
    newProgressBarDivClasses.setAttribute("aria-valuemin", "0")
    newProgressBarDivClasses.setAttribute("aria-valuemax", "100")

    document.getElementById("sparplanAuswahl").appendChild(sparplanAuswahlmöglichkeit)
    sparplanAuswahlmöglichkeit.setAttribute("id", newPlanName + "1")
    sparplanAuswahlmöglichkeit.innerHTML = newPlanName

    newPlanElement.onclick = function () {
        findId = newPlanName;
    }

    console.log("neuer Plan erfolgreich erstellt")


}


// löschenfunktion für ausgewählten plan

let findId = null

function planDelete() {
    document.getElementById("examplePlan").classList.add("active")
    node = document.getElementById(findId)
    node.remove()
    node = document.getElementById(findId + "1")
    node.remove()
    console.log("Plan gelöscht")
}


// function für das bearbeiten von Plänen und deren enthaltenen Informationen

function planEdit() {
    let newPlanNameSettings = document.getElementById("planNameSettingsValue").value
    let newPlanSummeSettings = document.getElementById("planSummeSettingsValue").value
    let newPlanNotizSettings = document.getElementById("planKommentarSettingsValue").value

    document.getElementById("1a").innerHTML = newPlanNameSettings
    document.getElementById("2a").innerHTML = newPlanSummeSettings + "€"
    document.getElementById("3a").innerHTML = newPlanNotizSettings
}

// function zum erstellen von einnahmen

let arrayEinnahmen = []
let summeArrayEinnahmen = 0
let einnahmenGesamt = 0

function einnahmeMonatHinzufügen() {
    let infoPlanDate = document.getElementById("dateEinnahmen").value
    let infoPlanText = document.getElementById("textNameEinnahme").value
    let infoPlanSumme = document.getElementById("geldEinnahmen").value
    let infoTrIdEinnahmen = document.getElementById("textNameEinnahme").value

    let infoPlanNewRow = document.createElement("tr")
    let infoPlanNewTh = document.createElement("th")
    let infoPlanNewBtnPlus = document.createElement("button")
    let infoPlanNewBtnImg = document.createElement("img")

    let infoPlanNewDate = document.createElement("td")
    let infoPlanNewText = document.createElement("td")
    let infoPlanNewSumme = document.createElement("td")

    document.getElementById("tbodyEinnahmen").appendChild(infoPlanNewRow)
    infoPlanNewRow.setAttribute("id", infoTrIdEinnahmen)
    infoPlanNewRow.appendChild(infoPlanNewTh)
    infoPlanNewTh.classList.add("table-success")
    infoPlanNewTh.classList.add("col-3")
    infoPlanNewTh.setAttribute("scope", "row")
    infoPlanNewTh.appendChild(infoPlanNewBtnPlus)
    infoPlanNewBtnPlus.classList.add("btn")
    infoPlanNewBtnPlus.classList.add("btn-secondary")
    infoPlanNewBtnPlus.setAttribute("data-toggle", "modal")
    infoPlanNewBtnPlus.setAttribute("data-target", "#deleteRowModalPlus")
    infoPlanNewBtnPlus.appendChild(infoPlanNewBtnImg)
    infoPlanNewBtnImg.src = "trashcan.svg"
    infoPlanNewRow.appendChild(infoPlanNewDate)
    infoPlanNewDate.classList.add("table-success")
    infoPlanNewDate.classList.add("col-3")
    infoPlanNewDate.innerHTML = infoPlanDate
    infoPlanNewRow.appendChild(infoPlanNewText)
    infoPlanNewText.classList.add("table-success")
    infoPlanNewText.classList.add("col-3")
    infoPlanNewText.innerHTML = infoPlanText
    infoPlanNewRow.appendChild(infoPlanNewSumme)
    arrayEinnahmen.push(infoPlanSumme)
    infoPlanNewSumme.classList.add("bg-success")
    infoPlanNewSumme.classList.add("col-3")
    infoPlanNewSumme.innerHTML = "+" + infoPlanSumme + "€"


    console.log("eintrag einnahmen erfolgreich erstellt")

    summeArrayEinnahmen = 0
    for (let i = 0; i < arrayEinnahmen.length; i++) {
        summeArrayEinnahmen += parseInt(arrayEinnahmen[i]);
        console.log(summeArrayEinnahmen)
    }

    document.getElementById("einnahmenGesamtZeigen").innerHTML = "Gesamt:" + " " + "+" + summeArrayEinnahmen + "€"

    let summeGesamtBilanz = parseInt(summeArrayEinnahmen) - parseInt(summeArrayAusgaben)

    document.getElementById("anzeigeBilanz").innerHTML = summeGesamtBilanz + "€"


    infoPlanNewBtnPlus.onclick = function () {
        rowIdPlus = infoTrIdEinnahmen;
    }

}

// function zum erstellen von ausgaben mit Berechnung für die Bilanz

let arrayAusgaben = []
let summeArrayAusgaben = 0
let gesamtAusgaben = 0

function ausgabeMonatHinzufügen() {
    let infoPlanDate = document.getElementById("dateAusgaben").value
    let infoPlanText = document.getElementById("textNameAusgaben").value
    let infoPlanSumme = document.getElementById("geldAusgaben").value
    let infoTrIdAusgaben = document.getElementById("textNameAusgaben").value

    let infoPlanNewRow = document.createElement("tr")
    let infoPlanNewTh = document.createElement("th")
    let infoPlanNewBtnMinus = document.createElement("button")
    let infoPlanNewBtnImg = document.createElement("img")

    let infoPlanNewDate = document.createElement("td")
    let infoPlanNewText = document.createElement("td")
    let infoPlanNewSumme = document.createElement("td")

    document.getElementById("tbodyAusgaben").appendChild(infoPlanNewRow)
    infoPlanNewRow.setAttribute("id", infoTrIdAusgaben)
    infoPlanNewRow.appendChild(infoPlanNewTh)
    infoPlanNewTh.classList.add("table-danger")
    infoPlanNewTh.classList.add("col-3")
    infoPlanNewTh.setAttribute("scope", "row")
    infoPlanNewTh.appendChild(infoPlanNewBtnMinus)
    infoPlanNewBtnMinus.classList.add("btn")
    infoPlanNewBtnMinus.classList.add("btn-secondary")
    infoPlanNewBtnMinus.setAttribute("data-toggle", "modal")
    infoPlanNewBtnMinus.setAttribute("data-target", "#deleteRowModalMinus")
    infoPlanNewBtnMinus.appendChild(infoPlanNewBtnImg)
    infoPlanNewBtnImg.src = "trashcan.svg"
    infoPlanNewRow.appendChild(infoPlanNewDate)
    infoPlanNewDate.classList.add("table-danger")
    infoPlanNewDate.classList.add("col-3")
    infoPlanNewDate.innerHTML = infoPlanDate
    infoPlanNewRow.appendChild(infoPlanNewText)
    infoPlanNewText.classList.add("table-danger")
    infoPlanNewText.classList.add("col-3")
    infoPlanNewText.innerHTML = infoPlanText
    infoPlanNewRow.appendChild(infoPlanNewSumme)
    arrayAusgaben.push(infoPlanSumme)
    infoPlanNewSumme.classList.add("bg-danger")
    infoPlanNewSumme.classList.add("col-3")
    infoPlanNewSumme.innerHTML = "-" + infoPlanSumme + "€"


    console.log("eintrag ausgaben erfolgreich erstellt")

    summeArrayAusgaben = 0
    for (let i = 0; i < arrayAusgaben.length; i++) {
        summeArrayAusgaben += parseInt(arrayAusgaben[i]);
        console.log(summeArrayAusgaben)
    }
    document.getElementById("ausgabenGesamtZeigen").innerHTML = "Gesamt:" + " " + "-" + summeArrayAusgaben + "€"

    let summeGesamtBilanz = parseInt(summeArrayEinnahmen) - parseInt(summeArrayAusgaben)

    document.getElementById("anzeigeBilanz").innerHTML = summeGesamtBilanz + "€"


    infoPlanNewBtnMinus.onclick = function () {
        rowIdMinus = infoTrIdAusgaben;
    }


}


// funktion zum btn löschen in den ausgabe und einnahme tabellen

let rowIdPlus = null
let rowIdMinus = null


function deleteRowPlus() {
    node = document.getElementById(rowIdPlus)
    node.remove()
    console.log("Zeile gelöscht")
}

function deleteRowMinus() {
    node = document.getElementById(rowIdMinus)
    node.remove()
    console.log("Zeile gelöscht")
}