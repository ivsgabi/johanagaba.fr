import { Illustration } from "./types";

export const data: Illustration[] = [
  { id: 'badge', name: 'Badge', src: '/illustrations/star-badge.png', 
    education: [
      {
        schoolName: "EPITECH Paris",
        year: "2022-2027",
        description: "Programme Grande Ecole\n Expert en ingénierie logicielle (RNCP niv. 7)",
        link: "https://www.epitech.eu/",
      },
      {
        schoolName: "McGill University",
        year: "2025-2026",
        description: "Undergraduate Certificate in Management",
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
        description: 'Turning my job hunt into Python-powered predictive analytics.',
        link: 'https://github.com/...',
      },
      {
        title: 'SNEAK FROM GABI',
        description: 'Building a personalized AI recommender with taste modeling, Python pipelines and AI agents.',
        link: 'https://github.com/...',
      },
      {
        title: 'RTYPE',
        description: 'C++ multiplayer game with real-time networking and distributed architecture.',
        link: 'https://github.com/...',
      },
    ],
  },
  { id: 'main', name: 'main', src: '/illustrations/star-main.png',
    main: [
      {
        sourceCode: "SEE SOURCE CODE",
        linkCode: "",
        rating: "RATE THIS PORTFOLIO",
        ratingAction: ""
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