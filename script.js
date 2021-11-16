const motdepasse = document.getElementById("motdepasse");
const zonescore = document.getElementById("score");

function checkMdp() {
    const mdp = motdepasse.value;
    let score = 0;

    /* Teste la longueur du mot de passe */
    if (mdp.length >=8) {
        score++;
    }

    /* Teste si le mot de passe contient une majuscule */
    if (mdp.toLowerCase() !== mdp) {
        score++;
    }

    /* Teste si le mot de passe contient une minuscule */
    if (mdp.toUpperCase() !== mdp) {
        score++;
    }

    /* Teste si le mot de passe contient un chiffre */
    if (/\d/.test(mdp)) {
        score++;
    }

    zonescore.innerText = "";
    for (let i = 0; i < score; i++) {
        zonescore.append("*");
    }

    switch(score) {
        case 2:
            zonescore.style.color = "orange";
            break;
        case 3:
            zonescore.style.color = "yellow";
            break;
        case 4:
            zonescore.style.color = "green";
            break;
        case 0:
        case 1:
        default:
            zonescore.style.color = "red";
            break;
    }
}

motdepasse.addEventListener("keyup", checkMdp);