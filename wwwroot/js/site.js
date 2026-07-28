// ============================================
// Luciano Ferreira - Portfolio
// site.js (Parte 1)
// Home + Sobre (PT)
// ============================================

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("mainNavbar");

    if (!navbar) return;

    if (window.scrollY > 50)
        navbar.classList.add("scrolled");
    else
        navbar.classList.remove("scrolled");
});

// ============================================
// TRANSLATIONS
// ============================================

window.translations = {

    pt: {

        // =====================================
        // HOME
        // =====================================

        home_hero_badge: "Disponível para oportunidades",

        home_hero_name: "Luciano Silva Ferreira",

        home_hero_subtitle:
            "Desenvolvedor Full Stack com experiência em .NET e tecnologias modernas de desenvolvimento web.",

        home_hero_description:
            "Construindo sistemas completos — do backend estruturado ao frontend responsivo — com foco em performance, escalabilidade e boas práticas.",

        home_btn_projects: "Ver Projetos",

        home_btn_contact: "Entrar em contato",

        home_stats_projects: "Projetos desenvolvidos",

        home_stats_technologies: "Tecnologias",

        home_stats_author: "Especialista em",

        home_stats_fullstack: "Full Stack",

        home_stats_fullstack_desc:
            "Desenvolvimento de aplicações modernas com foco em qualidade, desempenho e escalabilidade.",

        home_stack_title: "Tecnologias",

        home_stack_subtitle:
            "Tecnologias e ferramentas utilizadas no desenvolvimento de aplicações modernas, escaláveis e de alta performance.",

        home_stack_dotnet_desc:
            "APIs REST e aplicações modernas.",

        home_stack_csharp_desc:
            "Backend orientado a objetos.",

        home_stack_angular_desc:
            "Desenvolvimento de aplicações SPA.",

        home_stack_react_desc:
            "Interfaces modernas e reativas.",

        home_stack_next_desc:
            "Frontend com alta performance e SEO.",

        home_stack_typescript_desc:
            "Código robusto, seguro e escalável.",

        home_stack_sql_desc:
            "Banco de dados relacional.",

        home_stack_docker_desc:
            "Containers, deploy e ambientes Linux.",

        home_projects_title:
            "Principais Projetos",

        home_projects_subtitle:
            "Projetos desenvolvidos utilizando tecnologias modernas, arquitetura limpa e foco em performance.",

        home_project_devclub:
            "Plataforma Full Stack desenvolvida com ASP.NET Core, Next.js, React e TypeScript.",

        home_project_button:
            "Saiba mais",

        home_project_treinemais:
            "Plataforma para academias e personal trainers com gerenciamento completo de alunos e treinos.",

        home_project_agendapro:
            "Sistema completo de agendamento online com foco em produtividade.",

        home_project_stockchef:
            "Plataforma para gestão de estoque, compras e produção de restaurantes.",

        home_cta_title:
            "Vamos construir algo incrível juntos?",

        home_cta_description:
            "Estou disponível para oportunidades como Desenvolvedor Full Stack, Backend .NET ou Frontend, contribuindo com soluções modernas, escaláveis e de alta qualidade.",

        // =====================================
        // SOBRE
        // =====================================

        about_hero_title:
            "Sobre Mim",

        about_hero_subtitle:
            "Desenvolvedor Full Stack com foco em .NET e experiência na construção de aplicações web completas.",

        about_btn_contact:
            "🚀 Vamos conversar",

        about_btn_projects:
            "Ver projetos",

        about_name:
            "Luciano Silva Ferreira",

        about_role:
            "Desenvolvedor Full Stack (.NET)",

        about_text_2:
            "Tenho experiência no desenvolvimento de APIs REST, autenticação e autorização, modelagem de banco de dados, Entity Framework Core, SQL Server e arquitetura em camadas.",

        about_text_3:
            "Também atuo no desenvolvimento de interfaces modernas utilizando Bootstrap, JavaScript, TypeScript, Angular, React e Next.js, buscando sempre oferecer uma excelente experiência ao usuário.",

        about_text_4:
            "Estou em constante evolução profissional, estudando novas tecnologias e aplicando boas práticas para desenvolver soluções robustas, escaláveis e de alta qualidade.",

        about_text_5:
            "Busco oportunidades onde possa contribuir com soluções modernas, código limpo e arquitetura bem estruturada.",

        about_text_6:
            "Acredito no aprendizado contínuo e na colaboração como pilares para entregar software de qualidade.",

        about_skills_title:
            "Principais Competências",

        // Backend

        about_backend_title:
            "Backend",

        about_backend_1:
            ".NET",

        about_backend_2:
            "ASP.NET Core",

        about_backend_3:
            "C#",

        about_backend_4:
            "Entity Framework Core",

        about_backend_5:
            "SQL Server",

        about_backend_6:
            "REST APIs",

        // Frontend

        about_frontend_title:
            "Frontend",

        about_frontend_1:
            "HTML5",

        about_frontend_2:
            "CSS3",

        about_frontend_3:
            "Bootstrap",

        about_frontend_4:
            "JavaScript",

        about_frontend_5:
            "TypeScript",

        about_frontend_6:
            "Angular • React • Next.js",

        // DevOps

        about_devops_title:
            "DevOps e Ferramentas",

        about_devops_1:
            "Git",

        about_devops_2:
            "GitHub",

        about_devops_3:
            "Docker",

        about_devops_4:
            "Linux",

        about_devops_5:
            "Nginx",

        about_devops_6:
            "Clean Architecture",

        // =====================================
        // PROJETOS
        // =====================================

        projects_hero_title:
            "Projetos",

        projects_hero_subtitle:
            "Aplicações Full Stack desenvolvidas para resolver problemas reais utilizando tecnologias modernas, arquitetura escalável e boas práticas de desenvolvimento.",

        projects_featured_title:
            "🚀 Projetos em Destaque",

        project_status_published:
            "Publicado",

        project_status_done:
            "MVP concluído",

        project_status_development:
            "Em desenvolvimento",

        // DevClub

        project_devclub_title:
            "DevClub Next Level — Plataforma Full Stack de Ensino",

        project_devclub_desc_1:
            "Plataforma Full Stack desenvolvida para o concurso de Desenvolvedor Full Stack da DevClub. Possui autenticação de usuários, área do aluno, catálogo de cursos, páginas institucionais, formulário de contato integrado com API REST e interface totalmente responsiva.",

        project_devclub_desc_2:
            "Desenvolvido com Next.js no frontend e ASP.NET Core no backend utilizando Entity Framework Core, SQLite e deploy em Linux com Nginx, PM2 e Systemd.",

        // TreineMais

        project_treinemais_title:
            "TreineMais — Sistema de Treinos para Academias",

        project_treinemais_desc:
            "Sistema web para academias e personal trainers criarem treinos personalizados, gerenciarem alunos e acompanharem a evolução dos exercícios. Possui autenticação com ASP.NET Identity e controle de acesso por perfil.",

        // AgendaPro

        project_agendapro_title:
            "AgendaPro — Sistema de Gestão de Agendamentos",

        project_agendapro_desc_1:
            "Sistema web para gerenciamento de agendamentos de serviços com controle de clientes, profissionais, serviços, horários e status dos atendimentos.",

        project_agendapro_desc_2:
            "Possui autenticação com perfis de acesso, dashboard com indicadores do dia, controle de conflitos de horários e relatórios gerenciais.",

        // StockChef

        project_stockchef_title:
            "StockChef Platform — Sistema de Gestão para Restaurantes",

        project_stockchef_desc_1:
            "Plataforma Full Stack para gerenciamento de estoque de restaurantes desenvolvida utilizando Clean Architecture, APIs REST e arquitetura em camadas.",

        project_stockchef_desc_2:
            "Frontend desenvolvido em Angular e backend em ASP.NET Core seguindo princípios SOLID, Domain-Driven Design e Clean Architecture.",


        // Botões

        project_btn_system:
            "Ver Sistema",

        project_btn_github:
            "GitHub",

        // =====================================
        // CONTATO
        // =====================================

        contact_hero_title:
            "Contato",

        contact_hero_subtitle:
            "Vamos conversar sobre oportunidades, projetos ou novas ideias.",

        contact_label_name:
            "Nome",

        contact_placeholder_name:
            "Seu nome",

        contact_label_email:
            "E-mail",

        contact_placeholder_email:
            "Seu melhor e-mail",

        contact_label_message:
            "Mensagem",

        contact_placeholder_message:
            "Digite sua mensagem",

        contact_btn_submit:
            "Enviar Mensagem",

        contact_btn_sending:
            "Enviando...",

        contact_email_subject:
            "Novo contato do portfólio",

        contact_error_default:
            "Não foi possível enviar sua mensagem. Tente novamente.",

        contact_error_connection:
            "Falha na conexão. Verifique sua internet e tente novamente.",

        // =====================================
        // ERROR
        // =====================================

        error_title:
            "Ocorreu um erro",

        error_description:
            "Desculpe, ocorreu um erro ao processar sua solicitação.",

        error_request_id:
            "ID da Solicitação:",

        error_back_home:
            "Voltar para a página inicial"

    },

    en: {

        // =====================================
        // NAVBAR + FOOTER
        // =====================================

        menu_home: "Home",
        menu_about: "About",
        menu_projects: "Projects",
        menu_contact: "Contact",

        footer_role: "Full Stack Developer",

        // =====================================
        // HOME
        // =====================================

        home_hero_badge: "Available for opportunities",

        home_hero_name: "Luciano Silva Ferreira",

        home_hero_subtitle:
            "Full Stack Developer with experience in .NET and modern web development technologies.",

        home_hero_description:
            "Building complete systems—from structured back-end to responsive front-end—with a focus on performance, scalability and software engineering best practices.",

        home_btn_projects: "View Projects",

        home_btn_contact: "Contact Me",

        home_stats_projects: "Projects",

        home_stats_technologies: "Technologies",

        home_stats_author: "Specialist in",

        home_stats_fullstack: "Full Stack",

        home_stats_fullstack_desc:
            "Modern application development focused on quality, performance and scalability.",

        home_stack_title: "Technologies",

        home_stack_subtitle:
            "Technologies and tools used to build modern, scalable and high-performance applications.",

        home_stack_dotnet_desc:
            "REST APIs and modern applications.",

        home_stack_csharp_desc:
            "Object-oriented backend development.",

        home_stack_angular_desc:
            "Modern SPA development.",

        home_stack_react_desc:
            "Modern reactive interfaces.",

        home_stack_next_desc:
            "High-performance frontend with SEO.",

        home_stack_typescript_desc:
            "Robust, secure and scalable code.",

        home_stack_sql_desc:
            "Relational database.",

        home_stack_docker_desc:
            "Containers, deployment and Linux environments.",

        home_projects_title:
            "Featured Projects",

        home_projects_subtitle:
            "Projects developed using modern technologies, Clean Architecture and performance-oriented solutions.",

        home_project_devclub:
            "Full Stack platform built with ASP.NET Core, Next.js, React and TypeScript.",

        home_project_treinemais:
            "Platform for gyms and personal trainers with complete student and workout management.",

        home_project_agendapro:
            "Complete online scheduling system focused on productivity.",

        home_project_stockchef:
            "Restaurant inventory, purchasing and production management platform.",

        home_project_button:
            "Learn More",

        home_cta_title:
            "Let's build something amazing together?",

        home_cta_description:
            "I'm available for opportunities as a Full Stack Developer, .NET Backend Developer or Frontend Developer, delivering modern, scalable and high-quality solutions.",

        // =====================================
        // ABOUT
        // =====================================

        about_hero_title:
            "About Me",

        about_hero_subtitle:
            "Full Stack Developer focused on .NET with experience building complete web applications.",

        about_btn_contact:
            "🚀 Let's Talk",

        about_btn_projects:
            "View Projects",

        about_name:
            "Luciano Silva Ferreira",

        about_role:
            "Full Stack Developer (.NET)",

        about_text_2:
            "I have experience developing REST APIs, authentication and authorization, database modeling, Entity Framework Core, SQL Server and layered architecture.",

        about_text_3:
            "I also build modern user interfaces using Bootstrap, JavaScript, TypeScript, Angular, React and Next.js, always focusing on delivering an excellent user experience.",

        about_text_4:
            "I continuously improve my skills by studying new technologies and applying best practices to create robust, scalable and high-quality solutions.",

        about_text_5:
            "I'm looking for opportunities where I can contribute with modern solutions, clean code and well-structured architecture.",

        about_text_6:
            "I believe continuous learning and collaboration are essential for delivering great software.",

        about_skills_title:
            "Key Skills",

        about_backend_title:
            "Backend",

        about_backend_1: ".NET",
        about_backend_2: "ASP.NET Core",
        about_backend_3: "C#",
        about_backend_4: "Entity Framework Core",
        about_backend_5: "SQL Server",
        about_backend_6: "REST APIs",

        about_frontend_title:
            "Frontend",

        about_frontend_1: "HTML5",
        about_frontend_2: "CSS3",
        about_frontend_3: "Bootstrap",
        about_frontend_4: "JavaScript",
        about_frontend_5: "TypeScript",
        about_frontend_6: "Angular • React • Next.js",

        about_devops_title:
            "DevOps & Tools",

        about_devops_1: "Git",
        about_devops_2: "GitHub",
        about_devops_3: "Docker",
        about_devops_4: "Linux",
        about_devops_5: "Nginx",
        about_devops_6: "Clean Architecture",

        // =====================================
        // PROJECTS
        // =====================================

        projects_hero_title:
            "Projects",

        projects_hero_subtitle:
            "Full Stack applications built to solve real-world problems using modern technologies, scalable architecture and software engineering best practices.",

        projects_featured_title:
            "🚀 Featured Projects",

        project_status_published:
            "Published",

        project_status_done:
            "MVP Completed",

        project_status_development:
            "In Development",

        project_devclub_title:
            "DevClub Next Level — Full Stack Learning Platform",

        project_devclub_desc_1:
            "Full Stack platform developed for the DevClub Full Stack Developer Challenge featuring authentication, student dashboard, course catalog, REST API integration and a fully responsive interface.",

        project_devclub_desc_2:
            "Built with Next.js on the frontend and ASP.NET Core on the backend using Entity Framework Core, SQLite and deployed on Linux with Nginx, PM2 and Systemd.",

        project_treinemais_title:
            "TreineMais — Gym Training Management System",

        project_treinemais_desc:
            "Web platform for gyms and personal trainers to manage students and personalized workout plans with ASP.NET Identity authentication.",

        project_agendapro_title:
            "AgendaPro — Scheduling Management System",

        project_agendapro_desc_1:
            "Scheduling platform for managing customers, professionals, services and appointments.",

        project_agendapro_desc_2:
            "Includes authentication, dashboards, scheduling conflict detection and management reports.",

        project_stockchef_title:
            "StockChef Platform — Restaurant Management System",

        project_stockchef_desc_1:
            "Restaurant inventory management platform built using Clean Architecture, REST APIs and layered architecture.",

        project_stockchef_desc_2:
            "Frontend developed with Angular and backend built with ASP.NET Core following SOLID, Clean Architecture and Domain-Driven Design.",

        project_btn_system:
            "View System",

        project_btn_github:
            "GitHub",

        // =====================================
        // CONTACT
        // =====================================

        contact_hero_title:
            "Contact",

        contact_hero_subtitle:
            "Let's talk about opportunities, projects or new ideas.",

        contact_label_name:
            "Name",

        contact_placeholder_name:
            "Your name",

        contact_label_email:
            "Email",

        contact_placeholder_email:
            "Your best email",

        contact_label_message:
            "Message",

        contact_placeholder_message:
            "Type your message",

        contact_btn_submit:
            "Send Message",

        contact_btn_sending:
            "Sending...",

        contact_email_subject:
            "New Portfolio Contact",

        contact_error_default:
            "Your message could not be sent. Please try again.",

        contact_error_connection:
            "Connection failed. Please check your internet connection and try again.",

        // =====================================
        // ERROR
        // =====================================

        error_title:
            "An error has occurred",

        error_description:
            "Sorry, an error occurred while processing your request.",

        error_request_id:
            "Request ID:",

        error_back_home:
            "Back to Home"
    },

    es: {

        // =====================================
        // NAVBAR + FOOTER
        // =====================================

        menu_home: "Inicio",
        menu_about: "Sobre mí",
        menu_projects: "Proyectos",
        menu_contact: "Contacto",

        footer_role: "Desarrollador Full Stack",

        // =====================================
        // HOME
        // =====================================

        home_hero_badge: "Disponible para oportunidades",

        home_hero_name: "Luciano Silva Ferreira",

        home_hero_subtitle:
            "Desarrollador Full Stack con experiencia en .NET y tecnologías modernas de desarrollo web.",

        home_hero_description:
            "Construyendo sistemas completos, desde un backend estructurado hasta un frontend responsivo, con enfoque en rendimiento, escalabilidad y buenas prácticas de desarrollo.",

        home_btn_projects: "Ver Proyectos",

        home_btn_contact: "Contactar",

        home_stats_projects: "Proyectos",

        home_stats_technologies: "Tecnologías",

        home_stats_author: "Especialista en",

        home_stats_fullstack: "Full Stack",

        home_stats_fullstack_desc:
            "Desarrollo de aplicaciones modernas con enfoque en calidad, rendimiento y escalabilidad.",

        home_stack_title: "Tecnologías",

        home_stack_subtitle:
            "Tecnologías y herramientas utilizadas para desarrollar aplicaciones modernas, escalables y de alto rendimiento.",

        home_stack_dotnet_desc:
            "APIs REST y aplicaciones modernas.",

        home_stack_csharp_desc:
            "Desarrollo backend orientado a objetos.",

        home_stack_angular_desc:
            "Desarrollo de aplicaciones SPA.",

        home_stack_react_desc:
            "Interfaces modernas y reactivas.",

        home_stack_next_desc:
            "Frontend de alto rendimiento con SEO.",

        home_stack_typescript_desc:
            "Código robusto, seguro y escalable.",

        home_stack_sql_desc:
            "Base de datos relacional.",

        home_stack_docker_desc:
            "Contenedores, despliegue y entornos Linux.",

        home_projects_title:
            "Proyectos Destacados",

        home_projects_subtitle:
            "Proyectos desarrollados utilizando tecnologías modernas, Clean Architecture y soluciones enfocadas en el rendimiento.",

        home_project_devclub:
            "Plataforma Full Stack desarrollada con ASP.NET Core, Next.js, React y TypeScript.",

        home_project_treinemais:
            "Plataforma para gimnasios y entrenadores personales con gestión completa de alumnos y entrenamientos.",

        home_project_agendapro:
            "Sistema completo de gestión de citas en línea enfocado en la productividad.",

        home_project_stockchef:
            "Plataforma para la gestión de inventario, compras y producción de restaurantes.",

        home_project_button:
            "Más información",

        home_cta_title:
            "¿Construimos algo increíble juntos?",

        home_cta_description:
            "Estoy disponible para oportunidades como Desarrollador Full Stack, Backend .NET o Frontend, contribuyendo con soluciones modernas, escalables y de alta calidad.",

        // =====================================
        // SOBRE
        // =====================================

        about_hero_title:
            "Sobre mí",

        about_hero_subtitle:
            "Desarrollador Full Stack especializado en .NET con experiencia en el desarrollo de aplicaciones web completas.",

        about_btn_contact:
            "🚀 Hablemos",

        about_btn_projects:
            "Ver proyectos",

        about_name:
            "Luciano Silva Ferreira",

        about_role:
            "Desarrollador Full Stack (.NET)",

        about_text_2:
            "Tengo experiencia en el desarrollo de APIs REST, autenticación y autorización, modelado de bases de datos, Entity Framework Core, SQL Server y arquitectura por capas.",

        about_text_3:
            "También desarrollo interfaces modernas utilizando Bootstrap, JavaScript, TypeScript, Angular, React y Next.js, buscando siempre ofrecer una excelente experiencia al usuario.",

        about_text_4:
            "Me mantengo en constante evolución profesional, estudiando nuevas tecnologías y aplicando buenas prácticas para crear soluciones robustas, escalables y de alta calidad.",

        about_text_5:
            "Busco oportunidades donde pueda aportar soluciones modernas, código limpio y una arquitectura bien estructurada.",

        about_text_6:
            "Creo que el aprendizaje continuo y la colaboración son fundamentales para desarrollar software de calidad.",

        about_skills_title:
            "Principales Competencias",

        about_backend_title:
            "Backend",

        about_backend_1: ".NET",
        about_backend_2: "ASP.NET Core",
        about_backend_3: "C#",
        about_backend_4: "Entity Framework Core",
        about_backend_5: "SQL Server",
        about_backend_6: "APIs REST",

        about_frontend_title:
            "Frontend",

        about_frontend_1: "HTML5",
        about_frontend_2: "CSS3",
        about_frontend_3: "Bootstrap",
        about_frontend_4: "JavaScript",
        about_frontend_5: "TypeScript",
        about_frontend_6: "Angular • React • Next.js",

        about_devops_title:
            "DevOps y Herramientas",

        about_devops_1: "Git",
        about_devops_2: "GitHub",
        about_devops_3: "Docker",
        about_devops_4: "Linux",
        about_devops_5: "Nginx",
        about_devops_6: "Clean Architecture",

        // =====================================
        // PROYECTOS
        // =====================================

        projects_hero_title:
            "Proyectos",

        projects_hero_subtitle:
            "Aplicaciones Full Stack desarrolladas para resolver problemas reales utilizando tecnologías modernas, arquitectura escalable y buenas prácticas de ingeniería de software.",

        projects_featured_title:
            "🚀 Proyectos Destacados",

        project_status_published:
            "Publicado",

        project_status_done:
            "MVP Finalizado",

        project_status_development:
            "En Desarrollo",

        project_devclub_title:
            "DevClub Next Level — Plataforma Full Stack Educativa",

        project_devclub_desc_1:
            "Plataforma Full Stack desarrollada para el concurso de Desarrollador Full Stack de DevClub con autenticación, área del alumno, catálogo de cursos, integración con API REST e interfaz completamente responsiva.",

        project_devclub_desc_2:
            "Desarrollada con Next.js en el frontend y ASP.NET Core en el backend utilizando Entity Framework Core, SQLite y desplegada en Linux con Nginx, PM2 y Systemd.",

        project_treinemais_title:
            "TreineMais — Sistema de Entrenamientos para Gimnasios",

        project_treinemais_desc:
            "Plataforma web para gimnasios y entrenadores personales con gestión de alumnos y entrenamientos personalizados mediante autenticación con ASP.NET Identity.",

        project_agendapro_title:
            "AgendaPro — Sistema de Gestión de Citas",

        project_agendapro_desc_1:
            "Plataforma para gestionar clientes, profesionales, servicios y citas.",

        project_agendapro_desc_2:
            "Incluye autenticación, panel de indicadores, control de conflictos de horarios e informes administrativos.",

        project_stockchef_title:
            "StockChef Platform — Sistema de Gestión para Restaurantes",

        project_stockchef_desc_1:
            "Plataforma para la gestión de inventario desarrollada con Clean Architecture, APIs REST y arquitectura por capas.",

        project_stockchef_desc_2:
            "Frontend desarrollado con Angular y backend en ASP.NET Core siguiendo SOLID, Domain-Driven Design y Clean Architecture.",

        project_btn_system:
            "Ver Sistema",

        project_btn_github:
            "GitHub",

        // =====================================
        // CONTACTO
        // =====================================

        contact_hero_title:
            "Contacto",

        contact_hero_subtitle:
            "Hablemos sobre oportunidades, proyectos o nuevas ideas.",

        contact_label_name:
            "Nombre",

        contact_placeholder_name:
            "Tu nombre",

        contact_label_email:
            "Correo electrónico",

        contact_placeholder_email:
            "Tu mejor correo electrónico",

        contact_label_message:
            "Mensaje",

        contact_placeholder_message:
            "Escribe tu mensaje",

        contact_btn_submit:
            "Enviar Mensaje",

        contact_btn_sending:
            "Enviando...",

        contact_email_subject:
            "Nuevo contacto del portafolio",

        contact_error_default:
            "No fue posible enviar tu mensaje. Inténtalo nuevamente.",

        contact_error_connection:
            "Error de conexión. Verifica tu internet e inténtalo nuevamente.",

        // =====================================
        // ERROR
        // =====================================

        error_title:
            "Ha ocurrido un error",

        error_description:
            "Lo sentimos. Se produjo un error al procesar tu solicitud.",

        error_request_id:
            "ID de la solicitud:",

        error_back_home:
            "Volver al inicio"

    }

};

