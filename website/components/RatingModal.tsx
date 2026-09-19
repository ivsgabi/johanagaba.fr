"use client";

import { useState } from "react";
import styles from "./rating.module.css";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RatingModal({ isOpen, onClose }: RatingModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [role, setRole] = useState<string>("Recruiter");
  const [suggestion, setSuggestion] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      score: rating,
      role: role,
      suggestion: suggestion.trim(),
      created_at: new Date().toISOString(),
    };

    try {
      // Endpoint API
      await fetch("/api/rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>RATE THIS PORTFOLIO</span>
          <button className={styles.close_btn} onClick={onClose}>×</button>
        </div>

        {submitted ? (
          <p className={styles.success_msg}>Merci ! Données enregistrées.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field_group}>
              <label className={styles.label}>NOTE GLOBALE</label>
              <div className={styles.star_selector}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    type="button"
                    key={num}
                    className={`${styles.score_btn} ${rating >= num ? styles.score_active : ""}`}
                    onClick={() => setRating(num)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field_group}>
              <label className={styles.label}>WHO ARE YOU ? </label>
              <div className={styles.role_buttons}>
                {["Recruiter", "Engineer", "Designer", "Visitor"].map((r) => (
                  <button
                    type="button"
                    key={r}
                    className={`${styles.role_btn} ${role === r ? styles.role_active : ""}`}
                    onClick={() => setRole(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field_group}>
              <label className={styles.label}>SUGGESTIONS / FEEDBACK</label>
              <textarea
                className={styles.textarea}
                rows={3}
                placeholder="any remark or bug ?"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.submit_btn} disabled={loading}>
              {loading ? "Envoi..." : "Envoyer le feedback"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}