let videogiochi;
let isAdult = false;
const note = document.getElementById("p_Note")
const S_videogame = document.getElementById("Select_Videogame")

// La funzione window.onload deve essere assegnata con una funzione di callback
window.onload = function() {
    fetch('magazzino.json')
        .then(response => response.json())
        .then(data => {
            videogiochi = data.videogiochi;
            // Qui puoi fare qualcosa con i dati se necessario
        })
        .catch(error => console.log("Errore nel caricamento: ", error));

    checkAge();
};


// Funzione per impostare l'età
function setAge(isAdultValue) {
    isAdult = isAdultValue;
    document.getElementById("agePopup").style.display = "none";
    note.textContent = isAdult ? "true" : "false";
    if (isAdult) {
        document.body.classList.remove("agePopupOpen");
        note.textContent = isAdult;
        S_videogame.disabled = false;

    } else {
        document.body.classList.add("agePopupOpen");
        note.textContent = isAdult;
    }
}

function checkAge() {
    document.getElementById("agePopup").style.display = "block";
}

checkAge();