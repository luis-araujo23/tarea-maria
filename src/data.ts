export interface Project {
  title: string
  role: string
  period: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
}

export interface ContactLink {
  id: string
  label: string
  href: string
  external?: boolean
}

export const profile = {
  name: 'Luis Alfonso Araujo León',
  shortName: 'Luis Araujo',
  title: 'Estudiante de Ingeniería · 8.º semestre',
  age: 24,
  birthDate: '24/10/2001',
  university: 'Universidad José Antonio Páez',
  initials: 'LA',
  photo: '/luis-araujo.png',
  photoAlt: 'Foto de Luis Alfonso Araujo León',
  about: [
    'Soy Luis Alfonso Araujo León, tengo 24 años (nacido el 24/10/2001) y actualmente curso el 8.º semestre en la Universidad José Antonio Páez.',
    'Me interesa el desarrollo web, la resolución de problemas y construir productos digitales claros, útiles y bien presentados.',
    'Busco oportunidades para aplicar lo que aprendo en proyectos reales, crecer en equipo y seguir fortaleciendo mis habilidades técnicas.',
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Flexbox',
    'CSS Grid',
    'Git',
    'GitHub',
    'Responsive Design',
    'UI / UX básico',
    'Trabajo en equipo',
    'Resolución de problemas',
  ],
  projects: [
    {
      title: 'Sistema de gestión académica',
      role: 'Desarrollador frontend',
      period: '2025',
      description:
        'Prototipo web para consultar horarios, materias y notas. Interfaz mobile-first con paneles organizados en CSS Grid.',
      tags: ['HTML', 'CSS', 'TypeScript'],
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Escritorio con laptop y documentos de estudio',
    },
    {
      title: 'Landing page para evento universitario',
      role: 'Diseño y maquetación',
      period: '2024',
      description:
        'Página promocional con hero a pantalla completa, secciones claras y adaptaciones para móvil y escritorio.',
      tags: ['HTML', 'CSS', 'Flexbox'],
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Público en un evento universitario',
    },
    {
      title: 'Catálogo de proyectos personales',
      role: 'Full stack junior (ejemplo)',
      period: '2024',
      description:
        'Mini portafolio con tarjetas de proyectos, filtros por tecnología y enlaces a repositorios en GitHub.',
      tags: ['TypeScript', 'Vite', 'Git'],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Pantalla con código de programación',
    },
    {
      title: 'App de hábitos diarios',
      role: 'Proyecto académico',
      period: '2023',
      description:
        'Aplicación sencilla para registrar hábitos, progreso semanal y recordatorios. Enfoque en usabilidad y diseño limpio.',
      tags: ['JavaScript', 'CSS Grid', 'UX'],
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Lista de tareas y planificación diaria',
    },
  ] satisfies Project[],
  contacts: [
    {
      id: 'email',
      label: 'Gmail',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=luisalfonsoaraujoleon@gmail.com&su=Contacto%20desde%20tu%20landing&body=Hola%20Luis%2C%20vi%20tu%20landing%20y%20quiero%20escribirte.',
      external: true,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/584147342171?text=Hola%20Luis%2C%20vi%20tu%20landing%20y%20me%20gustar%C3%ADa%20contactarte.',
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/luis-araujo23',
      external: true,
    },
  ] satisfies ContactLink[],
}
