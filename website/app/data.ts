import { Illustration } from "./types";

export const data: Illustration[] = [
  { id: 'badge', name: 'Badge', src: '/illustrations/star-badge.png', 
    education: [
      {
        schoolName: "EPITECH Paris",
        year: "2022-2027",
        description: "Programme Grande Ecole en Sciences de l'Information (RNCP 7), M2 (finale year).",
        link: "https://www.epitech.eu/",
      },
      {
        schoolName: "McGill University, Montréal",
        year: "2025-2026",
        description: "Certificate In Management",
        link: "https://www.mcgill.ca/",
      },
    ],
   },
  {
    id: 'desk',
    name: 'Desk',
    src: '/illustrations/star-desk.png',
    projects: [
      {
        title: 'STILL NO JOB',
        description: 'AI & Data Processing Pipeline with Python',
        link: 'https://github.com/...',
      },
      {
        title: 'SNEAK FROM GABI',
        description: 'Interactive Computer Vision & QR Engine',
        link: 'https://github.com/...',
      },
      {
        title: 'RTYPE',
        description: 'Interactive Computer Vision & QR Engine',
        link: 'https://github.com/...',
      },
    ],
  },
  { id: 'main', name: 'main', src: '/illustrations/star-main.png',
    main: [
      {
        title: 'Welcome on my portoflio website. Coded with ... Source code here ... Rate this portfolio',
        text: 'RATE THIS PORTFOLIO',
      },
    ]
   },
  {
    id: 'music',
    name: 'Music',
    src: '/illustrations/star-music.png',
    playlistTitle: 'PUBLIC',
    coverSrc: '/assets/playlist-cover.png',
    embedUrl: 'https://music.apple.com/fr/playlist/public/pl.u-38oWXPluYLY1gYJ',
  },
  { id: 'phone', name: 'Phone', src: '/illustrations/star-phone.png',
    connect: [
      {
        app: "LINKEDIN",
        subtitle: "Johana Gaba",
        link: "https://www.linkedin.com/in/johana-gaba-54865926b/",
      },
      {
        app: "GITHUB",
        subtitle: "@ivsgabi",
        link: "https://github.com/ivsgabi",
      },
      {
        app: "MAIL",
        subtitle: "",
        link: "",
      },
      ],
   },
];