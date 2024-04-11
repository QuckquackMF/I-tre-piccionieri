//#region variabili/costanti iniziali e JSON
let json = {
    "videogiochi": [
        {"Name":"Gran Turismo 7", "InStock":"30", "Compatibility":["Playstation 4", "Playstation 5"], "Pegi":"3", "Price":"79,99"},
        {"Name":"Uncharted: The Nathan Drake Collection", "InStock":"27", "Compatibility":["Playstation 4"], "Pegi":"16", "Price":"19,99"},
        {"Name":"Uncharted: Legacy of Thieves Collection", "InStock":"30", "Compatibility":["Playstation 5", "Windows"], "Pegi":"16", "Price":"49,99"},
        {"Name":"Grand Theft Auto 5", "InStock":"56", "Compatibility":["Playstation 3", "Playstation 4", "Playstation 5", "Xbox 360", "Xbox One", "Xbox Series X/S", "Windows"], "Pegi":"18", "Price":"25"},
        {"Name":"Hearts of Iron 4", "InStock":"45", "Compatibility":["Linux", "Windows", "MacOS"], "Pegi":"7", "Price":"7,99"},
        {"Name":"God of War", "InStock":"10", "Compatibility":["Playstation 4", "Windows"], "Pegi":"18", "Price":"20"},
        {"Name":"Minecraft", "InStock":"15", "Compatibility":["Playstation 3", "Playstation 4", "Playstation 5", "Xbox 360", "Xbox One", "Xbox Series X/S", "Windows", "Linux", "IOS", "Android", "Nintendo Switch", "Nintendo 3DS", "MacOS"], "Pegi":"7", "Price":"18,99"},
        {"Name":"Forza Horizon 7", "InStock":"30", "Compatibility":["Xbox One", "Windows"], "Pegi":"3", "Price":"49,99"},
        {"Name":"Call of Duty: Modern Warfare 3", "InStock":"80", "Compatibility":["Playstation 5", "Playstation 4", "Xbox One", "Xbox Series X/S", "Windows"], "Pegi":"18", "Price":"57,99"},
        {"Name":"FC 24", "InStock":"60", "Compatibility":["Playstation 5", "Playstation 4", "Xbox One", "Xbox Series X/S", "Windows", "Android", "Nintendo Switch"], "Pegi":"3", "Price":"79,99"},
        {"Name":"F1 23", "InStock":"39", "Compatibility":["Playstation 5", "Playstation 4", "Xbox One", "Xbox Series X/S", "Windows"], "Pegi":"3", "Price":"79,99"},
        {"Name":"Helldivers II", "InStock":"0", "Compatibility":["Playstation 5", "Windows"], "Pegi":"18", "Price":"39,99"},
        {"Name":"Baldur's Gate 3", "InStock":"110", "Compatibility":["Playstation 5", "Xbox Series X/S", "Windows", "MacOS"], "Pegi":"18", "Price":"69,99"}
    ]
};
let isAdult;
const note = document.getElementById("p_Note");
const S_videogame = document.getElementById("Select_Videogame");
const S_platform = document.getElementById("Select_PlatForm");
const options = document.getElementsByTagName('option');
const inputNumber = document.getElementById("Input_Quanti");
const copieRimaste = document.getElementById("copies");
const buy = document.getElementById("buyBtn");
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

window.onload = function() {
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
};

S_videogame.addEventListener('change', function(){
    S_platform.disabled = false;
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
})

buy.addEventListener('click', function(){
    getObject().inStock -= parseInt(inputNumber.value);
    let costo;
    // da fare somma totale;
    copieRimaste.textContent = "Copie rimaste: " + getObject().inStock + ", Costo totale: €";
    inputNumber.value = 0;
})

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