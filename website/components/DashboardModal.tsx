
'use client';

import styles from './dashboard.module.css';

type DashboardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DashboardModal({
  isOpen,
  onClose,
}: DashboardModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div className={styles.header_content}>
            <h2 className={styles.title}>
              RATE MY PORTFOLIO
            </h2>

            <p className={styles.description}>
              A Power BI dashboard of visitor feedback collected through Supabase.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={styles.close_btn}
            aria-label="Close dashboard"
          >
            ✕
          </button>
        </div>

        <div className={styles.dashboard_container}>
          <iframe
            title="Rate My Portfolio Dashboard"
            src="https://app.powerbi.com/view?r=eyJrIjoiODdlY2JjMGMtZjYyYi00ODQ2LWEyZWEtYzA1ZjQ2ZWNhMWMwIiwidCI6ImNkMzE5NjcxLTUyZTctNGE2OC1hZmE5LWZjZjhmODlmMDllYSIsImMiOjN9"
            className={styles.dashboard_iframe}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
