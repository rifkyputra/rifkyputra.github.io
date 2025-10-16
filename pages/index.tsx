import Head from "next/head";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Head>
        <title>Site Moved</title>
        <meta name="description" content="Site has moved to pir.my.id" />
      </Head>

      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Site Moved
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            color: "#666",
          }}
        >
          This site has moved to:
        </p>

        <a
          href="https://pir.my.id"
          style={{
            fontSize: "1.5rem",
            color: "#0070f3",
            textDecoration: "none",
            border: "2px solid #0070f3",
            padding: "1rem 2rem",
            borderRadius: "8px",
            display: "inline-block",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0070f3";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#0070f3";
          }}
        >
          https://pir.my.id
        </a>

        <p
          style={{
            fontSize: "1rem",
            marginTop: "2rem",
            color: "#888",
          }}
        >
          You will be redirected automatically in a few seconds...
        </p>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          setTimeout(function() {
            window.location.href = 'https://pir.my.id';
          }, 3000);
        `,
        }}
      />
    </div>
  );
}
