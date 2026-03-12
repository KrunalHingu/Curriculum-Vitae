import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* Font Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* SEO */}
        <meta
          name="description"
          content="Krunal Hingu – Senior Project Manager with 12+ years of IT experience in Agile delivery, digital transformation, and global client project management. Based in Ahmedabad, India."
        />

        <meta
          name="keywords"
          content="Krunal Hingu, Project Manager Ahmedabad, Agile Project Manager India, Technical Project Manager, Scrum Master, Digital Transformation Leader, Global Client Project Management, IT Delivery Manager, Stakeholder Management, Cross-functional Team Leadership"
        />

        <meta name="author" content="Krunal Hingu" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://krunal-hingu-portfolio.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Krunal Hingu | Senior Project Manager Portfolio" />
        <meta
          property="og:description"
          content="Senior Project Manager with 12+ years of experience delivering complex IT projects for global clients across US, Australia, Singapore, China, and Canada."
        />
        <meta
          property="og:image"
          content="https://krunal-hingu-portfolio.vercel.app/profile.png"
        />
        <meta property="og:url" content="https://krunal-hingu-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Krunal Hingu | Senior Project Manager Portfolio" />
        <meta
          name="twitter:description"
          content="Senior Project Manager with expertise in Agile delivery, stakeholder management, and digital transformation projects."
        />
        <meta
          name="twitter:image"
          content="https://krunal-hingu-portfolio.vercel.app/profile.png"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Krunal Hingu",
              jobTitle: "Senior Project Manager",
              url: "https://krunal-hingu-portfolio.vercel.app/",
              image: "https://krunal-hingu-portfolio.vercel.app/profile.png",
              sameAs: [
                "https://www.linkedin.com/in/krunalhingu/"
              ],
              email: "mailto:krunal.hingu@gmail.com",
              worksFor: {
                "@type": "Organization",
                name: "TRooTech Business Solutions Pvt. Ltd."
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "India"
              },
              knowsAbout: [
                "Agile Project Management",
                "Scrum Methodology",
                "Digital Transformation",
                "Stakeholder Management",
                "Project Lifecycle Management",
                "Risk Management",
                "Cross-functional Team Leadership",
                "Global Client Delivery",
                "AI / ML Project Delivery",
                "Jira",
                "ClickUp",
                "Trello",
                "Asana",
                "AWS"
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "SKPIMCS, Gandhinagar"
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certificate",
                  name: "Certified Scrum Master (CSM)"
                }
              ]
            }),
          }}
        />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
