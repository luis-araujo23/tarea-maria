import './style.css'
import { profile } from './data'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('No se encontró el contenedor #app')
}

function contactIcon(id: string): string {
  switch (id) {
    case 'email':
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
        </svg>`
    case 'whatsapp':
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.84.5 3.63 1.45 5.2L2 22l5.12-1.34a9.9 9.9 0 0 0 4.92 1.25h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.75 13.98c-.24.68-1.4 1.24-1.93 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.56.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.56.17.28.74 1.22 1.59 1.98 1.1.97 2.02 1.27 2.3 1.41.29.14.45.12.62-.07.17-.2.72-.84.91-1.13.2-.28.39-.24.66-.14.26.1 1.68.79 1.97.93.29.14.48.21.55.33.07.12.07.68-.17 1.36Z"/>
        </svg>`
    case 'github':
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.5c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
        </svg>`
    default:
      return ''
  }
}

app.innerHTML = `
  <div class="bg-glow" aria-hidden="true"></div>
  <div class="bg-grid" aria-hidden="true"></div>

  <header class="site-header" id="inicio">
    <a class="brand" href="#inicio">${profile.shortName}</a>
    <nav class="nav" aria-label="Navegación principal">
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-name">
      <div class="hero__media">
        <div class="avatar reveal" data-delay="0">
          <img
            src="${profile.photo}"
            alt="${profile.photoAlt}"
            width="440"
            height="440"
          />
        </div>
      </div>
      <div class="hero__copy">
        <p class="eyebrow reveal" data-delay="80">Currículum · Landing personal</p>
        <h1 id="hero-name" class="reveal" data-delay="140">${profile.name}</h1>
        <p class="hero__title reveal" data-delay="220">${profile.title}</p>
        <p class="hero__lead reveal" data-delay="300">
          ${profile.university} · ${profile.age} años
        </p>
        <div class="hero__actions reveal" data-delay="380">
          <a class="btn btn--primary" href="#contacto">Contactar</a>
          <a class="btn btn--ghost" href="#proyectos">Ver proyectos</a>
        </div>
      </div>
    </section>

    <section class="section about" id="sobre-mi" aria-labelledby="about-title">
      <div class="section__intro reveal">
        <h2 id="about-title">Sobre mí</h2>
        <p>Quién soy y qué busco.</p>
      </div>
      <div class="about__grid">
        <article class="about__story reveal">
          ${profile.about.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </article>
        <aside class="about__facts reveal" data-delay="120">
          <dl>
            <div>
              <dt>Edad</dt>
              <dd>${profile.age} años</dd>
            </div>
            <div>
              <dt>Nacimiento</dt>
              <dd>${profile.birthDate}</dd>
            </div>
            <div>
              <dt>Universidad</dt>
              <dd>${profile.university}</dd>
            </div>
            <div>
              <dt>Semestre</dt>
              <dd>8.º semestre</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="section skills" id="habilidades" aria-labelledby="skills-title">
      <div class="section__intro reveal">
        <h2 id="skills-title">Habilidades</h2>
        <p>Tecnologías y fortalezas que uso en mis proyectos.</p>
      </div>
      <ul class="skills__list reveal">
        ${profile.skills
          .map((skill, index) => `<li class="skill-tag" style="--i:${index}">${skill}</li>`)
          .join('')}
      </ul>
    </section>

    <section class="section projects" id="proyectos" aria-labelledby="projects-title">
      <div class="section__intro reveal">
        <h2 id="projects-title">Experiencia / Proyectos</h2>
        <p>Ejemplos de trabajos y prácticas para mostrar mi enfoque.</p>
      </div>
      <div class="projects__grid">
        ${profile.projects
          .map(
            (project, index) => `
          <article class="project-card reveal" data-delay="${index * 90}">
            <figure class="project-card__media">
              <img
                src="${project.image}"
                alt="${project.imageAlt}"
                loading="lazy"
                width="900"
                height="560"
              />
            </figure>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span>${project.period}</span>
                <span>${project.role}</span>
              </div>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <ul class="project-card__tags">
                ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
              </ul>
            </div>
          </article>
        `,
          )
          .join('')}
      </div>
    </section>

    <section class="section contact" id="contacto" aria-labelledby="contact-title">
      <div class="section__intro reveal">
        <h2 id="contact-title">Contacto</h2>
        <p>Escríbeme por correo, WhatsApp o revisa mi GitHub.</p>
      </div>
      <div class="contact__links reveal">
        ${profile.contacts
          .map(
            (contact) => `
          <a
            class="contact-link"
            href="${contact.href}"
            ${contact.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
            aria-label="${contact.label}"
          >
            <span class="contact-link__icon">${contactIcon(contact.id)}</span>
            <span class="contact-link__label">${contact.label}</span>
          </a>
        `,
          )
          .join('')}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${profile.name}</p>
    <a href="https://github.com/luis-araujo23" target="_blank" rel="noopener noreferrer">
      github.com/luis-araujo23
    </a>
  </footer>
`

function setupReveal(): void {
  const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        const delay = Number(el.dataset.delay ?? 0)
        window.setTimeout(() => el.classList.add('is-visible'), delay)
        observer.unobserve(el)
      }
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
  )

  items.forEach((item) => observer.observe(item))
}

function setupSmoothNav(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

setupReveal()
setupSmoothNav()
