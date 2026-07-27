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

        // ==========================
        // NAVBAR + FOOTER
        // ==========================

        menu_home: "Home",
        menu_about: "Sobre",
        menu_projects: "Projetos",
        menu_contact: "Contato",

        footer_role: "Desenvolvedor Full Stack",

        // ==========================
        // HOME
        // ==========================

        home_hero_badge: "Disponível para oportunidades",

        home_hero_name: "Luciano Silva Ferreira",

        home_hero_subtitle: "Desenvolvedor Full Stack com experiência em .NET e tecnologias modernas de desenvolvimento web.",

        home_hero_description: "Construindo sistemas completos — do backend estruturado ao frontend responsivo — com foco em performance, escalabilidade e boas práticas.",

        home_btn_projects: "Ver Projetos",

        home_btn_contact: "Entrar em contato",

        home_btn_github: "GitHub",

        home_btn_linkedin: "LinkedIn",

        home_stats_projects: "Projetos desenvolvidos",

        home_stats_technologies: "Tecnologias",

        home_stats_author: "Especialista em",

        home_stats_fullstack: "Full Stack",

        home_stats_fullstack_desc: "Desenvolvimento de aplicações modernas com foco em qualidade, desempenho e escalabilidade.",

        home_stack_title: "Tecnologias",

        home_stack_subtitle: "Tecnologias e ferramentas utilizadas no desenvolvimento de aplicações modernas, escaláveis e de alta performance.",

        home_stack_dotnet_desc: "APIs REST e aplicações modernas.",

        home_stack_csharp_desc: "Backend orientado a objetos.",

        home_stack_angular_desc: "Desenvolvimento de SPAs modernas.",

        home_stack_react_desc: "Interfaces modernas e reativas.",

        home_stack_next_desc: "Frontend com alta performance e SEO.",

        home_stack_typescript_desc: "Código robusto, seguro e escalável.",

        home_stack_sql_desc: "Banco de dados relacional.",

        home_stack_docker_desc: "Containers, deploy e ambientes Linux.",

        home_projects_title: "Principais Projetos",

        home_projects_subtitle: "Alguns dos projetos desenvolvidos utilizando tecnologias modernas, arquitetura limpa e foco em performance.",

        home_project_devclub: "Plataforma Full Stack desenvolvida com ASP.NET Core, Next.js, React e TypeScript.",

        home_project_treinemais: "Plataforma para academias e personal trainers com gerenciamento completo de alunos e treinos.",

        home_project_agendapro: "Sistema completo de agendamento online com foco em praticidade e produtividade.",

        home_project_stockchef: "Plataforma para gestão de estoque, compras e produção de restaurantes.",

        home_project_button: "Saiba mais",

        home_cta_title: "Vamos construir algo incrível juntos?",

        home_cta_description: "Estou disponível para oportunidades como Desenvolvedor Full Stack, Backend .NET ou Frontend, contribuindo com soluções modernas, escaláveis e de alta qualidade.",

        // ==========================
        // HOME (LEGADO)
        // Será removido na limpeza final
        // ==========================

        home_stack_csharp: "Programação orientada a objetos",
        home_stack_aspnet: "Aplicações web e APIs REST",
        home_stack_ef: "ORM e acesso a dados",
        home_stack_sqlserver: "Modelagem e consultas",
        home_stack_html: "Estruturação semântica",
        home_stack_css: "Layouts responsivos",
        home_stack_bootstrap: "UI moderna e responsiva",
        home_stack_javascript: "Interatividade e dinamismo",

        // ==========================
        // SOBRE
        // ==========================

        about_hero_title: "Sobre Mim",

        about_hero_subtitle: "Desenvolvedor Full Stack com foco em .NET e experiência em construção de aplicações web completas, do backend estruturado ao frontend responsivo.",

        about_btn_contact: "🚀 Vamos conversar",

        about_btn_projects: "Ver projetos",

        about_role: "Desenvolvedor Full Stack (foco em .NET)",

        about_text_1: "Desenvolvedor Full Stack com experiência em aplicações web e APIs, atuando do design de endpoints e regras de negócio até a construção de interfaces responsivas. Forte base em .NET (C#, ASP.NET Core), com facilidade para adaptar e trabalhar com diferentes stacks conforme o projeto.",

        about_text_2: "Trabalho com APIs REST, autenticação/autorização, modelagem de banco de dados, boas práticas de arquitetura, organização de código e versionamento com Git.",

        about_text_3: "Busco oportunidades como Desenvolvedor Full Stack onde eu possa contribuir com soluções escaláveis, código bem estruturado e evolução contínua — em .NET ou outras stacks, conforme a necessidade do time.",

        about_name: "Luciano Silva Ferreira",

        about_text_4: "Tenho experiência no desenvolvimento de APIs REST, autenticação e autorização, modelagem de banco de dados, Entity Framework Core, SQL Server e arquitetura em camadas.",

        about_text_5: "Também atuo no desenvolvimento de interfaces modernas utilizando Bootstrap, JavaScript, TypeScript, Angular, React e Next.js, buscando sempre uma ótima experiência para o usuário.",

        about_text_6: "Estou em constante evolução profissional, estudando novas tecnologias e aplicando boas práticas para desenvolver soluções robustas, escaláveis e de alta qualidade.",

        about_backend_title: "Backend",

        about_backend_1: ".NET",
        about_backend_2: "ASP.NET Core",
        about_backend_3: "C#",
        about_backend_4: "Entity Framework Core",
        about_backend_5: "SQL Server",
        about_backend_6: "REST APIs",

        about_frontend_title: "Frontend",

        about_frontend_1: "HTML5",
        about_frontend_2: "CSS3",
        about_frontend_3: "Bootstrap 5",
        about_frontend_4: "JavaScript",
        about_frontend_5: "TypeScript",
        about_frontend_6: "Angular / React / Next.js",

        about_devops_title: "DevOps e Ferramentas",

        about_devops_1: "Git e GitHub",
        about_devops_2: "Docker",
        about_devops_3: "Linux",
        about_devops_4: "Nginx",
        about_devops_5: "Clean Architecture",
        about_devops_6: "SOLID",

        about_name: "Luciano Silva Ferreira",

        about_text_4: "I have experience developing REST APIs, authentication and authorization, database modeling, Entity Framework Core, SQL Server and layered architecture.",

        about_text_5: "I also build modern user interfaces using Bootstrap, JavaScript, TypeScript, Angular, React and Next.js, always focusing on delivering an excellent user experience.",

        about_text_6: "I continuously improve my skills by studying new technologies and applying best practices to develop robust, scalable and high-quality solutions.",

        about_backend_title: "Backend",

        about_backend_1: ".NET",
        about_backend_2: "ASP.NET Core",
        about_backend_3: "C#",
        about_backend_4: "Entity Framework Core",
        about_backend_5: "SQL Server",
        about_backend_6: "REST APIs",

        about_frontend_title: "Frontend",

        about_frontend_1: "HTML5",
        about_frontend_2: "CSS3",
        about_frontend_3: "Bootstrap 5",
        about_frontend_4: "JavaScript",
        about_frontend_5: "TypeScript",
        about_frontend_6: "Angular / React / Next.js",

        about_devops_title: "DevOps & Tools",

        about_devops_1: "Git & GitHub",
        about_devops_2: "Docker",
        about_devops_3: "Linux",
        about_devops_4: "Nginx",
        about_devops_5: "Clean Architecture",
        about_devops_6: "SOLID",

        about_name: "Luciano Silva Ferreira",

        about_text_4: "Tengo experiencia desarrollando APIs REST, autenticación y autorización, modelado de bases de datos, Entity Framework Core, SQL Server y arquitectura por capas.",

        about_text_5: "También desarrollo interfaces modernas utilizando Bootstrap, JavaScript, TypeScript, Angular, React y Next.js, siempre buscando ofrecer una excelente experiencia al usuario.",

        about_text_6: "Me encuentro en constante evolución profesional, estudiando nuevas tecnologías y aplicando buenas prácticas para desarrollar soluciones robustas, escalables y de alta calidad.",

        about_backend_title: "Backend",

        about_backend_1: ".NET",
        about_backend_2: "ASP.NET Core",
        about_backend_3: "C#",
        about_backend_4: "Entity Framework Core",
        about_backend_5: "SQL Server",
        about_backend_6: "APIs REST",

        about_frontend_title: "Frontend",

        about_frontend_1: "HTML5",
        about_frontend_2: "CSS3",
        about_frontend_3: "Bootstrap 5",
        about_frontend_4: "JavaScript",
        about_frontend_5: "TypeScript",
        about_frontend_6: "Angular / React / Next.js",

        about_devops_title: "DevOps y Herramientas",

        about_devops_1: "Git y GitHub",
        about_devops_2: "Docker",
        about_devops_3: "Linux",
        about_devops_4: "Nginx",
        about_devops_5: "Clean Architecture",
        about_devops_6: "SOLID",

        about_skills_title: "Principais Competências",

        about_skills_base: "Base principal",

        about_skills_front: "Frontend e fundamentos",

        about_skills_extra: "Conhecimentos adicionais",

        // ==========================
        // PROJETOS
        // ==========================

        projects_hero_title: "Projetos",

        projects_hero_subtitle: "Aplicações Full Stack desenvolvidas para resolver problemas reais, utilizando tecnologias modernas, arquitetura escalável e boas práticas de desenvolvimento.",

        projects_featured_title: "🚀 Projetos em Destaque",

        projects_other_title: "💻 Outros Projetos",

        project_status_done: "MVP concluído",

        project_status_published: "Publicado",

        project_status_development: "Em desenvolvimento",

        project_treinemais_title: "TreineMais — Sistema de Treinos para Academias",

        project_treinemais_desc: "Sistema web para academias e personal trainers criarem treinos personalizados, gerenciarem alunos e acompanharem a evolução dos exercícios. Possui autenticação com ASP.NET Identity e controle de acesso por perfil.",

        project_agendapro_title: "AgendaPro – Sistema de Gestão de Agendamentos",

        project_agendapro_desc_1: "Sistema web para gerenciamento de agendamentos de serviços, com controle de clientes, profissionais, serviços, horários e status de atendimento.",

        project_agendapro_desc_2: "Possui autenticação com perfis de acesso, dashboard com indicadores do dia, controle de conflito de horários e relatórios gerenciais por período.",

        project_stockchef_title: "StockChef Platform — Sistema de Gestão para Restaurantes",

        project_stockchef_desc_1: "Plataforma Full Stack para gerenciamento de estoque de restaurantes, desenvolvida com arquitetura limpa, separação em camadas e APIs REST. O projeto contempla controle de produtos, categorias, movimentações, fornecedores e gestão operacional.",

        project_stockchef_desc_2: "O frontend está sendo desenvolvido em Angular e o backend em ASP.NET Core, seguindo princípios de Clean Architecture, SOLID e Domain-Driven Design.",

        project_devclub_title: "DevClub Next Level — Plataforma Full Stack de Ensino",

        project_devclub_desc_1: "Plataforma Full Stack desenvolvida para o concurso de Desenvolvedor Full Stack da DevClub. Possui autenticação de usuários, área do aluno, catálogo de cursos, páginas institucionais, formulário de contato integrado com API REST e interface totalmente responsiva.",

        project_devclub_desc_2: "Desenvolvido com Next.js no frontend e ASP.NET Core no backend, utilizando Entity Framework Core, SQLite e deploy em Linux com Nginx, PM2 e Systemd",

        project_btn_system: "Ver Sistema",

        project_btn_github: "GitHub",

        projects_github_title: "Repositórios no GitHub",

        projects_github_desc: "Aplicações web, APIs REST e projetos práticos desenvolvidos com foco em aprendizado contínuo e boas práticas.",

        projects_github_button: "Ver no GitHub",

        // ==========================
        // CONTATO
        // ==========================

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

        // ==========================
        // NAVBAR + FOOTER
        // ==========================

        menu_home: "Home",
        menu_about: "About",
        menu_projects: "Projects",
        menu_contact: "Contact",

        footer_role: "Full Stack Developer",

        // ==========================
        // HOME
        // ==========================

        home_hero_badge: "Available for opportunities",

        home_hero_name: "Luciano Silva Ferreira",

        home_hero_subtitle: "Full Stack Developer with experience in .NET and modern web development technologies.",

        home_hero_description: "Building complete systems — from structured backend to responsive frontend — focusing on performance, scalability and best development practices.",

        home_btn_projects: "View Projects",

        home_btn_contact: "Get in Touch",

        home_btn_github: "GitHub",

        home_btn_linkedin: "LinkedIn",

        home_stats_projects: "Completed Projects",

        home_stats_technologies: "Technologies",

        home_stats_author: "Specialized in",

        home_stats_fullstack: "Full Stack",

        home_stats_fullstack_desc: "Development of modern applications focused on quality, performance and scalability.",

        home_stack_title: "Technologies",

        home_stack_subtitle: "Technologies and tools used to build modern, scalable and high-performance applications.",

        home_stack_dotnet_desc: "REST APIs and modern applications.",

        home_stack_csharp_desc: "Object-oriented backend development.",

        home_stack_angular_desc: "Modern SPA development.",

        home_stack_react_desc: "Modern and reactive user interfaces.",

        home_stack_next_desc: "High-performance frontend with SEO.",

        home_stack_typescript_desc: "Robust, safe and scalable code.",

        home_stack_sql_desc: "Relational database.",

        home_stack_docker_desc: "Containers, deployment and Linux environments.",

        home_projects_title: "Featured Projects",

        home_projects_subtitle: "Some of the projects developed using modern technologies, clean architecture and a strong focus on performance.",

        home_project_devclub: "Full Stack platform developed with ASP.NET Core, Next.js, React and TypeScript.",

        home_project_treinemais: "Platform for gyms and personal trainers with complete student and workout management.",

        home_project_agendapro: "Complete online scheduling system focused on productivity and ease of use.",

        home_project_stockchef: "Platform for restaurant inventory, purchasing and production management.",

        home_project_button: "Learn More",

        home_cta_title: "Let's build something amazing together?",

        home_cta_description: "I'm available for opportunities as a Full Stack Developer, .NET Backend Developer or Frontend Developer, delivering modern, scalable and high-quality solutions.",

        // ==========================
        // HOME (LEGACY)
        // Will be removed after final review
        // ==========================

        home_stack_csharp: "Object-oriented programming",
        home_stack_aspnet: "Web applications and REST APIs",
        home_stack_ef: "ORM and data access",
        home_stack_sqlserver: "Database modeling and queries",
        home_stack_html: "Semantic structure",
        home_stack_css: "Responsive layouts",
        home_stack_bootstrap: "Modern, responsive UI",
        home_stack_javascript: "Interactivity and dynamism",

        // ==========================
        // ABOUT
        // ==========================

        about_hero_title: "About Me",

        about_hero_subtitle: "Full Stack Developer focused on .NET with experience building complete web applications, from structured backend to responsive frontend.",

        about_btn_contact: "🚀 Let's Talk",

        about_btn_projects: "View Projects",

        about_role: "Full Stack Developer (.NET focused)",

        about_text_1: "Full Stack Developer with experience in web applications and APIs, working from endpoint design and business rules to building responsive interfaces. Strong foundation in .NET (C#, ASP.NET Core), with the ability to adapt and work with different stacks depending on the project.",

        about_text_2: "I work with REST APIs, authentication/authorization, database modeling, architecture best practices, code organization and version control using Git.",

        about_text_3: "I am looking for opportunities as a Full Stack Developer where I can contribute with scalable solutions, well-structured code and continuous improvement — using .NET or other technologies according to the team's needs.",

        about_skills_title: "Key Skills",

        about_skills_base: "Core Stack",

        about_skills_front: "Frontend and Fundamentals",

        about_skills_extra: "Additional Knowledge",

        // ==========================
        // PROJECTS
        // ==========================

        projects_hero_title: "Projects",

        projects_hero_subtitle: "Full Stack applications built to solve real-world problems using modern technologies, scalable architecture and software engineering best practices.",

        projects_featured_title: "🚀 Featured Projects",

        projects_other_title: "💻 Other Projects",

        project_status_done: "MVP Completed",

        project_status_published: "Published",

        project_status_development: "In Development",

        project_treinemais_title: "TreineMais — Training Management System for Gyms",

        project_treinemais_desc: "Web system for gyms and personal trainers to create personalized workout plans, manage students and track exercise progress. Includes authentication with ASP.NET Identity and role-based access control.",

        project_agendapro_title: "AgendaPro – Scheduling Management System",

        project_agendapro_desc_1: "Web system for service appointment management, including clients, professionals, services, schedules and appointment status.",

        project_agendapro_desc_2: "Includes authentication with access roles, dashboard with daily indicators, scheduling conflict control and management reports.",

        project_stockchef_title: "StockChef Platform — Restaurant Management System",

        project_stockchef_desc_1: "Full Stack platform for restaurant inventory management built with Clean Architecture, layered architecture and REST APIs. Includes products, categories, stock movements, suppliers and operational management.",

        project_stockchef_desc_2: "The frontend is being developed with Angular and the backend with ASP.NET Core following Clean Architecture, SOLID and Domain-Driven Design principles.",

        project_devclub_title: "DevClub Next Level — Full Stack Learning Platform",

        project_devclub_desc_1: "Full Stack platform developed for the DevClub Full Stack Developer Contest featuring authentication, student area, course catalog, contact API and a fully responsive interface.",

        project_devclub_desc_2: "Built with Next.js on the frontend and ASP.NET Core on the backend using Entity Framework Core, SQLite and deployed on Linux with Nginx, PM2 and Systemd.",

        project_btn_system: "View System",

        project_btn_github: "GitHub",

        projects_github_title: "GitHub Repositories",

        projects_github_desc: "Web applications, REST APIs and practical projects developed with a focus on continuous learning and best practices.",

        projects_github_button: "View on GitHub",

        // ==========================
        // CONTACT
        // ==========================

        contact_hero_title: "Contact",

        contact_hero_subtitle: "Let's talk about opportunities and projects.",

        contact_label_name: "Name",

        contact_label_email: "Email",

        contact_label_message: "Message",

        contact_placeholder_name: "Your Name",

        contact_placeholder_email: "Your Best Email",

        contact_placeholder_message: "Type Your Message",

        contact_email_subject: "New Portfolio Contact",

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
        home_hero_badge: "Disponible para oportunidades",

        home_hero_name: "Luciano Silva Ferreira",
        home_hero_subtitle: "Desarrollador Full Stack con experiencia en .NET y tecnologías modernas de desarrollo web.",
        home_hero_description: "Construyendo sistemas completos — desde un backend estructurado hasta un frontend responsivo — con enfoque en rendimiento, escalabilidad y buenas prácticas.",

        home_btn_projects: "Ver Proyectos",
        home_btn_contact: "Ponerse en contacto",
        home_btn_github: "GitHub",
        home_btn_linkedin: "LinkedIn",

        home_stats_projects: "Proyectos desarrollados",
        home_stats_technologies: "Tecnologías",
        home_stats_author: "Especialista en",
        home_stats_fullstack: "Full Stack",
        home_stats_fullstack_desc: "Desarrollo de aplicaciones modernas con enfoque en calidad, rendimiento y escalabilidad.",

        home_stack_title: "Tecnologías",
        home_stack_subtitle: "Tecnologías y herramientas utilizadas para desarrollar aplicaciones modernas, escalables y de alto rendimiento.",

        home_stack_dotnet_desc: "APIs REST y aplicaciones modernas.",
        home_stack_csharp_desc: "Backend orientado a objetos.",
        home_stack_angular_desc: "Desarrollo de SPAs modernas.",
        home_stack_react_desc: "Interfaces modernas y reactivas.",
        home_stack_next_desc: "Frontend de alto rendimiento con SEO.",
        home_stack_typescript_desc: "Código robusto, seguro y escalable.",
        home_stack_sql_desc: "Base de datos relacional.",
        home_stack_docker_desc: "Contenedores, despliegue y entornos Linux.",

        home_projects_title: "Proyectos Destacados",
        home_projects_subtitle: "Algunos de los proyectos desarrollados utilizando tecnologías modernas, arquitectura limpia y enfoque en rendimiento.",

        home_project_devclub: "Plataforma Full Stack desarrollada con ASP.NET Core, Next.js, React y TypeScript.",
        home_project_treinemais: "Plataforma para gimnasios y entrenadores personales con gestión completa de alumnos y entrenamientos.",
        home_project_agendapro: "Sistema completo de gestión de citas en línea con enfoque en productividad.",
        home_project_stockchef: "Plataforma para la gestión de inventario, compras y producción de restaurantes.",

        home_project_button: "Más información",

        home_cta_title: "¿Construimos algo increíble juntos?",
        home_cta_description: "Estoy disponible para oportunidades como Desarrollador Full Stack, Backend .NET o Frontend, aportando soluciones modernas, escalables y de alta calidad.",

        // HOME (LEGADO)
        home_stack_csharp: "Programación orientada a objetos",
        home_stack_aspnet: "Aplicaciones web y APIs REST",
        home_stack_ef: "ORM y acceso a datos",
        home_stack_sqlserver: "Modelado y consultas",
        home_stack_html: "Estructura semántica",
        home_stack_css: "Diseños responsivos",
        home_stack_bootstrap: "Interfaz moderna y responsiva",
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
        projects_featured_title: "🚀 Proyectos Destacados",
        projects_other_title: "💻 Otros Proyectos",

        project_status_done: "MVP finalizado",
        project_status_published: "Publicado",
        project_status_development: "En desarrollo",

        project_treinemais_title: "TreineMais — Sistema de Entrenamientos para Gimnasios",
        project_treinemais_desc: "Sistema web para gimnasios y entrenadores personales que permite crear entrenamientos personalizados, gestionar alumnos y acompañar la evolución de los ejercicios. Incluye autenticación con ASP.NET Identity y control de acceso por perfil.",

        project_agendapro_title: "AgendaPro – Sistema de Gestión de Citas",
        project_agendapro_desc_1: "Sistema web para la gestión de citas de servicios, con control de clientes, profesionales, servicios, horarios y estado de atención.",
        project_agendapro_desc_2: "Incluye autenticación con perfiles de acceso, panel con indicadores del día, control de conflictos de horario e informes gerenciales por período.",

        project_stockchef_title: "StockChef Platform — Sistema de Gestión para Restaurantes",
        project_stockchef_desc_1: "Plataforma Full Stack para la gestión del inventario de restaurantes, desarrollada con Clean Architecture, arquitectura por capas y APIs REST.",
        project_stockchef_desc_2: "El frontend se desarrolla con Angular y el backend con ASP.NET Core siguiendo los principios de Clean Architecture, SOLID y Domain-Driven Design.",

        project_devclub_title: "DevClub Next Level — Plataforma Full Stack de Enseñanza",
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
        contact_error_connection: "Falló la conexión al enviar. Inténtalo nuevamente.",

        // ERROR
        error_title: "Ha ocurrido un error",
        error_description: "Lo sentimos. Se produjo un problema al procesar tu solicitud.",
        error_request_id: "ID de la solicitud:",
        error_back_home: "Volver al inicio"
    }
}