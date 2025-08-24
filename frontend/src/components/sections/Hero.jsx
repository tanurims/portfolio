import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "TanuriMandini_CV.pdf";
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container-custom px-4 z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar/Profile Image */}
          <motion.div
            className="mb-8 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-1 shadow-2xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/avatar.jpg"
                  alt="Tanuri Mandini"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full bg-gray-800 rounded-full hidden items-center justify-center">
                  <span className="text-4xl font-bold gradient-text">TM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-poppins mb-6 text-shadow"
            variants={itemVariants}
          >
            <span className="text-slate-800 dark:text-white">Hi, I'm </span>
            <span className="gradient-text">Tanuri Mandini</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Aspiring Software Engineer | Full Stack Developer
            <br />
            <span className="text-blue-400">
              Building the future, one line of code at a time
            </span>
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={itemVariants}
          >
            {["React", "Spring Boot", "PostgreSQL", "MongoDB", "Node.js"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-sm font-medium border border-blue-400/30 hover:border-blue-400/60 transition-colors duration-300 text-slate-700 dark:text-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={handleDownloadResume}
              className="btn-primary flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.button>

            <motion.button
              onClick={scrollToProjects}
              className="btn-secondary flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} className="group-hover:animate-pulse" />
              <span>View Projects</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/tanurims",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/tanuri-mandini",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:tanurims@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  size={24}
                  className="group-hover:text-blue-400 transition-colors duration-300 text-slate-700 dark:text-white"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              size={32}
              className="text-slate-600 dark:text-white/70 hover:text-blue-400 cursor-pointer transition-colors duration-300"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [0, -100, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
          animate={{
            y: [0, -80, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-60"
          animate={{
            y: [0, -60, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
