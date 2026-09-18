'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface Illustration {
  id: string;
  name: string;
  src: string;
  playlistTitle?: string;
  coverSrc?: string;
  embedUrl?: string;
}

const illustrations: Illustration[] = [
  { id: 'badge', name: 'Badge', src: '/illustrations/star-badge.png' },
  { id: 'desk', name: 'Desk', src: '/illustrations/star-desk.png' },
  { id: 'standing', name: 'Standing', src: '/illustrations/star-main.png' },
  { id: 'music', name: 'Music', src: '/illustrations/star-music.png', playlistTitle: 'PUBLIC', coverSrc: '/assets/playlist-cover.png', embedUrl: 'https://music.apple.com/fr/playlist/public/pl.u-38oWXPluYLY1gYJ' },
  { id: 'phone', name: 'Phone', src: '/illustrations/star-phone.png' },
];

export default function Home() {
  const [activeStarId, setActiveStarId] = useState<string | null>(null);

  const toggleStar = (id: string) => {
    setActiveStarId((prev) => (prev === id ? null : id));
  };

  return (
    <main className={styles.fullscreen_container}>
      <div className={styles.text_section}>
        <span className={styles.about_tag}>about</span>
        <h1 className={styles.title}>Johana</h1>
        <p className={styles.subtitle}>Software Engineer – AI/Data · Python · ML · SQL · Cloud</p>
      </div>

      <div className={styles.illustration_box}>
        {illustrations.map((item) => {
          const isSelected = activeStarId === item.id;

          return (
            <div
              key={item.id}
              className={`${styles.star_item} ${isSelected ? styles.active : ''}`}
              onClick={() => toggleStar(item.id)}
            >
              <Image
                unoptimized
                src={item.src}
                alt={item.name}
                width={250}
                height={250}
                priority
              />

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