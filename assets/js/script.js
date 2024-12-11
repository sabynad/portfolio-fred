console.log("test ok");


document.addEventListener("DOMContentLoaded", function () {
    const enlargedContainer = document.getElementById("enlarged-image-container");
    const enlargedImage = document.getElementById("enlarged-image");
    const closeButton = document.getElementById("close-button");

    // Cibler toutes les images cliquables
    document.querySelectorAll(".clickable").forEach((image) => {
        image.addEventListener("click", () => {
            enlargedImage.src = image.src; // Copier l'image source
            enlargedContainer.classList.add("visible"); // Afficher le conteneur
        });
    });

    // Fermer l'image agrandie
    closeButton.addEventListener("click", () => {
        enlargedContainer.classList.remove("visible");
        enlargedImage.src = ""; // Réinitialiser la source
    });

    // Fermer en cliquant à l'extérieur de l'image
    enlargedContainer.addEventListener("click", (event) => {
        if (event.target === enlargedContainer) {
            enlargedContainer.classList.remove("visible");
            enlargedImage.src = "";
        }
    });
});
