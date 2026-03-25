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
        footer_role: "Desenvolvedor Full Stack",

        home_hero_name: "Luciano Silva Ferreira",
        home_hero_subtitle: "Desenvolvedor Full Stack com experiência em .NET e tecnologias modernas de desenvolvimento web.",
        home_hero_description: "Construindo sistemas completos — do backend estruturado ao frontend responsivo — com foco em performance, escalabilidade e boas práticas.",
        home_btn_projects: "Ver Projetos",
        home_btn_github: "GitHub",
        home_btn_linkedin: "LinkedIn",

        home_stack_title: "Stack Técnica",
        home_stack_csharp: "Programação orientada a objetos",
        home_stack_aspnet: "Aplicações web e APIs REST",
        home_stack_ef: "ORM e acesso a dados",
        home_stack_sqlserver: "Modelagem e consultas",
        home_stack_html: "Estruturação semântica",
        home_stack_css: "Layouts responsivos",
        home_stack_bootstrap: "UI moderna e responsiva",
        home_stack_javascript: "Interatividade e dinamismo"
    },
    en: {
        menu_home: "Home",
        menu_about: "About",
        menu_projects: "Projects",
        menu_contact: "Contact",
        footer_role: "Full Stack Developer",

        home_hero_name: "Luciano Silva Ferreira",
        home_hero_subtitle: "Full Stack Developer with experience in .NET and modern web development technologies.",
        home_hero_description: "Building complete systems — from structured backend to responsive frontend — with a focus on performance, scalability, and best practices.",
        home_btn_projects: "View Projects",
        home_btn_github: "GitHub",
        home_btn_linkedin: "LinkedIn",

        home_stack_title: "Technical Stack",
        home_stack_csharp: "Object-oriented programming",
        home_stack_aspnet: "Web applications and REST APIs",
        home_stack_ef: "ORM and data access",
        home_stack_sqlserver: "Modeling and queries",
        home_stack_html: "Semantic structure",
        home_stack_css: "Responsive layouts",
        home_stack_bootstrap: "Modern and responsive UI",
        home_stack_javascript: "Interactivity and dynamism"
    },
    es: {
        menu_home: "Inicio",
        menu_about: "Sobre mí",
        menu_projects: "Proyectos",
        menu_contact: "Contacto",
        footer_role: "Desarrollador Full Stack",

        home_hero_name: "Luciano Silva Ferreira",
        home_hero_subtitle: "Desarrollador Full Stack con experiencia en .NET y tecnologías modernas de desarrollo web.",
        home_hero_description: "Construyendo sistemas completos — desde un backend estructurado hasta un frontend responsivo — con enfoque en rendimiento, escalabilidad y buenas prácticas.",
        home_btn_projects: "Ver Proyectos",
        home_btn_github: "GitHub",
        home_btn_linkedin: "LinkedIn",

        home_stack_title: "Stack Técnico",
        home_stack_csharp: "Programación orientada a objetos",
        home_stack_aspnet: "Aplicaciones web y APIs REST",
        home_stack_ef: "ORM y acceso a datos",
        home_stack_sqlserver: "Modelado y consultas",
        home_stack_html: "Estructura semántica",
        home_stack_css: "Layouts responsivos",
        home_stack_bootstrap: "UI moderna y responsiva",
        home_stack_javascript: "Interactividad y dinamismo"
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