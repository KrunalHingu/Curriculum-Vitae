export default function About() {
  return (
    <section id="about" className="py-14">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div className="text-gray-700 leading-relaxed space-y-4">

            <p>
              I am a <span className="text-primary font-semibold">
              Project Manager</span> with over <strong>12 years of experience in the IT industry</strong>.
              I specialize in successfully leading cross-functional teams and delivering
              complex projects on time and within budget.
            </p>

            <p>
              I have proven experience managing projects for global clients across
              <span className="text-primary"> India, the United States, China, Singapore,
              Australia, and Canada</span>, ensuring high-quality product delivery and
              alignment with business objectives.
            </p>

            <p>
              My expertise includes <span className="text-primary">project planning</span>,
              <span className="text-primary"> stakeholder management</span>,
              <span className="text-primary"> Agile and Scrum methodologies</span>, and
              <span className="text-primary"> risk management</span>.
              I focus on driving operational efficiency and delivering technology
              solutions that support organizational growth.
            </p>

          </div>

          {/* Right Highlights */}
          <div className="grid grid-cols-2 gap-6">

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">12+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">25+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">6+</p>
              <p className="text-sm text-gray-600">Global Client Regions</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">20+</p>
              <p className="text-sm text-gray-600">Team Members Managed</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
