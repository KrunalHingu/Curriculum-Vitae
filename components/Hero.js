
export default function Hero() {
  return (
    <section id="home" className="py-16 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-40"></div>

          <img
            src="/image.png.png"
            alt="Krunal Hingu - Senior Project Manager"
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary shadow-lg object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xxl">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Krunal Hingu</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium opacity-90">
            Senior Project Manager / Technical Project Manager
            · Certified ScrumMaster®
          </p>

          {/* Professional Summary */}
          <p className="mt-4 text-lg md:text-xl opacity-80 leading-relaxed">
            Senior Project Manager / Technical Project Manager with
            <span className="text-primary font-semibold">
              {" "}13+ years of IT experience, including 5+ years in
              project and delivery leadership
            </span>, driving end-to-end delivery of complex technology
            solutions for global clients.

            Experienced in leading cross-functional teams of up to
            <span className="text-primary font-semibold"> 25 professionals</span>,
            managing <span className="text-primary font-semibold">
              3–4 concurrent projects
            </span>, and delivering
            <span className="text-primary font-semibold"> 8,000+ project hours</span>
            {" "}across AI-powered platforms, SaaS, FinTech, Healthcare,
            EV & Fleet Management, Logistics, and enterprise solutions.

            Strong expertise in Agile/Scrum, stakeholder management,
            project governance, budgeting, resource planning, risk mitigation,
            and Fixed-Cost and T&M delivery models.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="https://drive.google.com/drive/folders/1XCm_93TXZ77WS1wIDxAo39xY1mxgo5Bf"
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
