// ─── TRADUCCIONES ────────────────────────────
const translations = {
  es: {
    // ── Nav / global ──
    'nav-perfil': 'Perfil',
    'nav-proyectos': 'Proyectos',
    'nav-contacto': 'Contacto',
    'menu-aria': 'Abrir menú',
    // ── Hero index ──
    'hero-label': 'Disponible · Mendoza, Argentina · 2026',
    'hero-cta-1': 'Ver proyectos',
    'hero-cta-2': 'Contactame',
    'hero-sub': 'Este es mi portafolio web, donde presento mis habilidades y cómo las he aplicado en proyectos desarrollados de forma autodidacta.',
    // ── Perfil ──
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
    // ── Proyectos index ──
    'sec-proyectos': 'Proyectos',
    'proj-1-p': 'Desarrollo completo de una plataforma web institucional multipage para un colegio privado argentino, que incluye landing page, secciones académicas por nivel (Inicial, Primaria y Secundaria), área de inglés, galería de fotos, formulario de contacto y un portal deportivo (Club Sanvi) con múltiples disciplinas. El proyecto integra autenticación de usuarios, paneles de gestión diferenciados por rol (administradores, directivos y docentes), soporte multilenguaje (español/inglés) y optimización de assets para producción. Desplegado en Netlify con servidor propio en Node.js para endpoints sensibles.',
    'proj-2-p': 'Aplicación web full-stack orientada a la comunidad rugbística, con seguimiento de partidos en vivo, predicciones, rankings de torneos globales y gestión de clubes. Integra múltiples APIs deportivas externas con un proxy seguro del lado del servidor para proteger credenciales. Soporta temas claro/oscuro, diseño responsive y sistema de roles (usuario/admin).',
    'proj-3-p': 'Aplicación de escritorio desarrollada para una fiambrería local, que permite consultar precios en tiempo real mediante escaneo de código de barras. El negocio puede gestionar su catálogo completo de productos desde la misma herramienta, con sincronización automática a la nube.',
    // ── Stack ──
    'sec-stack': 'Stack técnico',
    'stack-backend': 'Backend & Datos',
    // ── Frase ──
    'blockquote': 'Soy un desarrollador autodidacta, proactivo y apasionado por la tecnología. Disfruto aprender de forma constante, aportar nuevas ideas y enfrentar desafíos que me permitan crear soluciones eficientes y seguir creciendo profesionalmente. Actualmente resido en Mendoza, Argentina.',
    // ── Contacto ──
    'sec-contacto': 'Contacto',
    'contact-title': 'Hablemos',
    // ── Proyectos page ──
    'pp-sec-label': 'Proyectos',
    'pp-hero-h1': 'Todos<br>mis <span class="accent">proyectos</span>',
    'pp-features-title': 'Funcionalidades',
    'pp-01-desc': 'Plataforma web institucional multipage para un colegio privado argentino. Cubre desde la presentación pública hasta la gestión interna diferenciada por rol, incluyendo un portal deportivo completo y soporte bilingüe.',
    'pp-01-f1': 'Autenticación con 3 niveles de rol — Administrador, Directivo y Docente',
    'pp-01-f2': 'Panel de gestión de contenido diferenciado por tipo de usuario',
    'pp-01-f3': 'Secciones académicas por nivel: Inicial, Primaria y Secundaria',
    'pp-01-f4': 'Portal deportivo Club Sanvi con múltiples disciplinas',
    'pp-01-f5': 'Galería de fotos con lightbox y navegación por teclado',
    'pp-01-f6': 'Formulario de contacto con envío real de emails (Resend API)',
    'pp-01-f7': 'Soporte bilingüe Español / Inglés integrado sin librerías externas',
    'pp-01-f8': 'Diseño responsive optimizado para mobile, tablet y desktop',
    'pp-02-desc': 'Plataforma web full-stack orientada a la comunidad rugbística global. Consolida datos de múltiples fuentes externas en un solo lugar, protegiendo las API keys con un proxy seguro del servidor.',
    'pp-02-soon-title': 'Próximamente',
    'pp-02-soon-sub': 'Interfaz visual en desarrollo',
    'pp-02-f1': 'Seguimiento de partidos en vivo con datos actualizados en tiempo real',
    'pp-02-f2': 'Sistema de predicciones de resultados con ranking de aciertos',
    'pp-02-f3': 'Rankings de torneos globales: World Rugby, Premiership, Top 14, URC y más',
    'pp-02-f4': 'Gestión de clubes y consulta de estadísticas por equipo',
    'pp-02-f5': 'Proxy seguro del lado del servidor para proteger 4 API keys deportivas',
    'pp-02-f6': 'Design system propio: temas claro/oscuro y 6 paletas de color configurables',
    'pp-02-f7': 'Sistema de roles: usuario estándar y administrador',
    'pp-03-desc': 'Aplicación de escritorio nativa para Windows, desarrollada para una fiambrería local. Reemplaza el método manual de consulta de precios con un sistema rápido de escaneo y gestión de catálogo sincronizado en la nube.',
    'pp-03-f1': 'Consulta de precios en tiempo real mediante escaneo de código de barras',
    'pp-03-f2': 'Gestión completa del catálogo: agregar, editar, eliminar y buscar productos',
    'pp-03-f3': 'Calculadora integrada para operaciones en el punto de venta',
    'pp-03-f4': 'Sincronización automática con Supabase PostgreSQL en la nube',
    'pp-03-f5': 'Feedback sonoro al escanear: tono de éxito o error (Web Audio API)',
    'pp-03-f6': 'Instalador .exe nativo para Windows generado con electron-builder',
    'pp-03-f7': 'Modo oscuro y claro con persistencia de preferencia del usuario',
    'pp-back-nav': 'Navegación',
    'pp-back-link-text': 'Volver al<br>sitio web',
  },

  en: {
    // ── Nav / global ──
    'nav-perfil': 'Profile',
    'nav-proyectos': 'Projects',
    'nav-contacto': 'Contact',
    'menu-aria': 'Open menu',
    // ── Hero index ──
    'hero-label': 'Available · Mendoza, Argentina · 2026',
    'hero-cta-1': 'View projects',
    'hero-cta-2': 'Contact me',
    'hero-sub': 'This is my web portfolio, where I present my skills and how I have applied them in self-taught projects.',
    // ── Perfil ──
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
    // ── Proyectos index ──
    'sec-proyectos': 'Projects',
    'proj-1-p': 'Complete development of a multipage institutional web platform for a private Argentine school, including a landing page, academic sections by level (Preschool, Primary and Secondary), an English area, photo gallery, contact form and a sports portal (Club Sanvi) with multiple disciplines. The project integrates user authentication, role-based management panels (administrators, principals and teachers), multilingual support (Spanish/English) and asset optimization for production. Deployed on Netlify with a custom Node.js server for sensitive endpoints.',
    'proj-2-p': 'Full-stack web application oriented to the rugby community, with live match tracking, predictions, global tournament rankings and club management. It integrates multiple external sports APIs with a secure server-side proxy to protect credentials. Supports light/dark themes, responsive design and a role system (user/admin).',
    'proj-3-p': 'Desktop application developed for a local deli, enabling real-time price lookup via barcode scanning. The business can manage its complete product catalog from the same tool, with automatic cloud synchronization.',
    // ── Stack ──
    'sec-stack': 'Technical Stack',
    'stack-backend': 'Backend & Data',
    // ── Frase ──
    'blockquote': 'I am a self-taught developer, proactive and passionate about technology. I enjoy continuous learning, bringing new ideas and facing challenges that allow me to create efficient solutions and keep growing professionally. I currently live in Mendoza, Argentina.',
    // ── Contacto ──
    'sec-contacto': 'Contact',
    'contact-title': "Let's talk",
    // ── Proyectos page ──
    'pp-sec-label': 'Projects',
    'pp-hero-h1': 'All<br>my <span class="accent">projects</span>',
    'pp-features-title': 'Features',
    'pp-01-desc': 'Multipage institutional web platform for a private Argentine school. Covers everything from public presentation to role-based internal management, including a complete sports portal and bilingual support.',
    'pp-01-f1': 'Authentication with 3 role levels — Administrator, Principal and Teacher',
    'pp-01-f2': 'Content management panel differentiated by user type',
    'pp-01-f3': 'Academic sections by level: Preschool, Primary and Secondary',
    'pp-01-f4': 'Club Sanvi sports portal with multiple disciplines',
    'pp-01-f5': 'Photo gallery with lightbox and keyboard navigation',
    'pp-01-f6': 'Contact form with real email delivery (Resend API)',
    'pp-01-f7': 'Built-in Spanish / English bilingual support without external libraries',
    'pp-01-f8': 'Responsive design optimized for mobile, tablet and desktop',
    'pp-02-desc': 'Full-stack web platform for the global rugby community. Consolidates data from multiple external sources in one place, protecting API keys with a secure server-side proxy.',
    'pp-02-soon-title': 'Coming soon',
    'pp-02-soon-sub': 'Visual interface under development',
    'pp-02-f1': 'Live match tracking with real-time updated data',
    'pp-02-f2': 'Result prediction system with accuracy rankings',
    'pp-02-f3': 'Global tournament rankings: World Rugby, Premiership, Top 14, URC and more',
    'pp-02-f4': 'Club management and team statistics lookup',
    'pp-02-f5': 'Secure server-side proxy protecting 4 sports API keys',
    'pp-02-f6': 'Custom design system: light/dark themes and 6 configurable color palettes',
    'pp-02-f7': 'Role system: standard user and administrator',
    'pp-03-desc': 'Native Windows desktop application developed for a local deli. Replaces the manual price lookup method with a fast scanning and cloud-synced catalog management system.',
    'pp-03-f1': 'Real-time price lookup via barcode scanning',
    'pp-03-f2': 'Full catalog management: add, edit, delete and search products',
    'pp-03-f3': 'Built-in calculator for point-of-sale operations',
    'pp-03-f4': 'Automatic sync with Supabase PostgreSQL in the cloud',
    'pp-03-f5': 'Audio feedback on scan: success or error tone (Web Audio API)',
    'pp-03-f6': 'Native Windows .exe installer generated with electron-builder',
    'pp-03-f7': 'Dark and light mode with user preference persistence',
    'pp-back-nav': 'Navigation',
    'pp-back-link-text': 'Back to<br>website',
  },

  pt: {
    // ── Nav / global ──
    'nav-perfil': 'Perfil',
    'nav-proyectos': 'Projetos',
    'nav-contacto': 'Contato',
    'menu-aria': 'Abrir menu',
    // ── Hero index ──
    'hero-label': 'Disponível · Mendoza, Argentina · 2026',
    'hero-cta-1': 'Ver projetos',
    'hero-cta-2': 'Contate-me',
    'hero-sub': 'Este é o meu portfólio web, onde apresento minhas habilidades e como as apliquei em projetos desenvolvidos de forma autodidata.',
    // ── Perfil ──
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
    // ── Proyectos index ──
    'sec-proyectos': 'Projetos',
    'proj-1-p': 'Desenvolvimento completo de uma plataforma web institucional multipage para um colégio privado argentino, incluindo landing page, seções acadêmicas por nível (Infantil, Fundamental e Médio), área de inglês, galeria de fotos, formulário de contato e um portal esportivo (Club Sanvi) com múltiplas modalidades. O projeto integra autenticação de usuários, painéis de gestão por papel (administradores, diretores e professores), suporte multilíngue (espanhol/inglês) e otimização de assets para produção. Implantado no Netlify com servidor Node.js próprio para endpoints sensíveis.',
    'proj-2-p': 'Aplicação web full-stack voltada à comunidade de rugby, com acompanhamento de partidas ao vivo, previsões, rankings de torneios globais e gestão de clubes. Integra múltiplas APIs esportivas externas com proxy seguro no servidor para proteger credenciais. Suporta temas claro/escuro, design responsivo e sistema de papéis (usuário/admin).',
    'proj-3-p': 'Aplicativo desktop desenvolvido para uma delicatessen local, permitindo consulta de preços em tempo real via leitura de código de barras. O negócio pode gerenciar seu catálogo completo de produtos com sincronização automática na nuvem.',
    // ── Stack ──
    'sec-stack': 'Stack técnico',
    'stack-backend': 'Backend & Dados',
    // ── Frase ──
    'blockquote': 'Sou um desenvolvedor autodidata, proativo e apaixonado por tecnologia. Gosto de aprender continuamente, trazer novas ideias e enfrentar desafios que me permitam criar soluções eficientes e crescer profissionalmente. Atualmente resido em Mendoza, Argentina.',
    // ── Contacto ──
    'sec-contacto': 'Contato',
    'contact-title': 'Vamos conversar',
    // ── Proyectos page ──
    'pp-sec-label': 'Projetos',
    'pp-hero-h1': 'Todos<br>os meus <span class="accent">projetos</span>',
    'pp-features-title': 'Funcionalidades',
    'pp-01-desc': 'Plataforma web institucional multipage para um colégio privado argentino. Cobre desde a apresentação pública até a gestão interna diferenciada por papel, incluindo um portal esportivo completo e suporte bilíngue.',
    'pp-01-f1': 'Autenticação com 3 níveis de papel — Administrador, Diretor e Professor',
    'pp-01-f2': 'Painel de gestão de conteúdo diferenciado por tipo de usuário',
    'pp-01-f3': 'Seções acadêmicas por nível: Infantil, Fundamental e Médio',
    'pp-01-f4': 'Portal esportivo Club Sanvi com múltiplas modalidades',
    'pp-01-f5': 'Galeria de fotos com lightbox e navegação por teclado',
    'pp-01-f6': 'Formulário de contato com envio real de e-mails (Resend API)',
    'pp-01-f7': 'Suporte bilíngue Espanhol / Inglês integrado sem bibliotecas externas',
    'pp-01-f8': 'Design responsivo otimizado para mobile, tablet e desktop',
    'pp-02-desc': 'Plataforma web full-stack voltada à comunidade de rugby global. Consolida dados de múltiplas fontes externas em um único lugar, protegendo as API keys com um proxy seguro no servidor.',
    'pp-02-soon-title': 'Em breve',
    'pp-02-soon-sub': 'Interface visual em desenvolvimento',
    'pp-02-f1': 'Acompanhamento de partidas ao vivo com dados atualizados em tempo real',
    'pp-02-f2': 'Sistema de previsão de resultados com ranking de acertos',
    'pp-02-f3': 'Rankings de torneios globais: World Rugby, Premiership, Top 14, URC e mais',
    'pp-02-f4': 'Gestão de clubes e consulta de estatísticas por equipe',
    'pp-02-f5': 'Proxy seguro no servidor para proteger 4 API keys esportivas',
    'pp-02-f6': 'Design system próprio: temas claro/escuro e 6 paletas de cor configuráveis',
    'pp-02-f7': 'Sistema de papéis: usuário padrão e administrador',
    'pp-03-desc': 'Aplicativo desktop nativo para Windows, desenvolvido para uma delicatessen local. Substitui o método manual de consulta de preços por um sistema ágil de leitura de código de barras e gestão de catálogo sincronizado na nuvem.',
    'pp-03-f1': 'Consulta de preços em tempo real via leitura de código de barras',
    'pp-03-f2': 'Gestão completa do catálogo: adicionar, editar, excluir e buscar produtos',
    'pp-03-f3': 'Calculadora integrada para operações no ponto de venda',
    'pp-03-f4': 'Sincronização automática com Supabase PostgreSQL na nuvem',
    'pp-03-f5': 'Feedback sonoro ao escanear: tom de sucesso ou erro (Web Audio API)',
    'pp-03-f6': 'Instalador .exe nativo para Windows gerado com electron-builder',
    'pp-03-f7': 'Modo escuro e claro com persistência da preferência do usuário',
    'pp-back-nav': 'Navegação',
    'pp-back-link-text': 'Voltar ao<br>site',
  },

  fr: {
    // ── Nav / global ──
    'nav-perfil': 'Profil',
    'nav-proyectos': 'Projets',
    'nav-contacto': 'Contact',
    'menu-aria': 'Ouvrir le menu',
    // ── Hero index ──
    'hero-label': 'Disponible · Mendoza, Argentine · 2026',
    'hero-cta-1': 'Voir les projets',
    'hero-cta-2': 'Me contacter',
    'hero-sub': 'Voici mon portfolio web, où je présente mes compétences et comment je les ai appliquées dans des projets développés de manière autodidacte.',
    // ── Perfil ──
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
    // ── Proyectos index ──
    'sec-proyectos': 'Projets',
    'proj-1-p': "Développement complet d'une plateforme web institutionnelle multipage pour un lycée privé argentin, comprenant une landing page, des sections académiques par niveau (Maternelle, Primaire et Secondaire), un espace anglais, une galerie photos, un formulaire de contact et un portail sportif (Club Sanvi) avec plusieurs disciplines. Le projet intègre l'authentification des utilisateurs, des panneaux de gestion différenciés par rôle (administrateurs, directeurs et enseignants), le support multilingue (espagnol/anglais) et l'optimisation des assets pour la production. Déployé sur Netlify avec un serveur Node.js dédié pour les endpoints sensibles.",
    'proj-2-p': "Application web full-stack orientée vers la communauté du rugby, avec suivi des matchs en direct, pronostics, classements des tournois mondiaux et gestion des clubs. Intègre plusieurs APIs sportives externes via un proxy sécurisé côté serveur pour protéger les identifiants. Supporte les thèmes clair/sombre, le design responsive et un système de rôles (utilisateur/admin).",
    'proj-3-p': "Application bureau développée pour une épicerie fine locale, permettant de consulter les prix en temps réel via scanner de code-barres. Le commerce peut gérer son catalogue complet de produits depuis le même outil, avec synchronisation automatique dans le cloud.",
    // ── Stack ──
    'sec-stack': 'Stack technique',
    'stack-backend': 'Backend & Données',
    // ── Frase ──
    'blockquote': "Je suis un développeur autodidacte, proactif et passionné par la technologie. J'aime apprendre en continu, apporter de nouvelles idées et relever des défis qui me permettent de créer des solutions efficaces et de continuer à évoluer professionnellement. Je réside actuellement à Mendoza, en Argentine.",
    // ── Contacto ──
    'sec-contacto': 'Contact',
    'contact-title': 'Parlons',
    // ── Proyectos page ──
    'pp-sec-label': 'Projets',
    'pp-hero-h1': 'Tous<br>mes <span class="accent">projets</span>',
    'pp-features-title': 'Fonctionnalités',
    'pp-01-desc': "Plateforme web institutionnelle multipage pour un lycée privé argentin. Couvre la présentation publique jusqu'à la gestion interne différenciée par rôle, incluant un portail sportif complet et un support bilingue.",
    'pp-01-f1': "Authentification à 3 niveaux de rôle — Administrateur, Directeur et Enseignant",
    'pp-01-f2': "Panneau de gestion de contenu différencié par type d'utilisateur",
    'pp-01-f3': 'Sections académiques par niveau : Maternelle, Primaire et Secondaire',
    'pp-01-f4': 'Portail sportif Club Sanvi avec plusieurs disciplines',
    'pp-01-f5': 'Galerie photos avec lightbox et navigation clavier',
    'pp-01-f6': "Formulaire de contact avec envoi réel d'e-mails (Resend API)",
    'pp-01-f7': 'Support bilingue Espagnol / Anglais intégré sans bibliothèques externes',
    'pp-01-f8': 'Design responsive optimisé pour mobile, tablette et desktop',
    'pp-02-desc': "Plateforme web full-stack dédiée à la communauté mondiale du rugby. Consolide les données de multiples sources externes en un seul endroit, protégeant les clés API via un proxy sécurisé côté serveur.",
    'pp-02-soon-title': 'Bientôt disponible',
    'pp-02-soon-sub': 'Interface visuelle en développement',
    'pp-02-f1': 'Suivi des matchs en direct avec données actualisées en temps réel',
    'pp-02-f2': 'Système de pronostics avec classement de précision',
    'pp-02-f3': 'Classements mondiaux : World Rugby, Premiership, Top 14, URC et plus',
    'pp-02-f4': 'Gestion des clubs et consultation des statistiques par équipe',
    'pp-02-f5': 'Proxy sécurisé côté serveur protégeant 4 clés API sportives',
    'pp-02-f6': 'Système de design personnalisé : thèmes clair/sombre et 6 palettes configurables',
    'pp-02-f7': "Système de rôles : utilisateur standard et administrateur",
    'pp-03-desc': "Application bureau native pour Windows, développée pour une épicerie fine locale. Remplace la méthode manuelle de consultation des prix par un système rapide de scan et de gestion de catalogue synchronisé dans le cloud.",
    'pp-03-f1': 'Consultation des prix en temps réel via scan de code-barres',
    'pp-03-f2': 'Gestion complète du catalogue : ajouter, modifier, supprimer et rechercher des produits',
    'pp-03-f3': 'Calculatrice intégrée pour les opérations en point de vente',
    'pp-03-f4': 'Synchronisation automatique avec Supabase PostgreSQL dans le cloud',
    'pp-03-f5': "Retour sonore au scan : ton de succès ou d'erreur (Web Audio API)",
    'pp-03-f6': 'Installateur .exe natif pour Windows généré avec electron-builder',
    'pp-03-f7': "Mode sombre et clair avec persistance des préférences de l'utilisateur",
    'pp-back-nav': 'Navigation',
    'pp-back-link-text': 'Retour au<br>site web',
  },

  de: {
    // ── Nav / global ──
    'nav-perfil': 'Profil',
    'nav-proyectos': 'Projekte',
    'nav-contacto': 'Kontakt',
    'menu-aria': 'Menü öffnen',
    // ── Hero index ──
    'hero-label': 'Verfügbar · Mendoza, Argentinien · 2026',
    'hero-cta-1': 'Projekte ansehen',
    'hero-cta-2': 'Kontaktiere mich',
    'hero-sub': 'Dies ist mein Web-Portfolio, wo ich meine Fähigkeiten und deren Anwendung in selbst erlernten Projekten vorstelle.',
    // ── Perfil ──
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
    // ── Proyectos index ──
    'sec-proyectos': 'Projekte',
    'proj-1-p': 'Vollständige Entwicklung einer mehrseitigen institutionellen Webplattform für eine private argentinische Schule, einschließlich Landing Page, akademischer Bereiche nach Stufen (Vorschule, Grundschule und Sekundarschule), Englischbereich, Fotogalerie, Kontaktformular und einem Sportportal (Club Sanvi) mit mehreren Disziplinen. Das Projekt integriert Benutzerauthentifizierung, rollenbasierte Verwaltungspanels (Administratoren, Direktoren und Lehrer), mehrsprachige Unterstützung (Spanisch/Englisch) und Asset-Optimierung für die Produktion. Auf Netlify mit eigenem Node.js-Server für sensible Endpunkte bereitgestellt.',
    'proj-2-p': 'Full-Stack-Webanwendung für die Rugby-Community mit Live-Spielverfolgung, Vorhersagen, globalen Turnierranglisten und Club-Management. Integriert mehrere externe Sport-APIs über einen sicheren serverseitigen Proxy zum Schutz von Zugangsdaten. Unterstützt helle/dunkle Themes, responsives Design und ein Rollensystem (Benutzer/Admin).',
    'proj-3-p': 'Desktop-Anwendung für ein lokales Feinkostgeschäft, die Echtzeit-Preisabfragen per Barcode-Scanner ermöglicht. Das Unternehmen kann seinen kompletten Produktkatalog über dasselbe Tool verwalten, mit automatischer Cloud-Synchronisation.',
    // ── Stack ──
    'sec-stack': 'Technischer Stack',
    'stack-backend': 'Backend & Daten',
    // ── Frase ──
    'blockquote': 'Ich bin ein autodidaktischer, proaktiver und technologiebegeisterter Entwickler. Ich lerne gerne kontinuierlich dazu, bringe neue Ideen ein und nehme Herausforderungen an, die mir helfen, effiziente Lösungen zu entwickeln und professionell zu wachsen. Ich lebe derzeit in Mendoza, Argentinien.',
    // ── Contacto ──
    'sec-contacto': 'Kontakt',
    'contact-title': 'Sprechen wir',
    // ── Proyectos page ──
    'pp-sec-label': 'Projekte',
    'pp-hero-h1': 'Alle<br>meine <span class="accent">Projekte</span>',
    'pp-features-title': 'Funktionen',
    'pp-01-desc': 'Mehrseitige institutionelle Webplattform für eine private argentinische Schule. Umfasst die öffentliche Darstellung bis hin zur rollenbasierten internen Verwaltung, einschließlich eines vollständigen Sportportals und zweisprachiger Unterstützung.',
    'pp-01-f1': 'Authentifizierung mit 3 Rollenebenen — Administrator, Direktor und Lehrer',
    'pp-01-f2': 'Content-Management-Panel nach Benutzertyp differenziert',
    'pp-01-f3': 'Akademische Bereiche nach Stufe: Vorschule, Grundschule und Sekundarschule',
    'pp-01-f4': 'Sportportal Club Sanvi mit mehreren Disziplinen',
    'pp-01-f5': 'Fotogalerie mit Lightbox und Tastaturnavigation',
    'pp-01-f6': 'Kontaktformular mit echtem E-Mail-Versand (Resend API)',
    'pp-01-f7': 'Integrierte Zweisprachigkeit Spanisch / Englisch ohne externe Bibliotheken',
    'pp-01-f8': 'Responsives Design optimiert für Mobile, Tablet und Desktop',
    'pp-02-desc': 'Full-Stack-Webplattform für die globale Rugby-Community. Konsolidiert Daten aus mehreren externen Quellen an einem Ort und schützt API-Schlüssel durch einen sicheren serverseitigen Proxy.',
    'pp-02-soon-title': 'Demnächst',
    'pp-02-soon-sub': 'Visuelle Oberfläche in Entwicklung',
    'pp-02-f1': 'Live-Spielverfolgung mit in Echtzeit aktualisierten Daten',
    'pp-02-f2': 'Ergebnisvorhersagesystem mit Trefferquoten-Ranking',
    'pp-02-f3': 'Globale Turnierranglisten: World Rugby, Premiership, Top 14, URC und mehr',
    'pp-02-f4': 'Club-Management und Statistikabruf pro Team',
    'pp-02-f5': 'Sicherer serverseitiger Proxy zum Schutz von 4 Sport-API-Schlüsseln',
    'pp-02-f6': 'Eigenes Design-System: Hell-/Dunkelmodus und 6 konfigurierbare Farbpaletten',
    'pp-02-f7': 'Rollensystem: Standardbenutzer und Administrator',
    'pp-03-desc': 'Native Windows-Desktop-Anwendung für ein lokales Feinkostgeschäft. Ersetzt die manuelle Preisabfrage durch ein schnelles Scan-System mit Cloud-synchronisierter Katalogverwaltung.',
    'pp-03-f1': 'Echtzeit-Preisabfrage per Barcode-Scanner',
    'pp-03-f2': 'Vollständige Katalogverwaltung: Produkte hinzufügen, bearbeiten, löschen und suchen',
    'pp-03-f3': 'Integrierter Rechner für Kassenvorgänge',
    'pp-03-f4': 'Automatische Synchronisation mit Supabase PostgreSQL in der Cloud',
    'pp-03-f5': 'Akustisches Feedback beim Scannen: Erfolgs- oder Fehlerton (Web Audio API)',
    'pp-03-f6': 'Nativer Windows-.exe-Installer generiert mit electron-builder',
    'pp-03-f7': 'Dunkel- und Hellmodus mit Persistenz der Nutzerpräferenz',
    'pp-back-nav': 'Navigation',
    'pp-back-link-text': 'Zurück zur<br>Website',
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

  // Reemplaza textContent para atributos normales
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Reemplaza innerHTML para elementos con HTML interno (spans, br, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) menuBtn.setAttribute('aria-label', translations[lang]['menu-aria']);

  const meta = langMeta[lang];
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flagEl) flagEl.textContent = meta.flag;
  if (codeEl) codeEl.textContent = meta.code;

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

  if (btn && dropdown && switcher) {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = !dropdown.hidden;
      dropdown.hidden = isOpen;
      switcher.classList.toggle('open', !isOpen);
    });
  }

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => applyLanguage(opt.dataset.lang));
  });

  document.addEventListener('click', closeLangDropdown);

  const saved = localStorage.getItem('lang') || 'es';
  applyLanguage(saved);
});
