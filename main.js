let wuerfel_1 = 0
let wuerfel_2 = 0
let ergebnis_wuerfel = 0
let punkte_vorher = 0
let punkte_vorher_2 = 0
let anzahl_wuerfe = 0
let anzahl_wuerfe_2 = 0
let spieler_an_der_reihe = 1
let punkte_neu = 0
let punkte_neu_2 = 0

function wuerfeln() {
    let wuerfel_1 = Math.round(Math.random() * 5 + 1)
    let wuerfel_2 = Math.round(Math.random() * 5 + 1)
    document.getElementById("wuerfel_1").innerHTML="Würfel 1: "+ wuerfeln_1
    document.getElementById("wuerfel_2").innerHTML="Würfel 2: "+ wuerfel_2
    ergebnis_wuerfel = wuerfel_1 + wuerfel_2
    if (spieler_an_der_reihe === 1)
    {
    anzahl_wuerfe++
    document.getElementById("wuerfe_1").innerHTML= "Anzahl Würfe Spieler 1: "+ anzahl_wuerfe
    if (ergebnis_wuerfel === 7) {
        punkte_neu = punkte_vorher - ergebnis_wuerfel
    } else {
        punkte_neu = punkte_vorher + ergebnis_wuerfel
    }
}else(spieler_an_der_reihe === 2)
    {
        anzahl_wuerfe_2++
        document.getElementById("wuerfe_2").innerHTML= "Anzahl Würfe Spieler 2: "+ anzahl_wuerfe_2
        if (ergebnis_wuerfel === 7) {
            punkte_neu_2 = punkte_vorher_2 - ergebnis_wuerfel
        } else {
            punkte_neu_2 = punkte_vorher_2 + ergebnis_wuerfel
        }
    }
}

function punkte_vergleichen() {
    if (punkte_neu < punkte_neu_2)
    {document.getElementById("auswertung_winner").innerHTML= "Spieler 2 hat mit"+ punkte_neu_2 + "zu" +punkte_neu + "gewonnen!"
    }else if(punkte_neu > punkte_neu_2)
    {document.getElementById("auswertung_winner").innerHTML= "Spieler 1 hat mit"+ punkte_neu + "zu" +punkte_neu_2 + "gewonnen!"
    }else (punkte_neu === punkte_neu_2)
    {document.getElementById("auswertung_winner").innerHTML= "Das Spiel endet im Unentschieden mit"+ punkte_neu + "zu" +punkte_neu_2 + "!"
    }
}

