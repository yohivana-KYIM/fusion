const container = document.querySelector(".container");
const qrImg = container.querySelector(".qr-code img");

// Générer le lien vers home.html
const qrValue = "home.html";

// Générer le code QR avec le lien vers home.html
qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

// Afficher le conteneur contenant le code QR
container.classList.add("active");
