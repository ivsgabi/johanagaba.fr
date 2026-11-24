
'use client';

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl rounded-xl bg-[#171717] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 text-xl text-white"
          aria-label="Close dashboard"
        >
          ✕
        </button>

        <h2 className="mb-2 text-xl text-white">
          RATE MY PORTFOLIO
        </h2>

        <p className="mb-5 text-sm text-gray-400">
          A Power BI dashboard of visitor feedback collected through Supabase.
        </p>

        <div className="h-[75vh] w-full overflow-hidden rounded-lg">
          <iframe
            title="Ratings Dashboard"
            src="https://app.powerbi.com/view?r=eyJrIjoiODdlY2JjMGMtZjYyYi00ODQ2LWEyZWEtYzA1ZjQ2ZWNhMWMwIiwidCI6ImNkMzE5NjcxLTUyZTctNGE2OC1hZmE5LWZjZjhmODlmMDllYSIsImMiOjN9"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
