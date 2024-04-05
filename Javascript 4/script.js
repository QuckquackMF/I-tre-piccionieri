let videogiochi

window.onload(
    fetch('magazzino.json').then(response => response.json()).then(data => {
        videogiochi = data.videogiochi
    }).catch(error => console.log("Errore nel caricamento: ", error))
)