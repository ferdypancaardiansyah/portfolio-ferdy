
    AOS.init({
        duration: 1000,
        once: false
    });


const progressBars = document.querySelectorAll('.progress-fill');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            const width =
            entry.target.getAttribute('data-width');
            entry.target.style.width =
            width + '%';
        }
    });
});

progressBars.forEach(bar => {
    observer.observe(bar);
});

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})
const roles = [
    "Web Developer",
    "Flutter Developer",
    "UI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");
function typingEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typingEffect, 1200);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typingEffect, isDeleting ? 60 : 100);
}
typingEffect();

document.addEventListener("DOMContentLoaded", function () {

    // DARK MODE
    const themeToggle = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) themeToggle.textContent = "☀️";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "🌙";
            }
        });
    }

    // AOS
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: false
        });
    }

    // PROGRESS BAR
    const progressBars = document.querySelectorAll(".progress-fill");

    if (progressBars.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute("data-width");
                    entry.target.style.width = width + "%";
                }
            });
        });

        progressBars.forEach(bar => observer.observe(bar));
    }

    // NAVBAR SCROLL
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // TYPING EFFECT
    const typingText = document.getElementById("typing-text");

    if (typingText) {
        const roles = ["Web Developer", "Flutter Developer", "UI Enthusiast"];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typingEffect() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typingEffect, 1200);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            setTimeout(typingEffect, isDeleting ? 60 : 100);
        }

        typingEffect();
    }

});