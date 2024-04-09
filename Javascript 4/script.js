//#region variabili/costanti iniziali
let videogiochi;
let isAdult;
const note = document.getElementById("p_Note")
const S_videogame = document.getElementById("Select_Videogame")
const S_platform = document.getElementById("Select_PlatForm")
const options = document.getElementsByTagName('option');
<<<<<<< HEAD

//#region videogames objects
let granTurismo7 = new Videogame(videogiochi[0].Name, videogiochi[0].InStock, videogiochi[0].Compatibility, videogiochi[0].Pegi, videogiochi[0].Price);
let unchartedTNDC = new Videogame(videogiochi[1].Name, videogiochi[1].InStock, videogiochi[1].Compatibility, videogiochi[1].Pegi, videogiochi[1].Price);
let unchartedLOTC = new Videogame(videogiochi[2].Name, videogiochi[2].InStock, videogiochi[2].Compatibility, videogiochi[2].Pegi, videogiochi[2].Price);
let grandTheftAuto5 = new Videogame(videogiochi[3].Name, videogiochi[3].InStock, videogiochi[3].Compatibility, videogiochi[3].Pegi, videogiochi[3].Price);
let heartsOfIron4 = new Videogame(videogiochi[4].Name, videogiochi[4].InStock, videogiochi[4].Compatibility, videogiochi[4].Pegi, videogiochi[4].Price);
let godOfWar = new Videogame(videogiochi[5].Name, videogiochi[5].InStock, videogiochi[5].Compatibility, videogiochi[5].Pegi, videogiochi[5].Price);
let minecraft = new Videogame(videogiochi[6].Name, videogiochi[6].InStock, videogiochi[6].Compatibility, videogiochi[6].Pegi, videogiochi[6].Price);
let forzaHorizon7 = new Videogame(videogiochi[7].Name, videogiochi[7].InStock, videogiochi[7].Compatibility, videogiochi[7].Pegi, videogiochi[7].Price);
let callOfDutyMW3 = new Videogame(videogiochi[8].Name, videogiochi[8].InStock, videogiochi[8].Compatibility, videogiochi[8].Pegi, videogiochi[8].Price);
let fc24 = new Videogame(videogiochi[9].Name, videogiochi[9].InStock, videogiochi[9].Compatibility, videogiochi[9].Pegi, videogiochi[9].Price);
let f123 = new Videogame(videogiochi[10].Name, videogiochi[10].InStock, videogiochi[10].Compatibility, videogiochi[10].Pegi, videogiochi[10].Price);
let helldiversII = new Videogame(videogiochi[11].Name, videogiochi[11].InStock, videogiochi[11].Compatibility, videogiochi[11].Pegi, videogiochi[11].Price);
let baldursGate3 = new Videogame(videogiochi[12].Name, videogiochi[12].InStock, videogiochi[12].Compatibility, videogiochi[12].Pegi, videogiochi[12].Price);
//#endregion

=======
>>>>>>> e5ffc91ab4f2af1a70935e7f0d6fe4cf65ec92d2
S_videogame.addEventListener('change', function(){
    S_platform.disabled = false;
    resetOptions();
    switch(S_videogame.options[S_videogame.selectedIndex].text){
        case "Gran Turismo 7":
            granTurismo7.checkCompatibility(options);
            break;
        case "Uncharted: The Nathan Drake Collection":
            unchartedTNDC.checkCompatibility(options);
            break;
        case "Uncharted: Legacy of Thieves Collection":
            unchartedLOTC.checkCompatibility(options);
            break;
        case "Grand Theft Auto 5":
            grandTheftAuto5.checkCompatibility(options);
            break;
        case "Hearts of Iron 4":
            heartsOfIron4.checkCompatibility(options);
            break;
        case "God of War":
            godOfWar.checkCompatibility(options);
            break;
        case "Minecraft":
            minecraft.checkCompatibility(options);
            break;
        case "Forza Horizon 7":
            forzaHorizon7.checkCompatibility(options);
            break;
        case "Call of Duty: Modern Warfare 3":
            callOfDutyMW3.checkCompatibility(options);
            break;
        case "FC 24":
            fc24.checkCompatibility(options);
            break;
        case "F1 23":
            f123.checkCompatibility(options);
            break;
        case "Helldivers II":
            helldiversII.checkCompatibility(options);
            break;
        case "Baldur's Gate 3":
            baldursGate3.checkCompatibility(options);
            break;
    }
})
//#endregion

