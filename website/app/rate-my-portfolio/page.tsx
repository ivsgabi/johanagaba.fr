export default function RateMyPortfolioPage() {
  return (
    <main>
      <h1>RATE MY PORTFOLIO</h1>
      <p>
        A Power BI dashboard of visitor feedback collected through Supabase.
      </p>

      <div style={{ width: "100%", height: "80vh" }}>
        <iframe
          title="Rate My Portfolio Dashboard"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/view?r=eyJrIjoiODdlY2JjMGMtZjYyYi00ODQ2LWEyZWEtYzA1ZjQ2ZWNhMWMwIiwidCI6ImNkMzE5NjcxLTUyZTctNGE2OC1hZmE5LWZjZjhmODlmMDllYSIsImMiOjN9"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </main>
  );
}