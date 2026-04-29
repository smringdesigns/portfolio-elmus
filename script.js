// 1. Base de Datos de Proyectos (ESTRUCTURA UNIFICADA)
// Ahora todos los proyectos tienen "link.repo" y "link.demo".
const projects = [
        {
        title: 'Talento.Dev – Portal de Empleo Tech',
        description: 'Plataforma web tipo portal de empleo enfocada en el sector tecnológico. Permite búsqueda por tecnologías, filtros por modalidad y nivel, y visualización de ofertas con una interfaz moderna.',
        img: './images/proyecto_talentodev.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
        link: { repo: 'https://github.com/smringdesigns/Talento.Dev.git', demo: '#' }
    },
    {
        title: 'HorseTrust – Marketplace de Caballos',
        description: 'Marketplace desarrollado con Next.js y Spring Boot que permite la compra y venta de caballos con autenticación JWT, gestión de publicaciones y enfoque en transparencia.',
        img: './images/Proyecto_HorseTrust.png',
        tags: ['Next.js', 'Spring Boot', 'MySQL', 'JWT', 'Tailwind'],
        link: { repo: 'https://github.com/smringdesigns/HorseTrust.git', demo: '#' }
    },
    {
        title: 'Sistema de Gestión Empresarial “CONTROLA”',
        description: 'Desarrollé una plataforma administrativa completa (SPA) utilizando React. Cuenta con un módulo de autenticación seguro, validación de usuarios en tiempo real y una interfaz moderna.',
        tags: ['React', 'Dashboard', 'Autenticación', 'CSS3'],
        img: './images/Proyecto_Controla.png',
        link: { repo: 'https://github.com/smringdesigns/controla-web.git', demo: 'https://controla-web.vercel.app/' } 
    },
    {
        title: 'Plataforma Financiera Digital "MultiPagos S&S"',
        description: 'Diseñé una interfaz moderna para una plataforma de servicios financieros digitalizados. El enfoque principal fue mejorar la experiencia del usuario con un diseño limpio.',
        tags: ['Fintech', 'Banca Digital', 'UI/UX'],
        img: './images/Proyecto_1.png',
        link: { repo: 'https://github.com/smringdesigns/Grupo_Multipagos.git', demo: 'https://smringdesigns.github.io/Grupo_Multipagos/' }
    },
    {
        title: 'JorSti Tech v2: Auth & UI Futurista',
        description: 'La evolución visual de la marca. Diseño y desarrollo de una interfaz de autenticación (Login) inmersiva con estética "Sci-Fi" y seguridad avanzada.',
        tags: ['UI/UX', 'Sci-Fi', 'Frontend', 'Seguridad'],
        img: './images/Proyecto_jorsti_v2.png',
        link: { repo: 'https://github.com/smringdesigns/Jorsti-Tech-v2-Portal-Coporativo.git', demo: 'https://jorsti-tech-web2.vercel.app/' }
    },
    {
        title: 'JorSti Tech v1: Portal Corporativo',
        description: 'La primera iteración de la identidad digital de JorStiTech. Plataforma institucional robusta con arquitectura limpia y "Dark Mode" nativo.',
        tags: ['Web Corporativa', 'Dark Mode', 'Servicios'],
        img: './images/Proyecto_jorsti_v1.png',
        link: { repo: 'https://github.com/smringdesigns/jorsti-tech.git', demo: 'https://jorsti-tech.vercel.app/' }
    },
    {
        title: 'Landing Page Accesorios PC',
        description: 'Diseñé una landing page moderna y adaptable para una tienda de accesorios tecnológicos. Diseño responsive y paleta llamativa para destacar los productos.',
        tags: ['E-commerce', 'Landing Page', 'Responsive'],
        img: './images/Proyecto_5.png',
        link: { repo: 'https://github.com/smringdesigns/Proyecto1', demo: 'https://proyecto1-two-teal.vercel.app/' }
    },
    {
        title: 'Portafolio Front-End Profesional',
        description: 'Sitio web personal para mostrar mis habilidades como desarrolladora front-end. Creado con React, HTML y CSS, con un enfoque visual moderno.',
        tags: ['React', 'Branding', 'Front-End'],
        img: './images/Proyecto_6.png',
        link: { repo: 'https://github.com/smringdesigns/portafolio-Ana', demo: 'https://portafolio-ana.vercel.app/' }
    },
    {
        title: 'Juego “Número Secreto”',
        description: 'Juego web interactivo donde el usuario debe adivinar un número. Aplicando principios de gamificación y lógica con IA.',
        tags: ['JavaScript', 'Gamificación', 'IA'],
        img: './images/Proyecto_2.png',
        link: { repo: 'https://github.com/smringdesigns/juego-Secreto', demo: 'https://juego-secreto-sigma-ebon.vercel.app/' }
    },
    {
        title: 'App Web “Amigo Secreto”',
        description: 'Aplicación sencilla y dinámica para realizar sorteos entre amigos. Diseño amigable y lógica segura.',
        tags: ['JavaScript', 'Herramienta Web', 'Lógica'],
        img: './images/Proyecto_4.png',
        link: { repo: 'https://github.com/smringdesigns/juego-Secreto', demo: 'https://amigo-secreto-alpha-sand.vercel.app/' 
        }
    }
];

