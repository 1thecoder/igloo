const navigation = ['Home', 'Expertise', 'Projects', 'Process', 'Contact'];

const metrics = [
  { value: '25+', label: 'AI prototypes shipped' },
  { value: '12', label: 'production ML systems' },
  { value: '4.9/5', label: 'client satisfaction' },
  { value: '98%', label: 'deployment reliability' },
];

const expertise = [
  {
    icon: '🧠',
    title: 'Machine Learning Strategy',
    text: 'Turning business goals into practical ML roadmaps, model architectures, and measurable AI product milestones.',
  },
  {
    icon: '🤖',
    title: 'Generative AI & LLMs',
    text: 'Building assistants, retrieval systems, prompt workflows, and automation pipelines that feel fast, useful, and safe.',
  },
  {
    icon: '🗄️',
    title: 'Data Engineering & MLOps',
    text: 'Designing reliable data pipelines, model monitoring, CI/CD, evaluation harnesses, and cloud deployment workflows.',
  },
  {
    icon: '💻',
    title: 'Full-Stack AI Products',
    text: 'Creating polished web experiences around AI models with responsive interfaces, APIs, dashboards, and analytics.',
  },
];

const projects = [
  {
    tag: 'Computer Vision',
    title: 'Smart Defect Detection Suite',
    description:
      'Vision pipeline for visual inspection with active learning loops, live confidence scoring, and supervisor dashboards.',
    impact: 'Reduced manual review time by 62%',
  },
  {
    tag: 'NLP / LLM',
    title: 'Enterprise Knowledge Copilot',
    description:
      'Retrieval-augmented assistant that answers internal questions from documents with source-aware responses and guardrails.',
    impact: 'Accelerated support workflows by 3.4x',
  },
  {
    tag: 'Predictive Analytics',
    title: 'Churn Intelligence Platform',
    description:
      'Forecasting system with feature stores, explainability, cohort segmentation, and automated retention recommendations.',
    impact: 'Improved campaign targeting by 41%',
  },
];

const timeline = [
  'Discover business goals, constraints, and measurable success criteria.',
  'Prototype model, interface, and evaluation loop with rapid feedback.',
  'Engineer scalable APIs, data flows, and deployment-ready infrastructure.',
  'Launch, monitor, improve, and document the system for long-term growth.',
];

const skillCloud = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'LangChain',
  'OpenAI APIs',
  'Vector DBs',
  'FastAPI',
  'React',
  'Docker',
  'AWS',
  'MLOps',
  'SQL',
];

const icon = {
  sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"/><path d="M19 15l.8 2.7L22.5 18l-2.7.8L19 21.5l-.8-2.7-2.7-.8 2.7-.8L19 15z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.4-2.6-1.3-3.5.2-1.1.2-2.3-.1-3.5 0 0-1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.4 1.7 5.4 2 5.4 2c-.3 1.2-.3 2.4-.1 3.5A5 5 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.5.5-.9 1.3-1 2.1V22"/><path d="M9 18c-4.5 2-5-2-7-2"/></svg>',
  zap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 3 14h8l-1 8 11-14h-8l0-6z"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.3-2 3-2.5 5 2-.5 3.7-1 5-2.5"/><path d="M9 15 4 10l4-2 6 6-2 4-3-3z"/><path d="M14 4c3-1.5 5-1 6-1-0 1 .5 3-1 6l-7 7-5-5 7-7z"/><circle cx="15" cy="9" r="1.5"/></svg>',
  award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="m9 14-2 8 5-3 5 3-2-8"/></svg>',
  message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z"/></svg>',
};

function makeNav(className) {
  return `<nav class="${className}" aria-label="${className === 'desktop-nav' ? 'Primary' : 'Mobile'} navigation">
    ${navigation.map((item) => `<button data-target="${item.toLowerCase()}" type="button">${item}</button>`).join('')}
  </nav>`;
}

