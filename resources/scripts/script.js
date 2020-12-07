//Décommenter si utilisation d'un slider, penser à décommenter aussi dans le style.scss
//import { tns } from "tiny-slider/src/tiny-slider"

document.addEventListener("DOMContentLoaded", () => {

    const openMobile = document.getElementById('open_mobile');
    if (openMobile != null) {
        openMobile.onclick = function(e) {
            console.log('Open mobile');
        }
    }
});
