import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://pir.my.id";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Site Moved</title>
        <meta name="description" content="Site has moved to pir.my.id" />
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
          }

          .main {
            text-align: center;
            padding: 2rem;
          }

          .title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #333;
          }

          .description {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: #666;
          }

          .link {
            font-size: 1.5rem;
            color: #0070f3;
            text-decoration: none;
            border: 2px solid #0070f3;
            padding: 1rem 2rem;
            border-radius: 8px;
            display: inline-block;
            transition: all 0.2s ease;
          }

          .link:hover {
            background-color: #0070f3;
            color: white;
          }

          .footer {
            font-size: 1rem;
            margin-top: 2rem;
            color: #888;
          }
        `}</style>
      </Head>

      <div className="container">
        <main className="main">
          <h1 className="title">Site Moved</h1>

          <p className="description">This site has moved to:</p>

          <a href="https://pir.my.id" className="link">
            https://pir.my.id
          </a>

          <p className="footer">
            You will be redirected automatically in a few seconds...
          </p>
        </main>
      </div>
    </>
  );
}
