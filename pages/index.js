import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Krunal Hingu – Project Manager | Agile & Scrum Professional</title>

        <meta
          name="description"
          content="Krunal Hingu – Project Manager from Ahmedabad with over 12 years of IT experience leading cross-functional teams and delivering complex projects globally across India, USA, China, Singapore, Australia, and Canada."
        />

        <meta
          name="keywords"
          content="Krunal Hingu, Project Manager, Agile Project Manager, Scrum Master, IT Project Manager Ahmedabad, Delivery Management, Stakeholder Management"
        />

        <meta name="author" content="Krunal Hingu" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Krunal Hingu – Project Manager Portfolio" />

        <meta
          property="og:description"
          content="Project Manager with 12+ years of IT experience specializing in Agile delivery, stakeholder engagement, and global project execution."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://krunal-hingu.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Krunal Hingu – Project Manager" />

        <meta
          name="twitter:description"
          content="Project Manager with 12+ years experience delivering enterprise and SaaS projects across global markets."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://krunal-hingu.vercel.app" />
      </Head>

      <div className="min-h-screen bg-background text-foreground antialiased">
        
        {/* Navigation */}
        <header>
          <Navbar />
        </header>

        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
          
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="contact">
            <Contact />
          </section>

        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>

      </div>
    </>
  );
}
