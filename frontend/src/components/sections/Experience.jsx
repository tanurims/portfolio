import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Intern Software Engineer",
      company: "Zebra Technologies Lanka (Pvt) Ltd",
      location: "Colombo, Sri Lanka",
      period: "Nov 2025 - May 2026",
      logo: "/zebra.png",
      responsibilities: [
        "Developed, tested, and maintained Zebra Scanner SDK drivers for Windows using C++ and Java, ensuring compliance with UPOS standards.",
        "Contributed to the development and enhancement of Zebra 123Scan utility and Scanner Management Service (SMS), improving usability and functionality.",
        "Debugged hardware-software interactions to resolve technical issues related to peripheral devices.",
        "Collaborated with the team in Agile sprints, participating in code reviews and GitHub-based development workflows.",
        "Assisted in updating technical design documentation and supporting software release cycles.",
      ],
      technologies: [
        "C++",
        "Java",
        "C#",
        "Windows SDK",
        "Zebra 123Scan",
        "GitHub",
        "Agile",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and hands-on experience in software
            engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-gray-900 relative z-10 shadow-md">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Content */}
              <motion.div
                className="ml-8 card flex-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-blue-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-blue-700 dark:text-gray-300 text-sm mb-1">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-blue-700 dark:text-gray-300 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">
                    Key Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                      >
                        <CheckCircle
                          size={14}
                          className="text-green-400 mr-2 mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-blue-400 text-xs rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
