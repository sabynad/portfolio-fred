console.log("test ok");


/* Menu burger--------------------------------------------------------------------------------------------------------- */
function toggleMenu() {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    // Toggle les classes pour ouvrir/fermer le menu burger
    burger.classList.toggle('open');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const burger = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    // Ferme le menu lorsque l'on clique sur un élément du menu
    burger.classList.remove('open');
    navLinks.classList.remove('active');
}


/* Section videos -------------------------------------------------------------------------------------------------------------*/

    





// Gallery Home-----------------------
document.addEventListener("DOMContentLoaded", function () {
    const enlargedContainer = document.getElementById("enlarged-image-container");
    const enlargedImage = document.getElementById("enlarged-image");
    const closeButton = document.getElementById("close-button");

    // Gestion des clics sur les images (Delegation d'événements)
    document.querySelector(".hero-gallery").addEventListener("click", (event) => {
        const clickedImage = event.target;
        if (clickedImage.classList.contains("clickable")) {
            enlargedImage.src = clickedImage.src;
            enlargedContainer.classList.add("visible");
        }
    });

    // Fermer l'image agrandie
    const closeModal = () => {
        enlargedContainer.classList.remove("visible");
        enlargedImage.src = "";
    };

    closeButton.addEventListener("click", closeModal);

    // Fermer en cliquant à l'extérieur de l'image
    enlargedContainer.addEventListener("click", (event) => {
        if (event.target === enlargedContainer) {
            closeModal();
        }
    });

    // Fermer avec la touche "Escape"
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && enlargedContainer.classList.contains("visible")) {
            closeModal();
        }
    });
});


 

/*Mes services----------------------------------------------------------------------------------------------------------------------------*/
// Services data (simplified)
const services = {
    1: {
        title: "Training young goalkeeper",
        objectives: [
            "Learning for young goalkeepers specific techniques post.",
            "Support video to every keeper can see its benefits.",
            "Work individualized to take into account the specificity of each guard purpose.",
            "Maintenance of usability through ongoing exchanges and complicity in community life.",
            "Improved concentration, visualization and stress management by sessions fun mental preparation."
        ],
        subjects: [
            "Mobility, coordination, specific speed.",
            "Catch ball.",
            "Dives.",
            "The sorties and feet.",
            "Clearances.",
            "Reductions in angle."
        ]
    },
    2: {
        title: "Goalkeeper Training & Performance Professional",
        objectives: [
            "Intensive technical work.",
            "Specific athletic preparation.",
            "Mental Coaching for each goalie.",
            "Work acrobatics gym."
        ],
        organization: [
            "After a physical, technical and psychological assessment, an individual strategy will be implemented. It will consist of a qualitative and intensive training gesture, a physical fitness and mental program (relaxation therapy, NLP, EMDR)."
        ]
    },
    3: {
        title: "Stage preparateur Goalkeeper of module 1 (5 days)",
        objectives: [
            "This course is designed for coaches and players (goalkeeper and field player) eager to learn about and master the specific work of the goalkeeper.",
            "After the training, each trainer will advise, train and each guardian can improve his training.",
            "The gesture will be favored initiation and physical and technical fundamentals will be studied.",
            "DVD illustrate the theory and precede the practical application of each topic in the field."
        ],
        trainingProgram: [
            "Methodology.",
            "Physical preparation.",
            "Technical preparation.",
            "Psychological approach.",
            "A certificate is issued after control.",
            "Knowledge in the field."
        ]
    }
};

// Open modal with service details
document.querySelectorAll('.open-modal-btn').forEach(button => {
    button.addEventListener('click', function () {
        const serviceId = this.dataset.service;
        const service = services[serviceId];
        const modalContent = document.getElementById('modal-service-content');
        
        // Populate modal content
        let content = `<h3>${service.title}</h3>`;
        
        content += `<h4><strong>OBJECTIVES SOUGHT:</strong></h4><ul>${service.objectives.map(obj => `<li>${obj}</li>`).join('')}</ul>`;

        // Add "SUBJECTS" only for Service 1
        if (service.subjects) {
            content += `<h4><strong>SUBJECTS STUDIED:</strong></h4><ul>${service.subjects.map(sub => `<li>${sub}</li>`).join('')}</ul>`;
        }

        // Add "ORGANIZATION" only for Service 2
        if (service.organization) {
            content += `<h4><strong>ORGANIZATION:</strong></h4><ul>${service.organization.map(org => `<li>${org}</li>`).join('')}</ul>`;
        }

        // Add "TRAINING PROGRAM" only for Service 3
        if (service.trainingProgram) {
            content += `<h4><strong>TRAINING PROGRAM:</strong></h4><ul>${service.trainingProgram.map(tp => `<li>${tp}</li>`).join('')}</ul>`;
        }

        modalContent.innerHTML = content;
        
        // Show the modal
        document.getElementById('modal').style.display = "block";
    });
});

// Close modal
document.querySelector('.close-modal-btn').addEventListener('click', function () {
    document.getElementById('modal').style.display = "none";
});

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};


// Gallery page-----------------------------------------------------------------------------------------
