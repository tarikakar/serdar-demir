const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

// Mobil menü
if (mobileMenu && nav) {
    mobileMenu.addEventListener("click", () => {
        nav.classList.toggle("active");

        const isOpen = nav.classList.contains("active");

        mobileMenu.setAttribute("aria-expanded", isOpen);
        mobileMenu.textContent = isOpen ? "✕" : "☰";
    });

    document.querySelectorAll(".nav a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            mobileMenu.setAttribute("aria-expanded", "false");
            mobileMenu.textContent = "☰";
        });
    });
}

// Header scroll efekti
if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Scroll animasyonları
const animatedElements = document.querySelectorAll(
    ".about-content, .about-images, .specialty-card, .ep-content, .heart-visual, .academic, .patient-information, .contact-main, .map-box"
);

animatedElements.forEach((element) => {
    element.classList.add("reveal-ready");
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    animatedElements.forEach((element) => {
        element.classList.add("visible");
    });
}