// ============================================
// LANGUAGE FUNCTIONS
// ============================================

function applyTranslations(language) {

    const translations = window.translations[language];

    if (!translations) {
        console.warn(`Idioma '${language}' não encontrado.`);
        return;
    }

    // -----------------------------
    // TEXTOS
    // -----------------------------

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[key] !== undefined) {
            element.textContent = translations[key];
        }

    });

    // -----------------------------
    // PLACEHOLDERS
    // -----------------------------

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[key] !== undefined) {
            element.placeholder = translations[key];
        }

    });

    // -----------------------------
    // TITLE
    // -----------------------------

    document.querySelectorAll("[data-i18n-title]").forEach(element => {

        const key = element.dataset.i18nTitle;

        if (translations[key] !== undefined) {
            element.title = translations[key];
        }

    });

    // -----------------------------
    // ARIA LABEL
    // -----------------------------

    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {

        const key = element.dataset.i18nAriaLabel;

        if (translations[key] !== undefined) {
            element.setAttribute("aria-label", translations[key]);
        }

    });

}

// ============================================
// BOTÕES DE IDIOMA
// ============================================

function updateLanguageButtons(language) {

    document.querySelectorAll(".language-switcher button")
        .forEach(button => {

            button.classList.remove("active");

            const onclick = button.getAttribute("onclick");

            if (onclick && onclick.includes(`'${language}'`)) {
                button.classList.add("active");
            }

        });

}

