
"use client";

import { useState } from "react";
import styles from "./rating.module.css";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RatingModal({ isOpen, onClose }: RatingModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [role, setRole] = useState<string>("");
  const [discoverySource, setDiscoverySource] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role || !discoverySource) {
        setError("Please complete both selections before submitting.");
        return;
      }
      
    setLoading(true);
    setError("");

    const payload = {
      score: rating,
      role,
      discovery_source: discoverySource || null,
      suggestion: suggestion.trim(),
      created_at: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setRating(5);
        setRole("");
        setDiscoverySource("");
        setSuggestion("");
        onClose();
      }, 1800);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>RATE THIS PORTFOLIO</span>
          <button
            type="button"
            className={styles.close_btn}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className={styles.success_msg}>
            Thank you! Your feedback has been submitted successfully.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field_group}>
              <label className={styles.label}>OVERALL RATING</label>
              <div className={styles.star_selector}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    type="button"
                    key={num}
                    className={`${styles.score_btn} ${
                      rating >= num ? styles.score_active : ""
                    }`}
                    onClick={() => setRating(num)}
                    aria-label={`${num} out of 5`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field_group}>
              <label className={styles.label}>
                WHAT BEST DESCRIBES YOU?
              </label>
              <div className={styles.choice_group}>
                {[
                  "Recruiter",
                  "Developer / Engineer",
                  "Student",
                  "Other"
                ].map((r) => (
                  <button
                    type="button"
                    key={r}
                    className={`${styles.choice_btn} ${
                      role === r ? styles.choice_active : ""
                    }`}
                    onClick={() => setRole(r)}
                    aria-pressed={role === r}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field_group}>
              <label className={styles.label}>
                HOW DID YOU FIND ME?
              </label>
              <div className={styles.choice_group}>
                {[
                  "LinkedIn",
                  "GitHub",
                  "Through someone",
                  "Event / Networking",
                  "Other",
                ].map((source) => (
                  <button
                    type="button"
                    key={source}
                    className={`${styles.choice_btn} ${
                      discoverySource === source ? styles.choice_active : ""
                    }`}
                    onClick={() => setDiscoverySource(source)}
                    aria-pressed={discoverySource === source}
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field_group}>
              <label className={styles.label}>
                SUGGESTIONS / FEEDBACK
              </label>
              <textarea
                className={styles.textarea}
                rows={3}
                placeholder="Any remark or bug?"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
            </div>

            {error && <p className={styles.error_msg}>{error}</p>}

            <button
              type="submit"
              className={styles.submit_btn}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit feedback"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
