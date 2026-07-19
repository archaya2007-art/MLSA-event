// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 600);

    }, 2500);
});

// =========================
// TYPING EFFECT
// =========================

const words = [
    "Future AI Engineer",
    "Frontend Developer",
    "Problem Solver",
    "Hackathon Enthusiast",
    "Machine Learning Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 45 : 100);
}

typeEffect();

// =========================
// PARTICLES
// =========================

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 120; i++) {

        const p = document.createElement("span");

        p.classList.add("particle");

        p.style.left = Math.random() * 100 + "%";

        p.style.top = Math.random() * 100 + "%";

        p.style.width = (2 + Math.random() * 4) + "px";

        p.style.height = p.style.width;

        p.style.animationDuration = (5 + Math.random() * 8) + "s";

        p.style.animationDelay = Math.random() * 5 + "s";

        particleContainer.appendChild(p);

    }

}

// =========================
// PARTICLE ANIMATION STYLE
// =========================

const style = document.createElement("style");

style.innerHTML = `
.particle{

position:absolute;
background:#00ffff;
border-radius:50%;
opacity:.8;
animation:floatParticle linear infinite;

}

@keyframes floatParticle{

0%{

transform:translateY(0px);

opacity:.2;

}

50%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}
`;

document.head.appendChild(style);

// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".section,.project-card,.card").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = ".8s";

    observer.observe(item);

});

// =========================
// AI BUTTON
// =========================

const aiButton = document.getElementById("aiButton");

if (aiButton) {

    aiButton.onclick = () => {

        alert(
`🤖 NEXUS AI

Welcome to my AI Portfolio!

Explore:
• About
• Skills
• Projects
• Achievements
• Contact

Thank you for visiting!`
        );

    };

}