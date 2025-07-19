import { Helmet } from 'react-helmet'
import Footer from './page/Footer'
import Home from './page/Home'
import Navbar from './page/Navbar'

function App() {
  return (
    <div>
      <Helmet>
        {/* Basic SEO */}
        <title>Ritik Singh | Software Developer Engineer</title>
        <meta name="description" content="Ritik Singh is a passionate Software Developer Engineer specializing in Full Stack development, MERN Stack, and Backend systems." />
        <meta name="keywords" content="Ritik Singh, Software Developer Engineer, Full Stack Developer, MERN Stack Developer, Backend Developer, React, Node.js, MongoDB, Express.js" />
        <link rel="canonical" href="https://ritiksingh.me" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Ritik Singh | Full Stack & Devops Engineer" />
        <meta property="og:description" content="Explore the portfolio of Ritik Singh – a skilled Software Developer Engineer focused on MERN Stack and backend development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ritiksingh.me" />
        <meta property="og:image" content="https://www.ritiksingh.me/ritik_singh_dp.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ritik Singh | Software Developer Portfolio" />
        <meta name="twitter:description" content="Experienced Full Stack MERN Developer and Backend Engineer." />
        <meta name="twitter:image" content="https://x.com/ritikcodespace/photo" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ritik Singh",
            "url": "https://ritiksingh.me",
            "image": "https://www.ritiksingh.me/ritik_singh_dp.png",
            "jobTitle": "Software Developer Engineer",
            "description": "Experienced Full Stack Developer Engineer specialized in MERN Stack and Backend development.",
            "knowsAbout": [
              "Full Stack Development",
              "MERN Stack",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Backend Development",
              "RESTful APIs",
              "Software Engineering",
              "Web Developer",
              "Software Developer",
              "Devops"
            ],
            "sameAs": [
              "https://github.com/ritik7739",
              "https://www.linkedin.com/in/ritikkumarsingh7739"

            ]
          })}
        </script>
      </Helmet>

      {/* App Sections */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
