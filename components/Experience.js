import { useRef, useState } from "react";

export default function Experience() {
  const experienceRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    if (showAll && experienceRef.current) {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setShowAll(!showAll);
  };

  const experience = [
    {
      role: "Project Manager",
      company: "TRooTech Business Solutions Pvt. Ltd",
      period: "Jul 2024 – Present",
      location: "Ahmedabad, Gujarat",
      details: [
        "Leading multiple software projects across global clients.",
        "Managing cross-functional development teams and ensuring Agile delivery.",
        "Handling stakeholder communication and project planning.",
        "Ensuring timely delivery and alignment with business goals.",
      ],
    },
    {
      role: "Project Manager",
      company: "Infomax Digital India LLP",
      period: "Jun 2023 – Jul 2024",
      location: "Ahmedabad, Gujarat",
      details: [
        "Managed end-to-end delivery of web and SaaS projects.",
        "Collaborated with technical teams for successful product delivery.",
        "Worked closely with clients for requirement analysis and planning.",
        "Ensured project timelines and quality standards were maintained.",
      ],
    },
    {
      role: "Project Lead",
      company: "Moonraft Innovation Labs Pvt Ltd",
      period: "May 2022 – Jun 2023",
      location: "Pune, India",
      details: [
        "Led development teams for enterprise digital products.",
        "Managed project delivery and coordinated between design and engineering teams.",
        "Handled client communication and project progress reporting.",
      ],
    },
    {
      role: "Sr. Team Lead",
      company: "Moon Technolabs Pvt Ltd",
      period: "Jun 2016 – May 2022",
      location: "Ahmedabad, Gujarat",
      details: [
        "Led multiple development teams delivering web and mobile applications.",
        "Managed technical planning and project execution.",
        "Mentored developers and ensured high-quality code delivery.",
        "Worked across domains including SaaS, marketplaces, and enterprise applications.",
      ],
    },
    {
      role: "Sr. Web Developer",
      company: "eBizTrait Technolabs Pvt Ltd",
      period: "Jun 2015 – Jun 2016",
      location: "Ahmedabad, Gujarat",
      details: [
        "Developed web applications using modern frameworks.",
        "Worked closely with clients for feature implementation.",
        "Maintained performance and security of web platforms.",
      ],
    },
    {
      role: "Web Developer",
      company: "Opal Infotech",
      period: "Jun 2013 – Jun 2015",
      location: "Ahmedabad, Gujarat",
      details: [
        "Developed and maintained web applications.",
        "Worked on frontend and backend development tasks.",
        "Delivered multiple client websites and CMS projects.",
      ],
    },
  ];

  const displayedExperience = showAll ? experience : experience.slice(0, 3);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="section-spacing animate-fadeIn"
    >
      <h2 className="text-3xl font-bold mb-10">
        Professional Experience
      </h2>

      <div className="relative border-l-2 border-primary pl-10 space-y-10 ml-6">
        {displayedExperience.map((exp, i) => (
          <div
            key={i}
            className="experience-card relative p-6 rounded-xl bg-white shadow-sm border border-gray-200 transition"
          >
            <div className="absolute left-0 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-primary"></div>

            <h3 className="text-xl font-semibold text-gray-900">
              {exp.role} <span className="opacity-80">– {exp.company}</span>
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {exp.period} | {exp.location}
            </p>

            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 text-sm">
              {exp.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button onClick={handleToggle} className="btn-primary">
          {showAll ? "View Less Experience" : "View More Experience"}
        </button>
      </div>
    </section>
  );
}
