// ─── TRADUCCIONES ────────────────────────────
const translations = {
  es: {
    'nav-perfil': 'Perfil',
    'nav-proyectos': 'Proyectos',
    'nav-contacto': 'Contacto',
    'menu-aria': 'Abrir menú',
    'hero-label': 'Disponible · Mendoza, Argentina · 2026',
    'hero-cta-1': 'Ver proyectos',
    'hero-cta-2': 'Contactame',
    'hero-sub': 'Este es mi portafolio web, donde presento mis habilidades y cómo las he aplicado en proyectos desarrollados de forma autodidacta.',
    'sec-perfil': 'Perfil profesional',
    'tray-h2': 'Mi trayectoria laboral:',
    'tray-01-strong': 'Vendedor Comercial – Entre Dos (Sucursal Hotel Sheraton, Mendoza)',
    'tray-01-p': '2025 – Principios de 2026. Me desempeñé como vendedor comercial, brindando atención personalizada a clientes nacionales e internacionales. Utilicé mis conocimientos de idiomas para mejorar la comunicación con turistas extranjeros e implementé estrategias comerciales tanto en el punto de venta como en canales digitales, contribuyendo al incremento de las ventas y a una mejor experiencia del cliente.',
    'tray-02-strong': 'Instituto San Vicente — Plataforma web institucional',
    'tray-02-p': 'Desarrollo completo de una plataforma web institucional multipage para un colegio privado argentino.',
    'tray-03-strong': 'GoRugby',
    'tray-03-p': 'Plataforma comunitaria full-stack para fanáticos del rugby con partidos en vivo, predicciones, rankings y gestión de clubes.',
    'tray-04-strong': 'POS - Fiambrería Duca — App de escritorio para consulta de precios',
    'tray-04-p': 'Aplicación de escritorio desarrollada para una fiambrería local, que permite consultar precios en tiempo real mediante escaneo de código de barras. El negocio puede gestionar su catálogo completo de productos desde la misma herramienta, con sincronización automática a la nube.',
    'bio': 'Mi visión a futuro se ve ligada al cambio mental y la tecnología como herramienta revolucionaria. Me formé de manera autodidacta a través de cursos de desarrollo, creciendo al lanzarme al ámbito laboral con responsabilidad y cumplimiento de normas. Actualmente me encuentro en busca de una oportunidad laboral que me permita seguir creciendo como programador, afrontar nuevos desafíos y continuar desarrollando mis habilidades técnicas.',
    'meta-enfoque': 'Enfoque',
    'meta-enfoque-val': 'Tecnología & sistemas',
    'meta-perfil': 'Perfil',
    'meta-perfil-val': 'Autodidacta — cursos propios',
    'meta-formacion': 'Formación',
    'meta-idiomas': 'Idiomas',
    'lang-es': 'Español nativo',
    'lang-en': 'Inglés avanzado',
    'lang-sub-1': 'Conversacional · lenguaje negociador',
    'lang-sub-2': 'Modalidad presencial en instituciones como Amicana Mendoza y Camden Town San Luis.',
    'lang-note': 'Entusiasmo por el lenguaje que empezó desde temprana edad.',
    'lang-pt': 'Portugués',
    'lang-sub-pt': 'Recientemente conocedor y practicante por necesidad laboral.',
    'sec-proyectos': 'Proyectos',
    'proj-1-p': 'Desarrollo completo de una plataforma web institucional multipage para un colegio privado argentino, que incluye landing page, secciones académicas por nivel (Inicial, Primaria y Secundaria), área de inglés, galería de fotos, formulario de contacto y un portal deportivo (Club Sanvi) con múltiples disciplinas. El proyecto integra autenticación de usuarios, paneles de gestión diferenciados por rol (administradores, directivos y docentes), soporte multilenguaje (español/inglés) y optimización de assets para producción. Desplegado en Netlify con servidor propio en Node.js para endpoints sensibles.',
    'proj-2-p': 'Aplicación web full-stack orientada a la comunidad rugbística, con seguimiento de partidos en vivo, predicciones, rankings de torneos globales y gestión de clubes. Integra múltiples APIs deportivas externas con un proxy seguro del lado del servidor para proteger credenciales. Soporta temas claro/oscuro, diseño responsive y sistema de roles (usuario/admin).',
    'proj-3-p': 'Aplicación de escritorio desarrollada para una fiambrería local, que permite consultar precios en tiempo real mediante escaneo de código de barras. El negocio puede gestionar su catálogo completo de productos desde la misma herramienta, con sincronización automática a la nube.',
    'sec-stack': 'Stack técnico',
    'stack-backend': 'Backend & Datos',
    'blockquote': 'Soy un desarrollador autodidacta, proactivo y apasionado por la tecnología. Disfruto aprender de forma constante, aportar nuevas ideas y enfrentar desafíos que me permitan crear soluciones eficientes y seguir creciendo profesionalmente. Actualmente resido en Mendoza, Argentina.',
    'sec-contacto': 'Contacto',
    'contact-title': 'Hablemos!!!',
  },
  en: {
    'nav-perfil': 'Profile',
    'nav-proyectos': 'Projects',
    'nav-contacto': 'Contact',
    'menu-aria': 'Open menu',
    'hero-label': 'Available · Mendoza, Argentina · 2026',
    'hero-cta-1': 'View projects',
    'hero-cta-2': 'Contact me',
    'hero-sub': 'This is my web portfolio, where I present my skills and how I have applied them in self-taught projects.',
    'sec-perfil': 'Professional profile',
    'tray-h2': 'My work history:',
    'tray-01-strong': 'Commercial Sales Rep – Entre Dos (Hotel Sheraton Branch, Mendoza)',
    'tray-01-p': '2025 – Early 2026. I worked as a commercial sales representative, providing personalized service to national and international clients. I used my language skills to improve communication with foreign tourists and implemented commercial strategies both at the point of sale and through digital channels, contributing to increased sales and a better customer experience.',
    'tray-02-strong': 'Instituto San Vicente — Institutional web platform',
    'tray-02-p': 'Complete development of a multipage institutional web platform for a private Argentine school.',
    'tray-03-strong': 'GoRugby',
    'tray-03-p': 'Full-stack community platform for rugby fans with live matches, predictions, rankings and club management.',
    'tray-04-strong': 'POS - Fiambrería Duca — Desktop app for price lookup',
    'tray-04-p': 'Desktop application developed for a local deli, enabling real-time price lookup via barcode scanning. The business can manage its complete product catalog from the same tool, with automatic cloud synchronization.',
    'bio': 'My vision for the future is linked to a mindset shift and technology as a revolutionary tool. I trained myself through development courses, growing by entering the job market with responsibility and adherence to standards. I am currently looking for an opportunity that allows me to keep growing as a developer, tackle new challenges, and continue building my technical skills.',
    'meta-enfoque': 'Focus',
    'meta-enfoque-val': 'Technology & systems',
    'meta-perfil': 'Profile',
    'meta-perfil-val': 'Self-taught — own courses',
    'meta-formacion': 'Training',
    'meta-idiomas': 'Languages',
    'lang-es': 'Spanish (Native)',
    'lang-en': 'Advanced English',
    'lang-sub-1': 'Conversational · negotiation language',
    'lang-sub-2': 'In-person classes at institutions such as Amicana Mendoza and Camden Town San Luis.',
    'lang-note': 'A passion for language that started from an early age.',
    'lang-pt': 'Portuguese',
    'lang-sub-pt': 'Recently learned and practiced out of professional necessity.',
    'sec-proyectos': 'Projects',
    'proj-1-p': 'Complete development of a multipage institutional web platform for a private Argentine school, including a landing page, academic sections by level (Preschool, Primary and Secondary), an English area, photo gallery, contact form and a sports portal (Club Sanvi) with multiple disciplines. The project integrates user authentication, role-based management panels (administrators, principals and teachers), multilingual support (Spanish/English) and asset optimization for production. Deployed on Netlify with a custom Node.js server for sensitive endpoints.',
    'proj-2-p': 'Full-stack web application oriented to the rugby community, with live match tracking, predictions, global tournament rankings and club management. It integrates multiple external sports APIs with a secure server-side proxy to protect credentials. Supports light/dark themes, responsive design and a role system (user/admin).',
    'proj-3-p': 'Desktop application developed for a local deli, enabling real-time price lookup via barcode scanning. The business can manage its complete product catalog from the same tool, with automatic cloud synchronization.',
    'sec-stack': 'Technical Stack',
    'stack-backend': 'Backend & Data',
    'blockquote': 'I am a self-taught developer, proactive and passionate about technology. I enjoy continuous learning, bringing new ideas and facing challenges that allow me to create efficient solutions and keep growing professionally. I currently live in Mendoza, Argentina.',
    'sec-contacto': 'Contact',
    'contact-title': 'Hablemos!!!',
  },
  pt: {
    'nav-perfil': 'Perfil',
    'nav-proyectos': 'Projetos',
    'nav-contacto': 'Contato',
    'menu-aria': 'Abrir menu',
    'hero-label': 'Disponível · Mendoza, Argentina · 2026',
    'hero-cta-1': 'Ver projetos',
    'hero-cta-2': 'Contate-me',
    'hero-sub': 'Este é o meu portfólio web, onde apresento minhas habilidades e como as apliquei em projetos desenvolvidos de forma autodidata.',
    'sec-perfil': 'Perfil profissional',
    'tray-h2': 'Minha trajetória profissional:',
    'tray-01-strong': 'Vendedor Comercial – Entre Dos (Filial Hotel Sheraton, Mendoza)',
    'tray-01-p': '2025 – Início de 2026. Trabalhei como vendedor comercial, prestando atendimento personalizado a clientes nacionais e internacionais. Utilizei meus conhecimentos de idiomas para melhorar a comunicação com turistas estrangeiros e implementei estratégias comerciais tanto no ponto de venda quanto em canais digitais, contribuindo para o aumento das vendas e uma melhor experiência do cliente.',
    'tray-02-strong': 'Instituto San Vicente — Plataforma web institucional',
    'tray-02-p': 'Desenvolvimento completo de uma plataforma web institucional multipage para um colégio privado argentino.',
    'tray-03-strong': 'GoRugby',
    'tray-03-p': 'Plataforma comunitária full-stack para fãs de rugby com partidas ao vivo, previsões, rankings e gestão de clubes.',
    'tray-04-strong': 'POS - Fiambrería Duca — App desktop para consulta de preços',
    'tray-04-p': 'Aplicativo desktop desenvolvido para uma delicatessen local, que permite consultar preços em tempo real via leitura de código de barras. O negócio pode gerenciar seu catálogo completo de produtos com sincronização automática na nuvem.',
    'bio': 'Minha visão de futuro está ligada à mudança de mentalidade e à tecnologia como ferramenta revolucionária. Me formei de forma autodidata por meio de cursos de desenvolvimento, crescendo ao entrar no mercado de trabalho com responsabilidade. Atualmente busco uma oportunidade que me permita continuar crescendo como desenvolvedor, enfrentar novos desafios e aprimorar minhas habilidades técnicas.',
    'meta-enfoque': 'Foco',
    'meta-enfoque-val': 'Tecnologia & sistemas',
    'meta-perfil': 'Perfil',
    'meta-perfil-val': 'Autodidata — cursos próprios',
    'meta-formacion': 'Formação',
    'meta-idiomas': 'Idiomas',
    'lang-es': 'Espanhol nativo',
    'lang-en': 'Inglês avançado',
    'lang-sub-1': 'Conversacional · linguagem negociadora',
    'lang-sub-2': 'Aulas presenciais em instituições como Amicana Mendoza e Camden Town San Luis.',
    'lang-note': 'Uma paixão pelo idioma que começou desde cedo.',
    'lang-pt': 'Português',
    'lang-sub-pt': 'Aprendido e praticado recentemente por necessidade profissional.',
    'sec-proyectos': 'Projetos',
    'proj-1-p': 'Desenvolvimento completo de uma plataforma web institucional multipage para um colégio privado argentino, incluindo landing page, seções acadêmicas por nível (Infantil, Fundamental e Médio), área de inglês, galeria de fotos, formulário de contato e um portal esportivo (Club Sanvi) com múltiplas modalidades. O projeto integra autenticação de usuários, painéis de gestão por papel (administradores, diretores e professores), suporte multilíngue (espanhol/inglês) e otimização de assets para produção. Implantado no Netlify com servidor Node.js próprio para endpoints sensíveis.',
    'proj-2-p': 'Aplicação web full-stack voltada à comunidade de rugby, com acompanhamento de partidas ao vivo, previsões, rankings de torneios globais e gestão de clubes. Integra múltiplas APIs esportivas externas com proxy seguro no servidor para proteger credenciais. Suporta temas claro/escuro, design responsivo e sistema de papéis (usuário/admin).',
    'proj-3-p': 'Aplicativo desktop desenvolvido para uma delicatessen local, permitindo consulta de preços em tempo real via leitura de código de barras. O negócio pode gerenciar seu catálogo completo de produtos com sincronização automática na nuvem.',
    'sec-stack': 'Stack técnico',
    'stack-backend': 'Backend & Dados',
    'blockquote': 'Sou um desenvolvedor autodidata, proativo e apaixonado por tecnologia. Gosto de aprender continuamente, trazer novas ideias e enfrentar desafios que me permitam criar soluções eficientes e crescer profissionalmente. Atualmente resido em Mendoza, Argentina.',
    'sec-contacto': 'Contato',
    'contact-title': 'Hablemos!!!',
  },
  fr: {
    'nav-perfil': 'Profil',
    'nav-proyectos': 'Projets',
    'nav-contacto': 'Contact',
    'menu-aria': 'Ouvrir le menu',
    'hero-label': 'Disponible · Mendoza, Argentine · 2026',
    'hero-cta-1': 'Voir les projets',
    'hero-cta-2': 'Me contacter',
    'hero-sub': 'Voici mon portfolio web, où je présente mes compétences et comment je les ai appliquées dans des projets développés de manière autodidacte.',
    'sec-perfil': 'Profil professionnel',
    'tray-h2': 'Mon parcours professionnel :',
    'tray-01-strong': 'Commercial Vendeur – Entre Dos (Succursale Hôtel Sheraton, Mendoza)',
    'tray-01-p': "2025 – Début 2026. J'ai travaillé en tant que vendeur commercial, offrant un service personnalisé aux clients nationaux et internationaux. J'ai utilisé mes compétences linguistiques pour améliorer la communication avec les touristes étrangers et mis en œuvre des stratégies commerciales au point de vente et sur les canaux numériques, contribuant à l'augmentation des ventes et à une meilleure expérience client.",
    'tray-02-strong': 'Instituto San Vicente — Plateforme web institutionnelle',
    'tray-02-p': "Développement complet d'une plateforme web institutionnelle multipage pour un lycée privé argentin.",
    'tray-03-strong': 'GoRugby',
    'tray-03-p': 'Plateforme communautaire full-stack pour les fans de rugby avec matchs en direct, pronostics, classements et gestion de clubs.',
    'tray-04-strong': 'POS - Fiambrería Duca — App bureau pour consultation de prix',
    'tray-04-p': "Application bureau développée pour une épicerie fine locale, permettant de consulter les prix en temps réel via scanner de code-barres. Le commerce peut gérer son catalogue complet de produits depuis le même outil, avec synchronisation automatique dans le cloud.",
    'bio': "Ma vision d'avenir est liée au changement de mentalité et à la technologie comme outil révolutionnaire. Je me suis formé de manière autodidacte à travers des cours de développement, en entrant dans le monde professionnel avec responsabilité. Je suis actuellement à la recherche d'une opportunité me permettant de continuer à évoluer en tant que développeur, relever de nouveaux défis et développer mes compétences techniques.",
    'meta-enfoque': 'Orientation',
    'meta-enfoque-val': 'Technologie & systèmes',
    'meta-perfil': 'Profil',
    'meta-perfil-val': 'Autodidacte — cours personnels',
    'meta-formacion': 'Formation',
    'meta-idiomas': 'Langues',
    'lang-es': 'Espagnol natif',
    'lang-en': 'Anglais avancé',
    'lang-sub-1': 'Conversationnel · langue de négociation',
    'lang-sub-2': 'Cours en présentiel dans des institutions telles que Amicana Mendoza et Camden Town San Luis.',
    'lang-note': "Une passion pour la langue qui a commencé dès le plus jeune âge.",
    'lang-pt': 'Portugais',
    'lang-sub-pt': 'Récemment appris et pratiqué par nécessité professionnelle.',
    'sec-proyectos': 'Projets',
    'proj-1-p': "Développement complet d'une plateforme web institutionnelle multipage pour un lycée privé argentin, comprenant une landing page, des sections académiques par niveau (Maternelle, Primaire et Secondaire), un espace anglais, une galerie photos, un formulaire de contact et un portail sportif (Club Sanvi) avec plusieurs disciplines. Le projet intègre l'authentification des utilisateurs, des panneaux de gestion différenciés par rôle (administrateurs, directeurs et enseignants), le support multilingue (espagnol/anglais) et l'optimisation des assets pour la production. Déployé sur Netlify avec un serveur Node.js dédié pour les endpoints sensibles.",
    'proj-2-p': "Application web full-stack orientée vers la communauté du rugby, avec suivi des matchs en direct, pronostics, classements des tournois mondiaux et gestion des clubs. Intègre plusieurs APIs sportives externes via un proxy sécurisé côté serveur pour protéger les identifiants. Supporte les thèmes clair/sombre, le design responsive et un système de rôles (utilisateur/admin).",
    'proj-3-p': "Application bureau développée pour une épicerie fine locale, permettant de consulter les prix en temps réel via scanner de code-barres. Le commerce peut gérer son catalogue complet de produits depuis le même outil, avec synchronisation automatique dans le cloud.",
    'sec-stack': 'Stack technique',
    'stack-backend': 'Backend & Données',
    'blockquote': "Je suis un développeur autodidacte, proactif et passionné par la technologie. J'aime apprendre en continu, apporter de nouvelles idées et relever des défis qui me permettent de créer des solutions efficaces et de continuer à évoluer professionnellement. Je réside actuellement à Mendoza, en Argentine.",
    'sec-contacto': 'Contact',
    'contact-title': 'Hablemos!!!',
  },
  de: {
    'nav-perfil': 'Profil',
    'nav-proyectos': 'Projekte',
    'nav-contacto': 'Kontakt',
    'menu-aria': 'Menü öffnen',
    'hero-label': 'Verfügbar · Mendoza, Argentinien · 2026',
    'hero-cta-1': 'Projekte ansehen',
    'hero-cta-2': 'Kontaktiere mich',
    'hero-sub': 'Dies ist mein Web-Portfolio, wo ich meine Fähigkeiten und deren Anwendung in selbst erlernten Projekten vorstelle.',
    'sec-perfil': 'Berufliches Profil',
    'tray-h2': 'Mein beruflicher Werdegang:',
    'tray-01-strong': 'Handelsvertreter – Entre Dos (Hotel Sheraton Filiale, Mendoza)',
    'tray-01-p': '2025 – Anfang 2026. Ich arbeitete als Handelsvertreter und bot nationalen und internationalen Kunden persönlichen Service. Ich nutzte meine Sprachkenntnisse, um die Kommunikation mit ausländischen Touristen zu verbessern, und implementierte Verkaufsstrategien sowohl am Point of Sale als auch in digitalen Kanälen, was zur Umsatzsteigerung und einer besseren Kundenerfahrung beitrug.',
    'tray-02-strong': 'Instituto San Vicente — Institutionelle Webplattform',
    'tray-02-p': 'Vollständige Entwicklung einer mehrseitigen institutionellen Webplattform für eine private argentinische Schule.',
    'tray-03-strong': 'GoRugby',
    'tray-03-p': 'Full-Stack-Community-Plattform für Rugby-Fans mit Live-Spielen, Vorhersagen, Rankings und Club-Management.',
    'tray-04-strong': 'POS - Fiambrería Duca — Desktop-App zur Preisabfrage',
    'tray-04-p': 'Desktop-Anwendung für ein lokales Feinkostgeschäft, die Echtzeit-Preisabfragen per Barcode-Scanner ermöglicht. Das Unternehmen kann seinen kompletten Produktkatalog über dasselbe Tool verwalten, mit automatischer Cloud-Synchronisation.',
    'bio': 'Meine Zukunftsvision ist mit einem Wandel der Denkweise und Technologie als revolutionärem Werkzeug verknüpft. Ich habe mich autodidaktisch durch Entwicklungskurse ausgebildet und bin mit Verantwortungsbewusstsein in das Berufsleben eingestiegen. Ich suche derzeit nach einer Möglichkeit, die es mir erlaubt, als Entwickler weiter zu wachsen, neue Herausforderungen anzunehmen und meine technischen Fähigkeiten auszubauen.',
    'meta-enfoque': 'Schwerpunkt',
    'meta-enfoque-val': 'Technologie & Systeme',
    'meta-perfil': 'Profil',
    'meta-perfil-val': 'Autodidakt — eigene Kurse',
    'meta-formacion': 'Ausbildung',
    'meta-idiomas': 'Sprachen',
    'lang-es': 'Spanisch (Muttersprache)',
    'lang-en': 'Fortgeschrittenes Englisch',
    'lang-sub-1': 'Konversational · Verhandlungssprache',
    'lang-sub-2': 'Präsenzunterricht an Institutionen wie Amicana Mendoza und Camden Town San Luis.',
    'lang-note': 'Eine Leidenschaft für Sprache, die schon früh begann.',
    'lang-pt': 'Portugiesisch',
    'lang-sub-pt': 'Kürzlich aus beruflicher Notwendigkeit erlernt und praktiziert.',
    'sec-proyectos': 'Projekte',
    'proj-1-p': 'Vollständige Entwicklung einer mehrseitigen institutionellen Webplattform für eine private argentinische Schule, einschließlich Landing Page, akademischer Bereiche nach Stufen (Vorschule, Grundschule und Sekundarschule), Englischbereich, Fotogalerie, Kontaktformular und einem Sportportal (Club Sanvi) mit mehreren Disziplinen. Das Projekt integriert Benutzerauthentifizierung, rollenbasierte Verwaltungspanels (Administratoren, Direktoren und Lehrer), mehrsprachige Unterstützung (Spanisch/Englisch) und Asset-Optimierung für die Produktion. Auf Netlify mit eigenem Node.js-Server für sensible Endpunkte bereitgestellt.',
    'proj-2-p': 'Full-Stack-Webanwendung für die Rugby-Community mit Live-Spielverfolgung, Vorhersagen, globalen Turnierranglisten und Club-Management. Integriert mehrere externe Sport-APIs über einen sicheren serverseitigen Proxy zum Schutz von Zugangsdaten. Unterstützt helle/dunkle Themes, responsives Design und ein Rollensystem (Benutzer/Admin).',
    'proj-3-p': 'Desktop-Anwendung für ein lokales Feinkostgeschäft, die Echtzeit-Preisabfragen per Barcode-Scanner ermöglicht. Das Unternehmen kann seinen kompletten Produktkatalog über dasselbe Tool verwalten, mit automatischer Cloud-Synchronisation.',
    'sec-stack': 'Technischer Stack',
    'stack-backend': 'Backend & Daten',
    'blockquote': 'Ich bin ein autodidaktischer, proaktiver und technologiebegeisterter Entwickler. Ich lerne gerne kontinuierlich dazu, bringe neue Ideen ein und nehme Herausforderungen an, die mir helfen, effiziente Lösungen zu entwickeln und professionell zu wachsen. Ich lebe derzeit in Mendoza, Argentinien.',
    'sec-contacto': 'Kontakt',
    'contact-title': 'Hablemos!!!',
  },
};

