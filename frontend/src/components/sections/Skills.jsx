import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiC,
  SiPhp,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiReact,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiScala,
  SiArduino,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
  const techStack = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss className="text-blue-500" /> },
    { name: "C", icon: <SiC className="text-blue-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "C#", icon: <TbBrandCSharp className="text-purple-500" /> },
    { name: "Java", icon: <FaJava className="text-orange-600" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Linux", icon: <SiLinux className="text-gray-300" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Scala", icon: <SiScala className="text-red-500" /> },
    { name: "Arduino", icon: <SiArduino className="text-teal-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  ];

  return (
    <section id="skills" className="section-padding relative">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="glass rounded-xl p-4 text-center hover:shadow-neon transition-all duration-300 border border-white/10 hover:border-blue-400/30"
              whileHover={{ scale: 1.08, y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2 flex justify-center">
                {tech.icon}
              </div>
              <p className="text-sm text-gray-300 font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathon Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold font-poppins mb-4 gradient-text">
              Hackathon Participation
            </h3>
            <p className="text-gray-400 mb-6">
              I actively participate in hackathons to challenge myself and
              collaborate with others.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["ReidXtream", "Idealize"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className={`px-4 py-2 ${
                    index % 2 === 0
                      ? "bg-blue-500/20 border-blue-400/30"
                      : "bg-pink-500/20 border-pink-400/30"
                  } rounded-full text-sm font-medium border`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
