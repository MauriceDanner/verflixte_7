
let ergebnis_wuerfel = 0                                                                                                //Definition der Variablen
let anzahl_wuerfe = 0
let anzahl_wuerfe_2 = 0
let spieler_an_der_reihe = 1
let punkte = 0
let punkte_2 = 0

function wuerfeln() {                                                                                                   //Eröffnung Funktion würfeln
    let wuerfel_1 = Math.round(Math.random() * 5 + 1)                                                                //Erstellung Zufallszahl zwischen 1 und 6
    let wuerfel_2 = Math.round(Math.random() * 5 + 1)
    document.getElementById("wuerfel_1").innerHTML="Würfel 1: "+ wuerfel_1                                     //Ausgabe der gewürfelten Augenzahl
    document.getElementById("wuerfel_2").innerHTML="Würfel 2: "+ wuerfel_2

    if(wuerfel_1|| wuerfel_2===1) {
        document.getElementById("1").innerHTML.src="Bilder Visualisierung/wuerfelaugen-1.png"
    }
    ergebnis_wuerfel = wuerfel_1 + wuerfel_2                                                                            //Addition der Augenzahlen
    if (spieler_an_der_reihe === 1)                                                                                     //Fallunterscheidung Spieler 1
    {
    anzahl_wuerfe++                                                                                                     //Anzahl der Würfe um 1 erhöhen
        document.getElementById("wuerfe_1").innerHTML= "Anzahl Würfe Spieler 1: "+ anzahl_wuerfe
    if (ergebnis_wuerfel === 7) {                                                                                       //Unterscheidung Augenzahl der Summe ist 7
        punkte = punkte - ergebnis_wuerfel                                                                              //Abzug der 7 Punkte von der Punktzahl
        document.getElementById("punkte_1").innerHTML= "Punkte Spieler 1: "+ punkte
        spieler_an_der_reihe = 2                                                                                        //Wechsel des Spielers
        alert("Spieler 2 ist an der Reihe!")                                                                            //Hinweis zum Wechsel des Spielers
    } else {
        punkte = punkte + ergebnis_wuerfel                                                                              //Addition der Augenzahl zum Punktwert
        document.getElementById("punkte_1").innerHTML= "Punkte Spieler 1: "+ punkte
    }
}else                                                                                                                   //Fallunterscheidung Spieler 2
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
            punkte_vergleichen()                                                                                        //Beenden des Spiels, Weiterführung in der Funktion punkte_vergleichen
                document.getElementById("wuerfeln").disabled=true
                document.getElementById("runde_beenden").disabled=true
            }
        }
    }
}

function runde_beenden() {                                                                                              //Eröffnung Funktion, die Runde beendet
    if(spieler_an_der_reihe ===1){                                                                                      //Fallunterscheidung Spieler 1
        spieler_an_der_reihe = 2
        alert("Spieler 2 ist an der Reihe!")
    }else if(spieler_an_der_reihe===2){                                                                                 //Fallunterscheidung Spieler 2
        punkte_vergleichen()
        document.getElementById("wuerfeln").disabled=true
        document.getElementById("runde_beenden").disabled=true
    }
}

function punkte_vergleichen() {                                                                                         //Eröffnung Funktion der Auswertung
    if (punkte < punkte_2)                                                                                              //Fallunterscheidung nach Punkten
    {document.getElementById("auswertung_winner").innerHTML= "Spieler 2 hat mit "+ punkte_2 + " zu " +punkte + " gewonnen!"
    }else if(punkte > punkte_2)
    {document.getElementById("auswertung_winner").innerHTML= "Spieler 1 hat mit "+ punkte + " zu " +punkte_2 + " gewonnen!"
    }

}