// ============================================
// ALTERAR IDIOMA
// ============================================

function setLanguage(language) {

    if (!window.translations[language]) {
        console.warn(`Idioma '${language}' inexistente.`);
        return;
    }

    applyTranslations(language);

    updateLanguageButtons(language);

    localStorage.setItem("language", language);

}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("language") || "pt";

    setLanguage(savedLanguage);

});

// ============================================
// UI HELPERS
// ============================================

const App = {

    init() {

        this.initNavbar();
        this.initSmoothScroll();
        this.initBackToTop();
        this.initLanguageButtons();

    },

    // ============================================
    // NAVBAR
    // ============================================

    initNavbar() {

        const navbar = document.querySelector(".navbar");

        if (!navbar)
            return;

        const updateNavbar = () => {

            if (window.scrollY > 50) {

                navbar.classList.add("navbar-scrolled");

            } else {

                navbar.classList.remove("navbar-scrolled");

            }

        };

        updateNavbar();

        window.addEventListener("scroll", updateNavbar);

    },

    // ============================================
    // SMOOTH SCROLL
    // ============================================

    initSmoothScroll() {

        document
            .querySelectorAll('a[href^="#"]')
            .forEach(anchor => {

                anchor.addEventListener("click", function (e) {

                    const target =
                        document.querySelector(this.getAttribute("href"));

                    if (!target)
                        return;

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",
                        block: "start"

                    });

                });

            });

    },

    // ============================================
    // BACK TO TOP
    // ============================================

    initBackToTop() {

        const button =
            document.getElementById("backToTop");

        if (!button)
            return;

        window.addEventListener("scroll", () => {

            button.classList.toggle(

                "show",

                window.scrollY > 300

            );

        });

        button.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    },

    // ============================================
    // BOTÕES DE IDIOMA
    // ============================================

    initLanguageButtons() {

        document
            .querySelectorAll("[data-language]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    setLanguage(

                        button.dataset.language

                    );

                });

            });

    }

};

