
window.onload = function() {
    fetch('magazzino.json').then(response => response.json()).then(json => {
        granTurismo7 = new Videogame(json.videogiochi[0].Name, json.videogiochi[0].InStock, json.videogiochi[0].Compatibility, json.videogiochi[0].Pegi, json.videogiochi[0].Price);
        unchartedTNDC = new Videogame(json.videogiochi[1].Name, json.videogiochi[1].InStock, json.videogiochi[1].Compatibility, json.videogiochi[1].Pegi, json.videogiochi[1].Price);
        unchartedLOTC = new Videogame(json.videogiochi[2].Name, json.videogiochi[2].InStock, json.videogiochi[2].Compatibility, json.videogiochi[2].Pegi, json.videogiochi[2].Price);
        grandTheftAuto5 = new Videogame(json.videogiochi[3].Name, json.videogiochi[3].InStock, json.videogiochi[3].Compatibility, json.videogiochi[3].Pegi, json.videogiochi[3].Price);
        heartsOfIron4 = new Videogame(json.videogiochi[4].Name, json.videogiochi[4].InStock, json.videogiochi[4].Compatibility, json.videogiochi[4].Pegi, json.videogiochi[4].Price);
        godOfWar = new Videogame(json.videogiochi[5].Name, json.videogiochi[5].InStock, json.videogiochi[5].Compatibility, json.videogiochi[5].Pegi, json.videogiochi[5].Price);
        minecraft = new Videogame(json.videogiochi[6].Name, json.videogiochi[6].InStock, json.videogiochi[6].Compatibility, json.videogiochi[6].Pegi, json.videogiochi[6].Price);
        forzaHorizon7 = new Videogame(json.videogiochi[7].Name, json.videogiochi[7].InStock, json.videogiochi[7].Compatibility, json.videogiochi[7].Pegi, json.videogiochi[7].Price);
        callOfDutyMW3 = new Videogame(json.videogiochi[8].Name, json.videogiochi[8].InStock, json.videogiochi[8].Compatibility, json.videogiochi[8].Pegi, json.videogiochi[8].Price);
        fc24 = new Videogame(json.videogiochi[9].Name, json.videogiochi[9].InStock, json.videogiochi[9].Compatibility, json.videogiochi[9].Pegi, json.videogiochi[9].Price);
        f123 = new Videogame(json.videogiochi[10].Name, json.videogiochi[10].InStock, json.videogiochi[10].Compatibility, json.videogiochi[10].Pegi, json.videogiochi[10].Price);
        helldiversII = new Videogame(json.videogiochi[11].Name, json.videogiochi[11].InStock, json.videogiochi[11].Compatibility, json.videogiochi[11].Pegi, json.videogiochi[11].Price);
        baldursGate3 = new Videogame(json.videogiochi[12].Name, json.videogiochi[12].InStock, json.videogiochi[12].Compatibility, json.videogiochi[12].Pegi, json.videogiochi[12].Price);
    }).catch(error => console.log("Error loading: ", error))
    
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
    //se adulto disabilito i giochi pegi 18
    if(!isAdult){
        options[1].disabled = true;
        options[2].disabled = true;
        options[6].disabled = true;
        options[8].disabled = true;
        options[10].disabled = true;

        note.textContent = "Age: Underage"
    }else{
        note.textContent = "Age: Adult"
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
    copieRimaste.textContent = "Copies remaining: " + getObject().inStock;
    inputNumber.value = "";
    inputNumber.disabled = true;
    buy.disabled = true;
})

S_platform.addEventListener('change', function(){
    inputNumber.disabled = false;
})

inputNumber.addEventListener('input', function(){
    let correctNumber;
    correctNumber = parseInt(this.value);
    this.value = correctNumber;
    if(!(parseInt(getObject().inStock) >= parseInt(this.value))){
        alert("The copies selected are not in stock");
        this.value = null;
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
        if(parseInt(inputNumber.value) > 0){
            resolve("Copies bought");
        }else{
            reject("Copies out of stock");
        }
    })

    buyGame.then(
        function(value){
            getObject().inStock -= parseInt(inputNumber.value);
            copieRimaste.textContent = "Copies remaining: " + getObject().inStock;
            inputNumber.value = 0;
            price.textContent = "";
            alert("Purchase successful: " + value)
        },

        function(error){

            alert("Purchase not successful: " + error)
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
        // Remove the active class from all images
        images.forEach(image => image.classList.remove('active'));
    
        // Add the active class to the next image
        images[currentIndex].classList.add('active');
    
        // Deactivate all indicators and remove the red color
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
    
        // Activate the corresponding indicator and set it to red
        indicators[currentIndex].classList.add('active');
    
        // Update background image
        const backgroundImage = document.querySelector('.background-image');
        backgroundImage.style.backgroundImage = `url(${images[currentIndex].src})`;
    
        // Move to the next image index
        currentIndex = (currentIndex + 1) % images.length;
    }    

    // Initially show the first image
    showNextImage();

    // Set interval to show the next image every 5 seconds
    rotationInterval = setInterval(showNextImage, 5000);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        clearInterval(rotationInterval); // Pause the automatic rotation
        currentIndex = index; // Update the current index to the clicked circle
        showNextImage(); // Show the corresponding image
        rotationInterval = setInterval(showNextImage, 5000); // Restart the rotation interval
    });
});
});