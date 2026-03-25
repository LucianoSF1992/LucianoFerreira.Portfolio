window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const translations = {
    pt: {
        menu_home: "Home",
        menu_about: "Sobre",
        menu_projects: "Projetos",
        menu_contact: "Contato",
        footer_role: "Desenvolvedor Full Stack"
    },
    en: {
        menu_home: "Home",
        menu_about: "About",
        menu_projects: "Projects",
        menu_contact: "Contact",
        footer_role: "Full Stack Developer"
    },
    es: {
        menu_home: "Inicio",
        menu_about: "Sobre mí",
        menu_projects: "Proyectos",
        menu_contact: "Contacto",
        footer_role: "Desarrollador Full Stack"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        const translation = translations[lang]?.[key];

        if (translation) {
            element.textContent = translation;
        }
    });

    localStorage.setItem("preferredLanguage", lang);
    document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";
    setLanguage(savedLanguage);
});