function render() {
  document.querySelector('#root').innerHTML = `
    <main>
      <div class="scroll-progress"></div>
      <div class="background-grid" aria-hidden="true"></div>
      <div class="orb-field" aria-hidden="true">${Array.from({ length: 16 }, (_, index) => `<span class="orb orb-${index + 1}"></span>`).join('')}</div>

      <header class="site-header">
        <a class="brand" href="#home" aria-label="Afan Shafiq home"><span>AS</span><strong>Afan Shafiq</strong></a>
        ${makeNav('desktop-nav')}
        <button class="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false">☰</button>
      </header>
      <div class="mobile-nav-panel" hidden>${makeNav('mobile-nav')}</div>

      <section id="home" class="hero section-shell">
        <div class="hero-copy reveal">
          <span class="eyebrow">${icon.sparkle} ML Expert • AI Engineer • Full-Stack Builder</span>
          <h1>Building intelligent products that are<span> beautiful, scalable, and business-ready.</span></h1>
          <p>I am Afan Shafiq, an AI engineer focused on machine learning systems, generative AI products, automation, and reliable deployment. I help teams transform raw ideas into polished, measurable AI experiences.</p>
          <div class="hero-actions">
            <button class="primary-button" data-target="contact" type="button">Start a Project ${icon.arrow}</button>
            <button class="secondary-button" data-target="projects" type="button">View Work</button>
          </div>
          <div class="social-row" aria-label="Social links">
            <a href="mailto:hello@afanshafiq.ai" aria-label="Email Afan Shafiq">${icon.mail} hello@afanshafiq.ai</a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn profile">${icon.linkedin} LinkedIn</a>
            <a href="https://github.com/" aria-label="GitHub profile">${icon.github} GitHub</a>
          </div>
        </div>

        <div class="hero-visual reveal delay-1" aria-label="Animated AI system visualization">
          <div class="glass-card profile-card">
            <div class="avatar-ring"><div class="avatar-core">AI</div></div>
            <h2>Afan Shafiq</h2>
            <p>Machine Learning Expert & AI Engineer</p>
            <div class="pulse-stack"><span></span><span></span><span></span></div>
          </div>
          <div class="floating-card card-a">${icon.zap} Real-time inference</div>
          <div class="floating-card card-b">${icon.rocket} Production launch</div>
          <div class="neural-network">${Array.from({ length: 9 }, () => '<i></i>').join('')}</div>
        </div>
      </section>

      <section class="metrics section-shell" aria-label="Portfolio metrics">
        ${metrics.map((metric) => `<article class="metric-card reveal"><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join('')}
      </section>

      <section id="expertise" class="section-shell content-section">
        <div class="section-heading reveal"><span class="eyebrow">Core Expertise</span><h2>AI engineering from model concept to polished product.</h2><p>A balanced mix of research thinking, software engineering discipline, and product design taste.</p></div>
        <div class="expertise-grid">
          ${expertise.map((item, index) => `<article class="expertise-card reveal" style="--delay:${index * 120}ms"><div class="icon-wrap">${item.icon}</div><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}
        </div>
      </section>

      <section id="projects" class="section-shell content-section">
        <div class="section-heading reveal"><span class="eyebrow">Selected Work</span><h2>Portfolio concepts designed for high-impact AI outcomes.</h2></div>
        <div class="project-grid">
          ${projects.map((project, index) => `<article class="project-card reveal" style="--delay:${index * 130}ms"><div class="project-topline"><span>${project.tag}</span>${icon.award}</div><h3>${project.title}</h3><p>${project.description}</p><strong>${project.impact}</strong></article>`).join('')}
        </div>
      </section>

      <section id="process" class="section-shell content-section process-layout">
        <div class="section-heading reveal"><span class="eyebrow">Workflow</span><h2>A clear delivery system for complex AI builds.</h2><p>Every engagement is structured to reduce uncertainty, validate quickly, and ship with confidence.</p></div>
        <div class="timeline">
          ${timeline.map((step, index) => `<article class="timeline-item reveal" style="--delay:${index * 100}ms"><span>${String(index + 1).padStart(2, '0')}</span><p>${step}</p></article>`).join('')}
        </div>
      </section>

      <section class="section-shell skill-marquee" aria-label="Technical skills"><div class="marquee-track">${[...skillCloud, ...skillCloud].map((skill, index) => `<span>${skill}</span>`).join('')}</div></section>

      <section id="contact" class="section-shell contact-section reveal">
        <div><span class="eyebrow">Available for collaborations</span><h2>Need an AI product that looks premium and works reliably?</h2><p>Let’s build a model, dashboard, chatbot, automation system, or full-stack AI platform that is ready to publish and scale.</p></div>
        <a class="primary-button contact-button" href="mailto:hello@afanshafiq.ai">${icon.message} Contact Afan</a>
      </section>

      <footer><p>© 2026 Afan Shafiq. Crafted with modern AI product aesthetics.</p><a href="#home">Back to top</a></footer>
    </main>`;
}

function bindInteractions() {
  const mobilePanel = document.querySelector('.mobile-nav-panel');
  const menuButton = document.querySelector('.menu-toggle');
  const progress = document.querySelector('.scroll-progress');

  const scrollToTarget = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    mobilePanel.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  };

  document.querySelectorAll('[data-target]').forEach((button) => {
    button.addEventListener('click', () => scrollToTarget(button.dataset.target));
  });

  menuButton.addEventListener('click', () => {
    mobilePanel.hidden = !mobilePanel.hidden;
    const isOpen = !mobilePanel.hidden;
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    progress.style.transform = `scaleX(${currentProgress})`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
}

render();
bindInteractions();
