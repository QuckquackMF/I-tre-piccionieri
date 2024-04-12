//#region variabili/costanti iniziali e JSON

let json = {
    "videogiochi": [
        {"Name":"Gran Turismo 7", "InStock":"30", "Compatibility":["Playstation 4", "Playstation 5"], "Pegi":"3", "Price":"79.99"},
        {"Name":"Uncharted: The Nathan Drake Collection", "InStock":"27", "Compatibility":["Playstation 4"], "Pegi":"16", "Price":"19.99"},
        {"Name":"Uncharted: Legacy of Thieves Collection", "InStock":"30", "Compatibility":["Playstation 5", "Windows"], "Pegi":"16", "Price":"49.99"},
        {"Name":"Grand Theft Auto 5", "InStock":"56", "Compatibility":["Playstation 3", "Playstation 4", "Playstation 5", "Xbox 360", "Xbox One", "Xbox Series X/S", "Windows"], "Pegi":"18", "Price":"25"},
        {"Name":"Hearts of Iron 4", "InStock":"45", "Compatibility":["Linux", "Windows", "MacOS"], "Pegi":"7", "Price":"7.99"},
        {"Name":"God of War", "InStock":"10", "Compatibility":["Playstation 4", "Windows"], "Pegi":"18", "Price":"20"},
        {"Name":"Minecraft", "InStock":"15", "Compatibility":["Playstation 3", "Playstation 4", "Playstation 5", "Xbox 360", "Xbox One", "Xbox Series X/S", "Windows", "Linux", "IOS", "Android", "Nintendo Switch", "Nintendo 3DS", "MacOS"], "Pegi":"7", "Price":"18.99"},
        {"Name":"Forza Horizon 7", "InStock":"30", "Compatibility":["Xbox One", "Windows"], "Pegi":"3", "Price":"49.99"},
        {"Name":"Call of Duty: Modern Warfare 3", "InStock":"80", "Compatibility":["Playstation 5", "Playstation 4", "Xbox One", "Xbox Series X/S", "Windows"], "Pegi":"18", "Price":"57.99"},
        {"Name":"FC 24", "InStock":"60", "Compatibility":["Playstation 5", "Playstation 4", "Xbox One", "Xbox Series X/S", "Windows", "Android", "Nintendo Switch"], "Pegi":"3", "Price":"79.99"},
        {"Name":"F1 23", "InStock":"39", "Compatibility":["Playstation 5", "Playstation 4", "Xbox One", "Xbox Series X/S", "Windows"], "Pegi":"3", "Price":"79.99"},
        {"Name":"Helldivers II", "InStock":"0", "Compatibility":["Playstation 5", "Windows"], "Pegi":"18", "Price":"39.99"},
        {"Name":"Baldur's Gate 3", "InStock":"110", "Compatibility":["Playstation 5", "Xbox Series X/S", "Windows", "MacOS"], "Pegi":"18", "Price":"69.99"}
    ]
};

//costanti contenenti elementi HTML
const note = document.getElementById("p_Note");
const S_videogame = document.getElementById("Select_Videogame");
const S_platform = document.getElementById("Select_PlatForm");
const options = document.getElementsByTagName('option');
const inputNumber = document.getElementById("Input_Quanti");
const copieRimaste = document.getElementById("copies");
const buy = document.getElementById("buyBtn");
const price = document.getElementById("totPrice");

let isAdult;

//variabili che contengono gli oggetti
let granTurismo7; 
let unchartedTNDC;
let unchartedLOTC;
let grandTheftAuto5;
let heartsOfIron4;
let godOfWar;
let minecraft;
let forzaHorizon7;
let callOfDutyMW3;
let fc24;
let f123;
let helldiversII;
let baldursGate3;

//#endregion

class Videogame{
    constructor(name, inStock, compatibility, pegi, price){
        this.name = name;
        this.inStock = inStock;
        this.compatibility = compatibility;
        this.pegi = pegi;
        this.price = price;
    }

    removeCopies(number){
        this.inStock -= number;
    }

    /*quando il metodo checkCompatibility viene chiamato
    controlla le piattaforme disponibili per il
    videogioco e quindi disabilita le opzioni che 
    non servono*/
    checkCompatibility(options){
        for(let i = 0; i < this.compatibility.length; i++){
            switch(this.compatibility[i]){
                case "Playstation 4":
                    options[15].disabled = false;
                    break;
                case "Playstation 5":
                    options[16].disabled = false;
                    break;
                case "Xbox 360":
                    options[17].disabled = false;
                    break;
                case "Xbox One":
                    options[18].disabled = false;
                    break;
                case "Xbox Series X/S":
                    options[19].disabled = false;
                    break;
                case "Nintendo Switch":
                    options[20].disabled = false;
                    break;
                case "Windows":
                    options[21].disabled = false;
                    break;
                case "Linux":
                    options[22].disabled = false;
                    break;
                case "IOS":
                    options[23].disabled = false;
                    break;
                case "Android":
                    options[24].disabled = false;
                    break;
                case "Nintendo 3DS":
                    options[25].disabled = false;
                    break;
                case "MacOS":
                    options[26].disabled = false;
                    break;
            }
        }
    }
}