// 2. Base de Datos de FAQ
const faqs = [
    {
        q: "¿Qué estudios tienes?",
        a: "Estudié Ingeniería de Sistemas de la Fundación Universidad del Área Andina."
    },
    {
        q: "¿Qué servicios ofreces?",
        a: "Ofrezco servicios de desarrollo web, desarrollo de aplicaciones móviles, consultoría tecnológica y mantenimiento de sistemas."
    },
    {
        q: "¿Cuál es tu experiencia en desarrollo web?",
        a: "Tengo más de 5 años de experiencia en desarrollo web, trabajando con tecnologías como HTML, CSS, JavaScript, React y Node.js."
    },
    {
        q: "¿Ofreces servicios de consultoría tecnológica?",
        a: "Sí, ofrezco servicios de consultoría tecnológica para ayudar a las empresas a optimizar sus procesos y adoptar nuevas tecnologías."
    }
];

// 3. Renderizar Proyectos (OPTIMIZADO)
const projectContainer = document.getElementById('projects-grid');
const fallback = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800";

projectContainer.innerHTML = projects.map(p => `
    <article class="group bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
        
        <!-- Imagen -->
        <div class="h-48 overflow-hidden relative shrink-0">
            <div class="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img src="${p.img}" onerror="this.src='${fallback}'" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        </div>

        <!-- Contenido -->
        <div class="p-6 flex flex-col flex-grow">
            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">${p.title}</h4>
            <p class="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">${p.description}</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
                ${p.tags.map(tag => `<span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/10 rounded-md border border-blue-500/20">${tag}</span>`).join('')}
            </div>

            <!-- Botones de Acción (NUEVO) -->
            <div class="flex gap-3 pt-4 border-t border-slate-800 mt-auto">
                <a href="${p.link.repo}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors border border-slate-700">
                    Código
                </a>
                <a href="${p.link.demo}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-900/20">
                    Demo
                </a>
            </div>
        </div>
    </article>
`).join('');

// 4. Renderizar FAQ
const faqContainer = document.getElementById('faq-grid');
faqContainer.innerHTML = faqs.map(item => `
    <details class="group bg-[#0F172A] border border-slate-800 rounded-xl open:border-blue-500/30 overflow-hidden transition-all duration-300">
        <summary class="flex cursor-pointer items-center justify-between p-5 font-bold text-white hover:bg-slate-800/50 transition-colors select-none">
            <span>${item.q}</span>
            <span class="material-symbols-outlined text-blue-500 transition-transform group-open:rotate-180">expand_more</span>
        </summary>
        <div class="px-5 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-transparent group-open:border-slate-800/50 group-open:pt-4">
            ${item.a}
        </div>
    </details>
`).join('');

// 5. Lógica del Modal
const modal = document.getElementById('contact-modal');
const modalPanel = document.getElementById('modal-panel');
const backdrop = document.getElementById('modal-backdrop');

window.toggleModal = function(show) {
    if (show) {
        modal.classList.remove('hidden');
        // Pequeño delay para permitir que el navegador renderice antes de la animación
        setTimeout(() => {
            modalPanel.classList.remove('opacity-0', 'scale-95');
            modalPanel.classList.add('opacity-100', 'scale-100');
        }, 10);
    } else {
        modalPanel.classList.remove('opacity-100', 'scale-100');
        modalPanel.classList.add('opacity-0', 'scale-95');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

// Cerrar al hacer clic fuera
if(backdrop) {
    backdrop.addEventListener('click', () => toggleModal(false));
}