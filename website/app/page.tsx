'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface Project {
  title: string;
  description: string;
  link?: string;
}

interface Education {
  schoolName: string;
  description: string;
  link?: string;
}

interface Connect {
  app: string;
  link?: string;
}

interface Illustration {
  id: string;
  name: string;
  src: string;
  playlistTitle?: string;
  coverSrc?: string;
  embedUrl?: string;
  projects?: Project[];
  education?: Education[];
  connect?: Connect[]
}

const illustrations: Illustration[] = [
  { id: 'badge', name: 'Badge', src: '/illustrations/star-badge.png', 
    education: [
      {
        schoolName: "EPITECH Paris",
        description: "blablabla",
        link: "",
      },
      {
        schoolName: "McGill University, Montréal",
        description: "blablabla",
        link: "",
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
  { id: 'standing', name: 'Standing', src: '/illustrations/star-main.png' },
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
        app: "LinkedIn",
        link: "",
      },
      {
        app: "GitHub",
        link: "",
      },
      {
        app: "Mail",
        link: "",
      },
      ],
   },
];

export default function Home() {
  const [activeStarId, setActiveStarId] = useState<string | null>(null);

  const toggleStar = (id: string) => {
    setActiveStarId((prev) => (prev === id ? null : id));
  };

  // Ferme la carte ouverte dès qu'on clique n'importe où ailleurs sur la page
  useEffect(() => {
    if (!activeStarId) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      // Si le clic ne provient ni d'une étoile ni d'une carte ouverte, on ferme
      if (!target.closest(`.${styles.star_item}`)) {
        setActiveStarId(null);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [activeStarId]);

  return (
    <main className={styles.fullscreen_container}>
      {/* Section Textuelle */}
      <div className={styles.text_section}>
        <span className={styles.about_tag}>about</span>
        <h1 className={styles.title}>Johana</h1>
        <p className={styles.subtitle}>Software Engineer – AI/Data · Python · ML · SQL · Cloud</p>
      </div>

      {/* Rangée des étoiles */}
      <div className={styles.illustration_box}>
        {illustrations.map((item) => {
          const isSelected = activeStarId === item.id;

          return (
            <div
              key={item.id}
              className={`${styles.star_item} ${isSelected ? styles.active : ''}`}
              onClick={() => toggleStar(item.id)}
            >
              {/* Image de l'étoile */}
              <Image
                unoptimized
                src={item.src}
                alt={item.name}
                width={250}
                height={250}
                priority
              />

              {/* 1. CARTE PROJETS (Sous l'étoile Desk) */}
              {/* APPARITION EN ESCALIER (Sous l'étoile Desk) */}
                {/* SECTION PROJETS ÉPURÉE & CENTRÉE (Sous l'étoile Desk) */}
                {isSelected && item.id === 'desk' && item.projects && (
                  <div
                    className={styles.list_container}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Titre de section */}
                    <span className={styles.list_title}>MAIN PROJECTS</span>

                    {/* Liste des projets centrés avec apparition échelonnée */}
                    <div className={styles.item_container}>
                      {item.projects.map((project, index) => (
                        <a
                          key={index}
                          href={project.link || '#'}
                          target={project.link ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className={styles.item_content}
                          style={{ animationDelay: `${(index + 1) * 90}ms` }}
                        >
                          <span className={styles.item_title}>{project.title}</span>
                          <span className={styles.item_desc}>{project.description}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {isSelected && item.id === 'badge' && item.education && (
                  <div
                    className={styles.list_container}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Titre de section */}
                    <span className={styles.list_title}>EDUCATION</span>

                    {/* Liste des projets centrés avec apparition échelonnée */}
                    <div className={styles.item_container}>
                      {item.education.map((item, index) => (
                        <a
                          key={index}
                          href={item.link || '#'}
                          target={item.link ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className={styles.item_content}
                          style={{ animationDelay: `${(index + 1) * 90}ms` }}
                        >
                          <span className={styles.item_title}>{item.schoolName}</span>
                          <span className={styles.item_desc}>{item.description}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {isSelected && item.id === 'phone' && item.connect && (
                  <div
                    className={styles.list_container}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Titre de section */}
                    <span className={styles.list_title}>EDUCATION</span>

                    {/* Liste des projets centrés avec apparition échelonnée */}
                    <div className={styles.item_container}>
                      {item.connect.map((item, index) => (
                        <a
                          key={index}
                          href={item.link || '#'}
                          target={item.link ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className={styles.item_content}
                          style={{ animationDelay: `${(index + 1) * 90}ms` }}
                        >
                          <span className={styles.item_title}>{item.app}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {/* 2. CARTE PLAYLIST (Pour l'étoile Music) */}
              {isSelected && item.id === 'music' && (
                <div
                  className={styles.playlist_card}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.card_header}>
                    <span className={styles.info_badge}>i</span>
                    <button
                      type="button"
                      className={styles.close_btn}
                      onClick={() => setActiveStarId(null)}
                      aria-label="Fermer"
                    >
                      ✕
                    </button>
                  </div>

                  <a
                    href={item.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cover_link}
                  >
                    <div className={styles.cover_container}>
                      <Image
                        unoptimized
                        src={item.coverSrc || '/illustrations/star-music.png'}
                        alt={item.playlistTitle || 'Playlist'}
                        width={54}
                        height={54}
                        className={styles.cover_image}
                      />
                      <div className={styles.play_overlay}>
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className={styles.cover_info}>
                      <p className={styles.playlist_name}>{item.playlistTitle}</p>
                      <span className={styles.open_tag}>Écouter sur Apple Music ↗</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}