function setAge(isAdultValue) {
    isAdult = isAdultValue;
    document.getElementById("agePopup").remove();
    document.body.classList.remove("agePopupOpen");
    note.textContent = isAdult;
    S_videogame.disabled = false;

    if(!isAdult){
        options[1].disabled = true;
        options[2].disabled = true;
        options[6].disabled = true;
        options[8].disabled = true;
        options[10].disabled = true;

        note.textContent = "Fascia d'età: Minorenne"
    }else{
        note.textContent = "Fascia d'età: Maggiorenne"
    }
}

function resetOptions(){
    options[14].selected = true;
    for(let i = 15; i < options.length; i++){
        options[i].disabled = true;
    }
}

/*ogni volta che il videogioco viene
cambiato si ricontrolla la compatibilità
e si cambia il numero di copie disponibili*/ 
S_videogame.addEventListener('change', function(){
    S_platform.disabled = false;
    //prima di ricontrollare la compatibilità le opzioni per la piattaforma si resettano
    resetOptions();
    getObject().checkCompatibility(options);
    copieRimaste.textContent = "Copie rimaste: " + getObject().inStock;
    inputNumber.value = "";
    inputNumber.disabled = true;
    buy.disabled = true;
})

S_platform.addEventListener('change', function(){
    inputNumber.disabled = false;
})

inputNumber.addEventListener('input', function(){
    if(!(parseInt(getObject().inStock) >= parseInt(this.value))){
        alert("Le copie selezionate sono troppe");
        this.value -= 1;
    }else if(parseInt(this.value) < 0){
        this.value = 0;
    }else{
        buy.disabled = false;
    }

    //il prezzo totale viene ricalcolato ogni volta che l'input cambia
    price.textContent = "Total price: " + (parseFloat(getObject().price) * parseFloat(this.value)).toFixed(2);
})

//l'evento click del bottone viene gestito con una promise
buy.addEventListener('click', function(){
    let buyGame = new Promise(function(resolve, reject){
        if(parseInt(inputNumber.value) != 0){
            resolve("Copie acquistate");
        }else{
            reject("Copie esaurite");
        }
    })

    buyGame.then(
        function(value){
            getObject().inStock -= parseInt(inputNumber.value);
            copieRimaste.textContent = "Copie rimaste: " + getObject().inStock;
            inputNumber.value = 0;

            console.log("Acquisto riuscito! " + value);
        },

        function(error){
            console.log("Aquisto fallito! " + error);
        }
    )
})

/*la funzione getObject viene chiamata quando serve 
prendere l'oggetto corrispondente al videogioco 
selezionato per poterne accedere gli attributi*/ 
function getObject(){
    switch(S_videogame.options[S_videogame.selectedIndex].text){
        case "Gran Turismo 7":
            return granTurismo7;
        case "Uncharted: The Nathan Drake Collection":
            return unchartedTNDC;
        case "Uncharted: Legacy of Thieves Collection":
            return unchartedLOTC;
        case "Grand Theft Auto 5":
            return grandTheftAuto5;
        case "Hearts of Iron 4":
            return heartsOfIron4;
        case "God of War":
            return godOfWar;
        case "Minecraft":
            return minecraft;
        case "Forza Horizon 7":
            return forzaHorizon7;
        case "Call of Duty: Modern Warfare 3":
            return callOfDutyMW3;
        case "FC 24":
            return fc24;
        case "F1 23":
            return f123;
        case "Helldivers II":
            return helldiversII;
        case "Baldur's Gate 3":
            return baldursGate3;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".game-images img");
    const indicators = document.querySelectorAll('.image-indicators .indicator');
    let currentIndex = 0;
    let rotationInterval;

    function showNextImage() {
        // Rimuovi la classe attiva da tutte le immagini
        images.forEach(image => image.classList.remove('active'));

        // Aggiungi la classe attiva all'immagine successiva
        images[currentIndex].classList.add('active');

        // Disattiva tutti gli indicatori e rimuovi il colore rosso
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Attiva l'indicatore corrispondente e impostalo su rosso
        indicators[currentIndex].classList.add('active');

        // Aggiorna l'immagine di sfondo
        const backgroundImage = document.querySelector('.background-image');
        backgroundImage.style.backgroundImage = `url(${images[currentIndex].src})`;

        // Passa all'indice dell'immagine successiva
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Inizialmente mostra la prima immagine
    showNextImage();

    // Imposta l'intervallo per mostrare l'immagine successiva ogni 5 secondi
    rotationInterval = setInterval(showNextImage, 5000);

    // Metti in pausa la rotazione automatica quando si clicca su un cerchio
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            clearInterval(rotationInterval); // Metti in pausa la rotazione automatica
            currentIndex = index; // Aggiorna l'indice corrente al cerchio cliccato
            showNextImage(); // Mostra l'immagine corrispondente
        });
    });
});