export default function Hero() {
  return (
    <section id="home" className="py-16 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-40"></div>

          <img
            src="/image.png"
            alt="Krunal Hingu Project Manager Profile Picture"
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary shadow-lg object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Krunal Hingu</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium opacity-90">
            Project Manager · Certified Scrum Master
          </p>

          {/* Tagline */}
          <p className="mt-4 text-lg md:text-xl opacity-80 leading-relaxed">
            Project Manager with over <span className="text-primary">12 years of experience</span>
            leading cross-functional teams and delivering complex technology
            solutions for global clients across <span className="text-primary">
            India, the United States, China, Singapore, Australia, and Canada</span>.
            Experienced in Agile delivery, stakeholder management, and driving
            successful end-to-end project execution.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="https://drive.google.com/file/d/1rYDVYNqbxqbSwbR2uM_vAyKFBcyFIX5L/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/krunalhingu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              LinkedIn Profile
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
