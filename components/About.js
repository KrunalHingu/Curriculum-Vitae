
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
              Senior Project Manager / Technical Project Manager</span> with
              <strong> 13+ years of IT experience</strong>, including
              <strong> 5+ years in project and delivery leadership</strong>.
              I specialize in managing complex technology initiatives and
              delivering business-driven solutions across diverse industries.
            </p>

            <p>
              My domain experience spans
              <span className="text-primary"> AI-powered platforms, SaaS,
              FinTech, EV & Fleet Management, Logistics, Healthcare,
              eCommerce, Digital Asset Management, and Mobile Applications</span>.
              I have experience managing 3–4 concurrent projects and
              coordinating cross-functional teams of up to 25 professionals.
            </p>

            <p>
              My expertise includes
              <span className="text-primary"> end-to-end project delivery,
              Agile/Scrum, stakeholder management, project planning,
              budgeting, estimation, resource planning, RAID management,
              risk mitigation, and change management</span>.
              I have managed both Fixed-Cost and Time & Material (T&M)
              engagement models, including SOW governance, client communication,
              billing, and executive reporting.
            </p>

            <p>
              With experience working alongside clients and stakeholders
              across India, the United States, China, Singapore, Australia,
              and Canada, I focus on building strong client relationships,
              driving operational efficiency, and ensuring successful
              technology delivery. I have successfully delivered
              <strong> 8,000+ project hours</strong> across technology initiatives.
            </p>

          </div>

          {/* Right Highlights */}
          <div className="grid grid-cols-2 gap-6">

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">13+</p>
              <p className="text-sm text-gray-600">Years in IT</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-sm text-gray-600">Years in Project Leadership</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">3–4</p>
              <p className="text-sm text-gray-600">Concurrent Projects</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">25+</p>
              <p className="text-sm text-gray-600">Team Members Coordinated</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">8,000+</p>
              <p className="text-sm text-gray-600">Project Hours Delivered</p>
            </div>

            <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <p className="text-2xl font-bold text-primary">6+</p>
              <p className="text-sm text-gray-600">Global Client Regions</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
