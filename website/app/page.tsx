'use client';


import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { data } from "./data";
import RatingModal from "@/components/RatingModal";


export default function Home() {
  const [activeStarId, setActiveStarId] = useState<string | null>(null);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const toggleStar = (id: string) => {
    setActiveStarId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (!activeStarId) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
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
      <div className={styles.text_section}>
        <h1 className={styles.title}>Johana Gaba</h1>
        <p className={styles.subtitle}>Software Engineer</p>
        <p className={styles.smaller_subtitle}>AI/Data · Python · ML · SQL · Cloud</p>
      </div>

      {/* ALIGNED STAR ICONS */}
      <div className={styles.illustration_box}>
        {data.map((item) => {
          const isSelected = activeStarId === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.star_item} ${isSelected ? styles.active : ''}`}
                onClick={() => toggleStar(item.id)}
              >
                {/* STAR ICON SRC */}
                <Image
                  unoptimized
                  src={item.src}
                  alt={item.name}
                  width={250}
                  height={250}
                  priority
                />

              {isSelected && item.id === 'badge' && item.education && (
                  <div
                    className={styles.list_container}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* TITRE */}
                    <span className={styles.list_title}>EDUCATION</span>
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
                          {/* CONTENT */}
                          <span className={`${styles.item_title} hover:underline hover:underline-offset-2`}>{item.schoolName}</span>
                          <span className={styles.item_desc}>{item.description}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
             
              {isSelected && item.id === 'desk' && item.projects && (
                <div
                  className={styles.list_container}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className={styles.list_title}>MAIN PROJECTS</span>
                  <div className={styles.item_container}>
                    {item.projects.map((project, index) => {
                      const isInWorks = project.status === "in_works";

                      return isInWorks ? ( /* disabled */
                        <div
                          key={index}
                          className={`${styles.item_content} ${styles.item_disabled}`}
                          style={{ animationDelay: `${(index + 1) * 90}ms` }}
                        >
                          <span className={styles.item_title}>{project.title}</span>
                          <span className={styles.item_desc}>{project.description}</span>
                        </div>
                      ) : (
                        <a
                          key={index}
                          href={project.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.item_content}
                          style={{ animationDelay: `${(index + 1) * 90}ms` }}
                        >
                          <span className={styles.item_title}>{project.title}</span>
                          <span className={styles.item_desc}>{project.description}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {isSelected && item.id === 'main' && item.main && (
                <div
                  className={styles.list_container}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className={styles.list_title}>WELCOME</span>

                  <div className={styles.item_container}>
                    {item.main.map((entry, index) => (
                      <div
                        key={index}
                        className={styles.item_content}
                        style={{ animationDelay: `${(index + 1) * 90}ms` }}
                      >
                        <a
                          href={entry.linkCode || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.item_desc} text-[#6b7280] hover:underline hover:underline-offset-2 hover:text-[#b6b7b8]`}
                        >
                          {entry.sourceCode}
                        </a>

                        <div className="py-[1.2px]" />

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsRatingOpen(true);
                          }}
                          className={`${styles.item_desc} ${styles.action_btn}`}
                        >
                          {entry.rating}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isSelected && item.id === 'phone' && item.connect && (
                  <div
                    className={styles.list_container}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className={styles.list_title}>CONNECT WITH ME</span>

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
                          <span className={`${styles.item_app} hover:underline hover:underline-offset-2`}>{item.app}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {/* MUSIC (iFrame) */}
              { isSelected && item.id === 'music' && (
                <div
                  className={styles.playlist_card}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.card_header}>
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
                      <span className={styles.open_tag}> Music</span>
                    </div>
                  </a>
                </div>
              )}

            </div>
          );
        })}
      </div>
      <footer className={styles.footer}>
        <p className={styles.footer_text}>
          © {new Date().getFullYear()} — All rights reserved
        </p>
        <p className={styles.footer_subtext}>
          Powered by{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer_link}
          >
            Next.js
          </a>{" "}
          &amp;{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer_link}
          >
            Vercel
          </a>
        </p>
      </footer>
      <RatingModal
        isOpen={isRatingOpen}
        onClose={() => setIsRatingOpen(false)}
      />
    </main>
  );
}