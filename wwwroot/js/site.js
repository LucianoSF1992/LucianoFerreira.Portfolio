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
        // NAVBAR + FOOTER
        menu_home: "Home",
        menu_about: "Sobre",
        menu_projects: "Projetos",
        menu_contact: "Contato",
        footer_role: "Desenvolvedor Full Stack",

        // HOME
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
        home_stack_javascript: "Interatividade e dinamismo",

        // SOBRE
        about_hero_title: "Sobre Mim",
        about_hero_subtitle: "Desenvolvedor Full Stack com foco em .NET e experiência em construção de aplicações web completas, do backend estruturado ao frontend responsivo.",
        about_btn_contact: "🚀 Vamos conversar",
        about_btn_projects: "Ver projetos",

        about_role: "Desenvolvedor Full Stack (foco em .NET)",

        about_text_1: "Desenvolvedor Full Stack com experiência em aplicações web e APIs, atuando do design de endpoints e regras de negócio até a construção de interfaces responsivas. Forte base em .NET (C#, ASP.NET Core), com facilidade para adaptar e trabalhar com diferentes stacks conforme o projeto.",

        about_text_2: "Trabalho com APIs REST, autenticação/autorização, modelagem de banco de dados, boas práticas de arquitetura, organização de código e versionamento com Git.",

        about_text_3: "Busco oportunidades como Desenvolvedor Full Stack onde eu possa contribuir com soluções escaláveis, código bem estruturado e evolução contínua — em .NET ou outras stacks, conforme a necessidade do time.",

        about_skills_title: "Principais Competências",
        about_skills_base: "Base principal",
        about_skills_front: "Frontend e fundamentos",
        about_skills_extra: "Conhecimentos adicionais"
    },

    en: {
        // NAVBAR + FOOTER
        menu_home: "Home",
        menu_about: "About",
        menu_projects: "Projects",
        menu_contact: "Contact",
        footer_role: "Full Stack Developer",

        // HOME
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
        home_stack_javascript: "Interactivity and dynamism",

        // SOBRE
        about_hero_title: "About Me",
        about_hero_subtitle: "Full Stack Developer focused on .NET with experience building complete web applications, from structured backend to responsive frontend.",
        about_btn_contact: "🚀 Let's talk",
        about_btn_projects: "View projects",

        about_role: "Full Stack Developer (.NET focused)",

        about_text_1: "Full Stack Developer with experience in web applications and APIs, working from endpoint design and business rules to building responsive interfaces. Strong foundation in .NET (C#, ASP.NET Core), with the ability to adapt and work with different stacks depending on the project.",

        about_text_2: "I work with REST APIs, authentication/authorization, database modeling, architecture best practices, code organization, and version control using Git.",

        about_text_3: "I am looking for opportunities as a Full Stack Developer where I can contribute with scalable solutions, well-structured code, and continuous improvement — in .NET or other stacks depending on the team’s needs.",

        about_skills_title: "Key Skills",
        about_skills_base: "Core stack",
        about_skills_front: "Frontend and fundamentals",
        about_skills_extra: "Additional knowledge"
    },

    es: {
        // NAVBAR + FOOTER
        menu_home: "Inicio",
        menu_about: "Sobre mí",
        menu_projects: "Proyectos",
        menu_contact: "Contacto",
        footer_role: "Desarrollador Full Stack",

        // HOME
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
        home_stack_javascript: "Interactividad y dinamismo",

        // SOBRE
        about_hero_title: "Sobre mí",
        about_hero_subtitle: "Desarrollador Full Stack enfocado en .NET con experiencia en la construcción de aplicaciones web completas, desde backend estructurado hasta frontend responsivo.",
        about_btn_contact: "🚀 Hablemos",
        about_btn_projects: "Ver proyectos",

        about_role: "Desarrollador Full Stack (enfocado en .NET)",

        about_text_1: "Desarrollador Full Stack con experiencia en aplicaciones web y APIs, trabajando desde el diseño de endpoints y reglas de negocio hasta la construcción de interfaces responsivas. Fuerte base en .NET (C#, ASP.NET Core), con facilidad para adaptarse y trabajar con diferentes stacks según el proyecto.",

        about_text_2: "Trabajo con APIs REST, autenticación/autorización, modelado de bases de datos, buenas prácticas de arquitectura, organización de código y control de versiones con Git.",

        about_text_3: "Busco oportunidades como Desarrollador Full Stack donde pueda contribuir con soluciones escalables, código bien estructurado y evolución continua — en .NET u otras tecnologías según las necesidades del equipo.",

        about_skills_title: "Principales habilidades",
        about_skills_base: "Base principal",
        about_skills_front: "Frontend y fundamentos",
        about_skills_extra: "Conocimientos adicionales"
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