window.onload = function() {
    fetch("magazzino.json")
        .then(response => response.json())
        .then(data => {
            videogiochi = data.videogiochi;
        })
        .catch(error => console.log("Errore nel caricamento: ", error));
<<<<<<< HEAD
}

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
                // Add more cases if needed for other platforms
            }
        }  
    }
}

function setAge(isAdultValue) {
    isAdult = isAdultValue;
    document.getElementById("agePopup").remove();
    document.body.classList.remove("agePopupOpen");
    S_videogame.disabled = false;
}

=======
};

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
            // Add more cases if needed for other platforms
        }
    }
}


}

//#region videogames objects
let granTurismo7 = new Videogame(videogiochi[0].Name, videogiochi[0].InStock, videogiochi[0].Compatibility, videogiochi[0].Pegi, videogiochi[0].Price);
let unchartedTNDC = new Videogame(videogiochi[1].Name, videogiochi[1].InStock, videogiochi[1].Compatibility, videogiochi[1].Pegi, videogiochi[1].Price);
let unchartedLOTC = new Videogame(videogiochi[2].Name, videogiochi[2].InStock, videogiochi[2].Compatibility, videogiochi[2].Pegi, videogiochi[2].Price);
let grandTheftAuto5 = new Videogame(videogiochi[3].Name, videogiochi[3].InStock, videogiochi[3].Compatibility, videogiochi[3].Pegi, videogiochi[3].Price);
let heartsOfIron4 = new Videogame(videogiochi[4].Name, videogiochi[4].InStock, videogiochi[4].Compatibility, videogiochi[4].Pegi, videogiochi[4].Price);
let godOfWar = new Videogame(videogiochi[5].Name, videogiochi[5].InStock, videogiochi[5].Compatibility, videogiochi[5].Pegi, videogiochi[5].Price);
let minecraft = new Videogame(videogiochi[6].Name, videogiochi[6].InStock, videogiochi[6].Compatibility, videogiochi[6].Pegi, videogiochi[6].Price);
let forzaHorizon7 = new Videogame(videogiochi[7].Name, videogiochi[7].InStock, videogiochi[7].Compatibility, videogiochi[7].Pegi, videogiochi[7].Price);
let callOfDutyMW3 = new Videogame(videogiochi[8].Name, videogiochi[8].InStock, videogiochi[8].Compatibility, videogiochi[8].Pegi, videogiochi[8].Price);
let fc24 = new Videogame(videogiochi[9].Name, videogiochi[9].InStock, videogiochi[9].Compatibility, videogiochi[9].Pegi, videogiochi[9].Price);
let f123 = new Videogame(videogiochi[10].Name, videogiochi[10].InStock, videogiochi[10].Compatibility, videogiochi[10].Pegi, videogiochi[10].Price);
let helldiversII = new Videogame(videogiochi[11].Name, videogiochi[11].InStock, videogiochi[11].Compatibility, videogiochi[11].Pegi, videogiochi[11].Price);
let baldursGate3 = new Videogame(videogiochi[12].Name, videogiochi[12].InStock, videogiochi[12].Compatibility, videogiochi[12].Pegi, videogiochi[12].Price);
//#endregion

function setAge(isAdultValue) {
    isAdult = isAdultValue;
    document.getElementById("agePopup").remove();
    note.textContent = isAdult ? "true" : "false";
    document.body.classList.remove("agePopupOpen");
    note.textContent = isAdult;
    S_videogame.disabled = false;
}

>>>>>>> e5ffc91ab4f2af1a70935e7f0d6fe4cf65ec92d2
function resetOptions(){
    for(let i = 15; i < options.length; i++){
        options[i].disabled = true;
    }
}