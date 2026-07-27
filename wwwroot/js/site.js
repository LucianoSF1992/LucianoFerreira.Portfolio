window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

window.translations = {
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
        about_skills_extra: "Conhecimentos adicionais",

        // PROJETOS
        projects_hero_title: "Projetos",
        projects_hero_subtitle: "Aplicações Full Stack desenvolvidas para resolver problemas reais, utilizando tecnologias modernas, arquitetura escalável e boas práticas de desenvolvimento.",
        projects_main_title: "🚀 Projetos em Destaque",
        projects_other_title: "💻 Outros Projetos",

        project_status_done: "MVP concluído",
        project_status_progress: "Em andamento",

        project_treinemais_title: "TreineMais — Sistema de Treinos para Academias",
        project_treinemais_desc: "Sistema web para academias e personal trainers criarem treinos personalizados, gerenciarem alunos e acompanharem a evolução dos exercícios. Possui autenticação com ASP.NET Identity e controle de acesso por perfil.",

        project_agendapro_title: "AgendaPro – Sistema de Gestão de Agendamentos",
        project_agendapro_desc_1: "Sistema web para gerenciamento de agendamentos de serviços, com controle de clientes, profissionais, serviços, horários e status de atendimento.",
        project_agendapro_desc_2: "Possui autenticação com perfis de acesso, dashboard com indicadores do dia, controle de conflito de horários e relatórios gerenciais por período.",

        project_erp_title: "StockChef Platform — Sistema de Gestão para Restaurantes",
        project_erp_desc: "Plataforma Full Stack para gerenciamento de estoque de restaurantes, desenvolvida com Angular, ASP.NET Core, APIs REST e Clean Architecture, com foco em escalabilidade e organização do código.",


        project_devclub_title: "DevClub Next Level — Plataforma Full Stack de Ensino",
        project_devclub_status: "Publicado",
        project_devclub_desc_1: "Plataforma Full Stack desenvolvida para o concurso de Desenvolvedor Full Stack da DevClub. Possui autenticação de usuários, área do aluno, catálogo de cursos, páginas institucionais, formulário de contato integrado com API REST e interface totalmente responsiva.",
        project_devclub_desc_2: "Desenvolvido com Next.js no frontend e ASP.NET Core no backend, utilizando Entity Framework Core, SQLite e deploy em Linux com Nginx, PM2 e Systemd",


        project_btn_system: "Ver Sistema",
        project_btn_github: "GitHub",

        projects_github_title: "Repositórios no GitHub",
        projects_github_desc: "Aplicações web, APIs REST e projetos práticos desenvolvidos com foco em aprendizado contínuo e boas práticas.",
        projects_github_button: "Ver no GitHub",

        // CONTATO
        contact_hero_title: "Contato",
        contact_hero_subtitle: "Vamos conversar sobre oportunidades e projetos.",

        contact_label_name: "Nome",
        contact_label_email: "Email",
        contact_label_message: "Mensagem",

        contact_placeholder_name: "Seu nome",
        contact_placeholder_email: "Seu melhor email",
        contact_placeholder_message: "Digite sua mensagem",

        contact_email_subject: "Novo contato do portfólio",

        contact_btn_submit: "Enviar Mensagem",
        contact_btn_sending: "Enviando...",

        contact_error_default: "Não foi possível enviar sua mensagem. Tente novamente.",
        contact_error_connection: "Falha de conexão ao enviar. Tente novamente."
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
        about_skills_extra: "Additional knowledge",

        // PROJECTS
        projects_hero_title: "Projects",
        projects_hero_subtitle: "Full Stack applications built to solve real-world problems using modern technologies, scalable architecture and software engineering best practices.",
        projects_main_title: "🚀 Featured Projects",
        projects_other_title: "💻 Other Projects",

        project_status_done: "MVP completed",
        project_status_progress: "In progress",

        project_treinemais_title: "TreineMais — Training Management System for Gyms",
        project_treinemais_desc: "Web system for gyms and personal trainers to create personalized workout plans, manage students, and track exercise progress. Includes authentication with ASP.NET Identity and role-based access control.",

        project_agendapro_title: "AgendaPro – Scheduling Management System",
        project_agendapro_desc_1: "Web system for service appointment management, including control of clients, professionals, services, time slots, and appointment status.",
        project_agendapro_desc_2: "Includes authentication with access roles, dashboard with daily indicators, scheduling conflict control, and management reports by period.",

        project_erp_title: "StockChef Platform — Restaurant Management System",
        project_erp_desc: "Full Stack restaurant management platform built with Angular, ASP.NET Core, REST APIs and Clean Architecture, focused on scalability, maintainability and clean code.",


        project_devclub_title: "DevClub Next Level — Full Stack Learning Platform",
        project_devclub_status: "Published",
        project_devclub_desc_1: "Full Stack platform developed for the DevClub Full Stack Developer Contest with authentication, student area, course catalog, contact API and responsive interface.",
        project_devclub_desc_2: "Built with Next.js on the frontend and ASP.NET Core on the backend using Entity Framework Core, SQLite and deployed on Linux with Nginx, PM2 and Systemd.",

        project_btn_system: "View System",
        project_btn_github: "GitHub",

        projects_github_title: "GitHub Repositories",
        projects_github_desc: "Web applications, REST APIs, and practical projects developed with a focus on continuous learning and best practices.",
        projects_github_button: "View on GitHub",

        // CONTACT
        contact_hero_title: "Contact",
        contact_hero_subtitle: "Let's talk about opportunities and projects.",

        contact_label_name: "Name",
        contact_label_email: "Email",
        contact_label_message: "Message",

        contact_placeholder_name: "Your name",
        contact_placeholder_email: "Your best email",
        contact_placeholder_message: "Type your message",

        contact_email_subject: "New portfolio contact",

        contact_btn_submit: "Send Message",
        contact_btn_sending: "Sending...",

        contact_error_default: "Your message could not be sent. Please try again.",
        contact_error_connection: "Connection failed while sending. Please try again."
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
        about_skills_extra: "Conocimientos adicionales",

        // PROYECTOS
        projects_hero_title: "Proyectos",
        projects_hero_subtitle: "Aplicaciones Full Stack desarrolladas para resolver problemas reales utilizando tecnologías modernas, arquitectura escalable y buenas prácticas de desarrollo.",
        projects_main_title: "🚀 Proyectos Destacados",
        projects_other_title: "💻 Otros Proyectos",

        project_status_done: "MVP finalizado",
        project_status_progress: "En desarrollo",

        project_treinemais_title: "TreineMais — Sistema de Entrenamientos para Gimnasios",
        project_treinemais_desc: "Sistema web para gimnasios y entrenadores personales que permite crear entrenamientos personalizados, gestionar alumnos y acompañar la evolución de los ejercicios. Incluye autenticación con ASP.NET Identity y control de acceso por perfil.",

        project_agendapro_title: "AgendaPro – Sistema de Gestión de Citas",
        project_agendapro_desc_1: "Sistema web para la gestión de citas de servicios, con control de clientes, profesionales, servicios, horarios y estado de atención.",
        project_agendapro_desc_2: "Incluye autenticación con perfiles de acceso, panel con indicadores del día, control de conflictos de horario e informes gerenciales por período.",

        project_erp_title: "StockChef Platform — Sistema de Gestión para Restaurantes",
        project_erp_desc: "Plataforma Full Stack para la gestión de restaurantes desarrollada con Angular, ASP.NET Core, APIs REST y Clean Architecture, enfocada en escalabilidad y mantenimiento.",

        project_devclub_title: "DevClub Next Level — Plataforma Full Stack de Enseñanza",
        project_devclub_status: "Publicado",
        project_devclub_desc_1: "Plataforma Full Stack desarrollada para el concurso de Desarrollador Full Stack de DevClub. Incluye autenticación de usuarios, área del alumno, catálogo de cursos, formulario de contacto integrado con API REST e interfaz totalmente responsiva.",
        project_devclub_desc_2: "Desarrollada con Next.js en el frontend y ASP.NET Core en el backend utilizando Entity Framework Core, SQLite y desplegada en Linux con Nginx, PM2 y Systemd.",

        project_btn_system: "Ver Sistema",
        project_btn_github: "GitHub",

        projects_github_title: "Repositorios en GitHub",
        projects_github_desc: "Aplicaciones web, APIs REST y proyectos prácticos desarrollados con enfoque en aprendizaje continuo y buenas prácticas.",
        projects_github_button: "Ver en GitHub",

        // CONTACTO
        contact_hero_title: "Contacto",
        contact_hero_subtitle: "Hablemos sobre oportunidades y proyectos.",

        contact_label_name: "Nombre",
        contact_label_email: "Correo electrónico",
        contact_label_message: "Mensaje",

        contact_placeholder_name: "Tu nombre",
        contact_placeholder_email: "Tu mejor correo electrónico",
        contact_placeholder_message: "Escribe tu mensaje",

        contact_email_subject: "Nuevo contacto del portafolio",

        contact_btn_submit: "Enviar Mensaje",
        contact_btn_sending: "Enviando...",

        contact_error_default: "No fue posible enviar tu mensaje. Inténtalo nuevamente.",
        contact_error_connection: "Falló la conexión al enviar. Inténtalo nuevamente."
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        const translation = window.translations[lang]?.[key];

        if (translation) {
            element.textContent = translation;
        }
    });

    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        const translation = window.translations[lang]?.[key];

        if (translation) {
            element.setAttribute("placeholder", translation);
        }
    });

    const subjectElements = document.querySelectorAll("[data-i18n-subject]");
    subjectElements.forEach(element => {
        const key = element.getAttribute("data-i18n-subject");
        const translation = window.translations[lang]?.[key];

        if (translation) {
            element.value = translation;
        }
    });

    localStorage.setItem("preferredLanguage", lang);
    document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";
    setLanguage(savedLanguage);
});
