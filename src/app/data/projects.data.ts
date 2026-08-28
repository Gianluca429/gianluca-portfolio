import { PortfolioProject } from '../models/project.model';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'osteria-lume',
    name: 'Osteria Lume',
    category: 'Sito web',

    description:
      'Un’esperienza digitale elegante e immersiva per un ristorante italiano contemporaneo.',

    image: 'images/projects/osteria-lume.jpg',
    imageAlt: 'Anteprima del sito Osteria Lume',

    technologies: ['Angular', 'SCSS', 'Responsive'],

    year: '2026',
    role: 'Design & Front-end',
    projectType: 'Sito web per ristorante',

    overview:
      'Osteria Lume è un concept digitale pensato per un ristorante italiano contemporaneo. Il progetto combina fotografia, tipografia editoriale e una struttura essenziale per costruire un’esperienza elegante e immediata.',

    challenge:
      'L’obiettivo era creare un sito capace di trasmettere l’atmosfera del locale senza appesantire la navigazione, mantenendo al centro cucina, immagini e prenotazione.',

    approach:
      'Ho lavorato su una struttura one-page con una forte gerarchia visiva, immagini immersive e microinterazioni molto leggere. L’interfaccia è stata sviluppata in Angular e adattata per desktop e mobile.',

    highlights: [
      'Hero fotografica immersiva',
      'Layout editoriale responsive',
      'Sezioni menu, cucina e galleria',
      'CTA dedicate alla prenotazione',
    ],

    gallery: {
      main: {
        src: 'images/projects/osteria-lume/gallery-main.jpg',
        alt: 'Sezione La cucina del sito Osteria Lume',
      },

      secondary: [
        {
          src: 'images/projects/osteria-lume/gallery-01.jpg',
          alt: 'Galleria fotografica del sito Osteria Lume',
        },
        {
          src: 'images/projects/osteria-lume/gallery-02.jpg',
          alt: 'Sezione prenotazioni e contatti di Osteria Lume',
        },
      ],

      mobile: {
        src: 'images/projects/osteria-lume/mobile.jpg',
        alt: 'Hero mobile del sito Osteria Lume',
      },

      mobileText:
        'La stessa atmosfera viene mantenuta anche su smartphone, con una composizione verticale che dà priorità a fotografia, contenuto e prenotazione.',
    },

    demoUrl: '/osteria-lume/',
  },

  {
    slug: 'forma-studio',
    name: 'FORMA Studio',
    category: 'Portfolio',

    description:
      'Un portfolio editoriale e minimale pensato per uno studio di architettura e interior design.',

    image: 'images/projects/forma-studio.jpg',
    imageAlt: 'Anteprima del portfolio FORMA Studio',

    technologies: ['Angular', 'TypeScript', 'SCSS'],

    year: '2026',
    role: 'Design & Front-end',
    projectType: 'Portfolio di architettura',

    overview:
      'FORMA Studio è un concept di portfolio digitale per uno studio di architettura e interior design, costruito attorno a un linguaggio visivo essenziale e alla centralità delle immagini.',

    challenge:
      'Il progetto doveva lasciare grande spazio ai lavori dello studio mantenendo allo stesso tempo una forte identità tipografica e una navigazione estremamente pulita.',

    approach:
      'Ho scelto una griglia rigorosa, una palette neutra e grandi immagini architettoniche. La tipografia e gli spazi bianchi definiscono il ritmo della pagina senza competere con i progetti mostrati.',

    highlights: [
      'Direzione visiva minimale',
      'Griglia editoriale',
      'Grande attenzione alla fotografia',
      'Layout responsive',
    ],

    gallery: {
      main: {
        src: 'images/projects/forma-studio/gallery-main.jpg',
        alt: 'Progetto Casa Nova nel portfolio FORMA Studio',
      },

      secondary: [
        {
          src: 'images/projects/forma-studio/gallery-01.jpg',
          alt: 'Archivio dei progetti di FORMA Studio',
        },
        {
          src: 'images/projects/forma-studio/gallery-02.jpg',
          alt: 'Pagina di dettaglio del progetto Casa Nova',
        },
      ],

      mobile: {
        src: 'images/projects/forma-studio/mobile.jpg',
        alt: 'Hero mobile del portfolio FORMA Studio',
      },

      mobileText:
        'Su mobile la gerarchia editoriale resta protagonista: tipografia, immagini e spazi si ricompongono mantenendo il carattere minimale del progetto.',
    },

    demoUrl: '/forma-studio/',
  },

  {
    slug: 'pulse-dashboard',
    name: 'Pulse Dashboard',
    category: 'Web app',

    description:
      'Una dashboard SaaS responsive per gestire progetti, clienti, pagamenti e attività operative.',

    image: 'images/projects/pulse-dashboard.jpg',
    imageAlt: 'Anteprima dell’interfaccia Pulse Dashboard',

    technologies: ['Angular', 'Signals', 'RxJS'],

    year: '2026',
    role: 'UX/UI & Front-end',
    projectType: 'Dashboard SaaS',

    overview:
      'Pulse è una dashboard SaaS progettata per centralizzare la gestione quotidiana di progetti, clienti e fatture attraverso un’interfaccia semplice, responsive e data-driven.',

    challenge:
      'La sfida principale era organizzare molte informazioni e funzionalità senza rendere l’interfaccia pesante, mantenendo una gerarchia chiara su desktop, tablet e mobile.',

    approach:
      'L’applicazione è stata sviluppata con Angular utilizzando Signals, servizi centralizzati e persistenza locale. Ho progettato componenti riutilizzabili, CRUD completi, filtri, notifiche e preferenze persistenti.',

    highlights: [
      'Gestione progetti, clienti e fatture',
      'CRUD e persistenza locale',
      'Dashboard con dati dinamici',
      'Notifiche e impostazioni globali',
    ],

    gallery: {
      main: {
        src: 'images/projects/pulse-dashboard/gallery-main.jpg',
        alt: 'Gestione dei progetti in Pulse Dashboard',
      },

      secondary: [
        {
          src: 'images/projects/pulse-dashboard/gallery-01.jpg',
          alt: 'Gestione clienti di Pulse Dashboard',
        },
        {
          src: 'images/projects/pulse-dashboard/gallery-02.jpg',
          alt: 'Gestione fatture di Pulse Dashboard',
        },
      ],

      mobile: {
        src: 'images/projects/pulse-dashboard/mobile.jpg',
        alt: 'Gestione progetti di Pulse Dashboard su smartphone',
      },

      mobileText:
        'Su smartphone l’interfaccia cambia struttura: navigazione compatta, filtri adattivi e contenuti trasformati in card permettono di mantenere leggibilità e operatività.',
    },

    demoUrl: 'https://pulse.gianlucaguarino.it',
  },
];