// ============================================
// START
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

// ============================================
// CONTACT FORM
// ============================================

const ContactForm = {

    form: null,
    submitButton: null,

    init() {

        this.form = document.getElementById("contactForm");

        if (!this.form)
            return;

        this.submitButton =
            this.form.querySelector("button[type='submit']");

        this.form.addEventListener(
            "submit",
            this.handleSubmit.bind(this)
        );

    },

    async handleSubmit(event) {

        event.preventDefault();

        if (!this.validate())
            return;

        this.setLoading(true);

        try {

            const formData = new FormData(this.form);

            const response = await fetch(

                this.form.action,

                {
                    method: "POST",
                    body: formData
                }

            );

            if (response.ok) {

                window.location.href =
                    "/ContatoSucesso";

                return;

            }

            this.showError("contact_error_default");

        }
        catch {

            this.showError("contact_error_connection");

        }
        finally {

            this.setLoading(false);

        }

    },

    validate() {

        const name =
            this.form.querySelector("[name='Nome']");

        const email =
            this.form.querySelector("[name='Email']");

        const message =
            this.form.querySelector("[name='Mensagem']");

        if (!name?.value.trim()) {

            name.focus();

            return false;

        }

        if (!email?.value.trim()) {

            email.focus();

            return false;

        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value)) {

            email.focus();

            return false;

        }

        if (!message?.value.trim()) {

            message.focus();

            return false;

        }

        return true;

    },

    setLoading(isLoading) {

        if (!this.submitButton)
            return;

        if (isLoading) {

            this.submitButton.disabled = true;

            const lang =
                localStorage.getItem("language") || "pt";

            this.submitButton.textContent =
                window.translations[lang].contact_btn_sending;

        }
        else {

            this.submitButton.disabled = false;

            const lang =
                localStorage.getItem("language") || "pt";

            this.submitButton.textContent =
                window.translations[lang].contact_btn_submit;

        }

    },

    showError(key) {

        const lang =
            localStorage.getItem("language") || "pt";

        alert(

            window.translations[lang][key]

        );

    }

};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    ContactForm.init();

});