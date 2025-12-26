import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Star,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const Experience = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University of Colombo School of Computing",
      location: "Colombo, Sri Lanka",
      period: "2023 - present",
      technologies: [
        "OOP",
        "DSA",
        "Rapid Application Development",
        "Software Engineering",
        "Database Management",
      ],
    },
    {
      type: "education",
      title: "School",
      company: "St. Mary's Convent",
      location: "Matara, Sri Lanka",
      period: "2008 - 2022",

      achievements: [
        "GCE Advanced Level – Physical Science Stream: Achieved grades A, A, B; Z-score: 1.6750; District Rank: 158",
        "GCE Ordinary Level – 8 A’s including Mathematics, Science and English, 1 B",
      ],
      technologies: ["Physical Science Stream"],
    },
  ];

  const certifications = [
    {
      name: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "2024",
      status: "Completed",
      link: "https://www.linkedin.com/posts/tanuri-mandini_webdesign-learning-universityofmoratuwa-activity-7290614718791110656-PiT0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQYYMcBufLG8UhPnepCoFfUpGz73fT2nYA",
    },
    {
      name: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      status: "Completed",
      link: "https://www.credly.com/badges/1d657b8b-2f60-4b35-a8d5-03608eed4819/linked_in_profile",
    },
    {
      name: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2024",
      status: "Completed",
      link: "https://www.hackerrank.com/certificates/2a47788ab80c",
    },
    {
      name: "Building RESTful APIs with Node.js and Express",
      issuer: "LinkedIn",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/31ebae4153152d80228bffbbb1f0a2c55a9ea7e53ce064d2e1370e53c7e8821c?trk=share_certificate",
    },
    {
      name: "Prompt Engineering: How to Talk to the AIs",
      issuer: "LinkedIn",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/8fc6059e48145a0b2b57e55a33fcc997128ca93bb79135c870ac642dfad46b6a?trk=share_certificate",
    },
    {
      name: "React Essential Training",
      issuer: "LinkedIn",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/84029a31b4998d45a1bcf095cec1bede28dcc5f39290683710fed50aca8a56ee",
    },
    {
      name: "Git Training",
      issuer: "Simplilearn",
      date: "2025",
      status: "Completed",
      link: "https://simpli-web.app.link/e/SlN5QPeyvUb",
    },
    {
      name: "Spring Boot for Beginners",
      issuer: "Amigoscode",
      date: "2025",
      status: "Completed",
      link: "https://amigoscode.com/certificates/4143e12a-ac04-49b5-9ab8-32323cf355eb",
    },
    {
      name: "Prompt Engineering",
      issuer: "Sololearn",
      date: "2025",
      status: "Completed",
      link: "https://www.sololearn.com/certificates/CC-LGXQO1NC",
    },
    {
      name: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/posts/tanuri-mandini_python-programming-universityofmoratuwa-activity-7333423612546138115-VZ8O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQYYMcBufLG8UhPnepCoFfUpGz73fT2nYA",
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      status: "Completed",
    },
    {
      name: "Object Oriented Programming with Java",
      issuer: "LinkedIn",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/2aff0b02331fc4b622c6907a0a0ce96ad8f70c64e4d609dc97a764f33ddb2015",
    },
    {
      name: "Six Sigma Foundations",
      issuer: "LinkedIn",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/9becb24d1a8095502d62f6302c83727367ccae167cbd21b98d1ff4df6a592ad2",
    },
    {
      name: "Lean Six Sigma: Define and Measure Tools",
      issuer: "LinkedIn",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/9d74c530a9d0e20bb463a67e0b49e287912906564ac32d60070ce3ef73f8996f",
    },
    {
      name: "Lean Six Sigma: Analyze, Improve, and Control Tools",
      issuer: "LinkedIn",
      date: "2025",
      status: "Completed",
      link: "https://www.linkedin.com/learning/certificates/37f8a55089fff84dbdb0507f9fc121917fe694f02f7e1a05317950a44cb1470c",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "work":
        return Briefcase;
      case "education":
        return GraduationCap;
      case "project":
        return BookOpen;
      default:
        return Briefcase;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "work":
        return "from-blue-500 to-cyan-500";
      case "education":
        return "from-pink-500 to-purple-500";
      case "project":
        return "from-purple-500 to-pink-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in education, showcasing growth and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {experiences.map((experience, index) => {
            const IconComponent = getIcon(experience.type);
            return (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Icon */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${getIconColor(
                    experience.type
                  )} flex items-center justify-center border-4 border-gray-900 relative z-10`}
                >
                  <IconComponent size={24} className="text-white" />
                </div>

                {/* Content */}
                <motion.div
                  className="ml-8 card flex-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-blue-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-blue-400 font-semibold mb-2">
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-blue-700 dark:text-gray-300 text-sm mb-1">
                        <Calendar size={14} className="mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-blue-700 dark:text-gray-300 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  {experience.description && (
                    <p className="text-blue-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                  )}

                  {experience.achievements && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map(
                          (achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                            >
                              <CheckCircle
                                size={14}
                                className="text-green-400 mr-2 mt-0.5 flex-shrink-0"
                              />
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
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
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center gradient-text">
            📜 Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {(showAllCertifications
              ? certifications
              : certifications.slice(0, 6)
            ).map((cert, index) => (
              <motion.div
                key={cert.name}
                className="card hover:shadow-neon relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold font-poppins text-blue-900 dark:text-white">
                        {cert.name}
                      </h4>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400 hover:text-pink-400"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-blue-700 dark:text-gray-300 text-sm">
                      {cert.date}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border border-green-400/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      cert.status === "Completed"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 w-full"
                        : "bg-gradient-to-r from-yellow-500 to-orange-500 w-3/4"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          {certifications.length > 6 && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-purple-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {showAllCertifications
                  ? "Show Less"
                  : `View More (${certifications.length - 6} more)`}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