const langMeta = {
  es: { flag: '🇦🇷', code: 'ES' },
  en: { flag: '🇺🇸', code: 'EN' },
  pt: { flag: '🇧🇷', code: 'PT' },
  fr: { flag: '🇫🇷', code: 'FR' },
  de: { flag: '🇩🇪', code: 'DE' },
};

// ─── APLICAR IDIOMA ──────────────────────────
function applyLanguage(lang) {
  if (!translations[lang]) return;

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) menuBtn.setAttribute('aria-label', translations[lang]['menu-aria']);

  const meta = langMeta[lang];
  document.getElementById('langFlag').textContent = meta.flag;
  document.getElementById('langCode').textContent = meta.code;

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  closeLangDropdown();
}

function closeLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  const switcher = document.getElementById('langSwitcher');
  if (dropdown) dropdown.hidden = true;
  if (switcher) switcher.classList.remove('open');
}

// ─── INIT ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  const switcher = document.getElementById('langSwitcher');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = !dropdown.hidden;
    dropdown.hidden = isOpen;
    switcher.classList.toggle('open', !isOpen);
  });

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => applyLanguage(opt.dataset.lang));
  });

  document.addEventListener('click', closeLangDropdown);

  const saved = localStorage.getItem('lang') || 'es';
  applyLanguage(saved);
});
