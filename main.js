
let ergebnis_wuerfel = 0
let anzahl_wuerfe = 0
let anzahl_wuerfe_2 = 0
let spieler_an_der_reihe = 1
let punkte = 0
let punkte_2 = 0

function wuerfeln() {
    let wuerfel_1 = Math.round(Math.random() * 5 + 1)
    let wuerfel_2 = Math.round(Math.random() * 5 + 1)
    document.getElementById("wuerfel_1").innerHTML="Würfel 1: "+ wuerfel_1
    document.getElementById("wuerfel_2").innerHTML="Würfel 2: "+ wuerfel_2
    ergebnis_wuerfel = wuerfel_1 + wuerfel_2
    if (spieler_an_der_reihe === 1)
    {
    anzahl_wuerfe++
        document.getElementById("wuerfe_1").innerHTML= "Anzahl Würfe Spieler 1: "+ anzahl_wuerfe
    if (ergebnis_wuerfel === 7) {
        punkte = punkte - ergebnis_wuerfel
        document.getElementById("punkte_1").innerHTML= "Punkte Spieler 1: "+ punkte
        spieler_an_der_reihe = 2
        alert("Spieler 2 ist an der Reihe!")
    } else {
        punkte = punkte + ergebnis_wuerfel
        document.getElementById("punkte_1").innerHTML= "Punkte Spieler 1: "+ punkte
    }
}else
    {
        anzahl_wuerfe_2++
        document.getElementById("wuerfe_2").innerHTML= "Anzahl Würfe Spieler 2: "+ anzahl_wuerfe_2
        if (ergebnis_wuerfel === 7) {
            punkte_2 = punkte_2 - ergebnis_wuerfel
            document.getElementById("punkte_2").innerHTML= "Punkte Spieler 2: "+ punkte_2
            punkte_vergleichen()
        } else {
            punkte_2 = punkte_2 + ergebnis_wuerfel
            document.getElementById("punkte_2").innerHTML= "Punkte Spieler 2: "+ punkte_2
            if (anzahl_wuerfe===anzahl_wuerfe_2){
            punkte_vergleichen()
            }
        }
    }
}

function runde_beenden() {
    if(spieler_an_der_reihe ===1){
        spieler_an_der_reihe = 2
        alert("Spieler 2 ist an der Reihe!")
    }else if(spieler_an_der_reihe===2){
        punkte_vergleichen()
    }
}

function punkte_vergleichen() {
    if (punkte < punkte_2)
    {document.getElementById("auswertung_winner").innerHTML= "Spieler 2 hat mit "+ punkte_2 + " zu " +punkte + " gewonnen!"
    }else if(punkte > punkte_2)
    {document.getElementById("auswertung_winner").innerHTML= "Spieler 1 hat mit "+ punkte + " zu " +punkte_2 + " gewonnen!"
    }

}


