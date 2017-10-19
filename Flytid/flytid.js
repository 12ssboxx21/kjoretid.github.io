// @flow
function setup() {

    let fra = document.getElementById("fra");
    let til = document.getElementById("til");
    let divSvar = document.getElementById("svar");
    let plasser = document.getElementById("plasser");
    let pris = [
        [0, 1887, 10851],
        [1887, 0, 10085],
        [10851, 10085, 0]
    ];
    //let leiebil = document.getElementById("leiebil");



    let btnLagre = document.getElementById("cash");
    btnLagre.addEventListener("click", testAvstand);

    function testAvstand(event) {
        let value1 = 0;
        let value2 = 0;
        let tid = 0;
        let Passasjerer = plasser.valueAsNumber;

        if (fra.value === "Oslo") {
            value1 = 0;
        }
        if (fra.value === "Hamburg") {
            value1 = 1;
        }
        if (fra.value === "Florida") {
            value1 = 2;
        }

        if (til.value === "Oslo") {
            value2 = 0;
        }
        if (til.value === "Hamburg") {
            value2 = 1;
        }
        if (til.value === "Florida") {
            value2 = 2;
        }

        let cost = ((pris[value1][value2]) * Passasjerer);

       


        if (document.getElementById("leiebil").checked || document.getElementById("leiebil").checked) {
            let checker = document.getElementsByName("leiebil");
            for (let i = 0; i < checker.length; i++) {
                if (checker[i].checked) {
                    cost += 2433.89;
                    melding = "Denne turen koster " + cost.toFixed(2) + " kr";
                    divSvar.innerHTML = melding;
                }
            };

        }
        else {

            melding = "Denne turen koster " + cost.toFixed(2) + " kr";
            divSvar.innerHTML = melding;
        }

        /* if (document.getElementById("leiebil").checked || document.getElementById("leiebil").checked) {
            cost += 2433.89;
            melding = "Denne turen koster " + cost.toFixed(2) + " kr";
            divSvar.innerHTML = melding;
        }

        if (leiebil = false) {
            melding = "Denne turen koster " + cost.toFixed(2) + " kr";
            divSvar.innerHTML = melding;
        }
        */
    }

}
