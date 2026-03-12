import { FaCheckCircle } from "react-icons/fa";
export default function Skills() {

  const skills = [
    "Project Management & Delivery",
    "Agile & Scrum Methodologies (CSM Certified)",
    "End-to-End Project Lifecycle Management",
    "Cross-functional Team Leadership",
    "Stakeholder Engagement & Client Communication",
    "Resource Planning & Allocation",
    "Risk & Issue Management",
    "Scrum Ceremonies & Sprint Planning",
    "Digital Transformation Projects",
    "AI / ML Project Delivery",
    "Technical Consulting",
    "Project Reporting & KPI Tracking",
    "Requirement Analysis & Documentation",
    "Process Improvement & Operational Efficiency",
    "Global Client Project Management",
    "Basic AWS Cloud Knowledge",
    "Tools: Jira, Trello, Monday Board"
  ];

  return (
    <section id="skills" className="py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-10">
          Core Skills
        </h2>

      

<div className="grid md:grid-cols-2 gap-4">

  {skills.map((skill, i) => (
    <div key={i} className="flex items-center gap-3 text-gray-700">
      <FaCheckCircle className="text-green-500" />
      <span>{skill}</span>
    </div>
  ))}

</div>

      </div>
    </section>
  );
}
