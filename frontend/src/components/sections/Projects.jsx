import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, X } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Other"];

  const projects = [
    {
      id: 1,
      title: "MovieFlix",
      description:
        "A movie discovery platform built with React and The Movie Database API. Features include user authentication, watchlist management, and personalized recommendations.",
      image: "/movieflix.png",
      category: "Frontend",
      projectType: "Personal Learning",
      technologies: ["React", "CSS"],
      githubUrl: "https://github.com/tanurims/movieflix.git",
      featured: false,
    },
    {
      id: 4,
      title: "InStyle",
      description: "frontend application for a online clothing store",
      image: "/instyle.png",
      category: "Frontend",
      projectType: "Assignment",
      technologies: ["React", "CSS"],
      githubUrl: "https://github.com/tanurims/InStyle.git",
      featured: false,
    },
    {
      id: 3,
      title: "MediMeet",
      description:
        "Full‑stack doctor appointment booking platform with Patient, Doctor, and Admin roles; includes appointment scheduling, online payments, and dashboards.",
      image: "/medimeet.png",
      category: "Full Stack",
      projectType: "Personal Learning",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "ReCharts",
        "Stripe",
        "Cloudinary",
      ],
      githubUrl: "https://github.com/tanurims/MediMeet.git",
      featured: true,
    },
    {
      id: 5,
      title: "ExpenseEase",
      description:
        "Expense management web app with authentication, dashboards, CRU operations, and financial visualizations.",
      image: "/expenseease.png",
      category: "Full Stack",
      projectType: "Personal Learning",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "ReCharts",
      ],
      githubUrl: "https://github.com/tanurims/ExpenseEase.git",
      featured: false,
    },
    {
      id: 2,
      title: "WE4U",
      description:
        " web-based platform to enhance elderly care in Sri Lanka by connecting care seekers, caregivers, and consultants under a unified system.",
      image: "/we4u.jpg",
      category: "Full Stack",
      projectType: "2nd Year Project",
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "XAMPP",
        "JavaScript",
        "Stripe",
        "PHPMailer",
      ],
      githubUrl: "https://github.com/AkithJayalath/we4u_web.git",
      featured: true,
    },
    {
      id: 6,
      title: "PillPath",
      description:
        " Web‑based platform to connect patients with nearby pharmacies for prescription uploads, OTC purchases, and medication management.",
      image: "/pillpath.png",
      category: "Full Stack",
      projectType: "3rd Year Project",
      technologies: [
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Springboot",
        "Leaflet Maps",
        "Recharts",
        "Stripe",
        "Cloudinary",
      ],
      githubUrl: {
        frontend: "https://github.com/bavindu122/PillPath.git",
        backend: "https://github.com/bavindu122/PillPath-Backend.git",
      },
      featured: true,
    },
    {
      id: 7,
      title: "QuizApp",
      description:
        "RESTful API application for quiz management with CRUD, category/difficulty filtering, and automated scoring.",
      image: "/quiz.jpg",
      category: "Backend",
      projectType: "Personal Learning",
      technologies: ["Springboot", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/tanurims/QuizApp.git",
      featured: false,
    },
    {
      id: 8,
      title: "Portfolio",
      description:
        "My portfolio website showcasing my projects, skills, and experience.",
      image: "/portfolio.png",
      category: "Frontend",
      projectType: "Portfolio",
      technologies: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/tanurims/portfolio.git",
      featured: false,
    },
    {
      id: 9,
      title: "Scientific Calculator",
      description:
        "This is a simple scientific calculator created in Octave/MATLAB as part of a university mini-project. It supports various mathematical operations",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop",
      category: "Other",
      projectType: "Assignment",
      technologies: ["Octave"],
      githubUrl: "https://github.com/tanurims/scientific_calculator.git",
      featured: false,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        {/* Featured Projects Showcase */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center gradient-text">
            🌟 Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative card hover:shadow-neon"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full backdrop-blur-sm">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-pink-500/80 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.projectType}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold font-poppins mb-3 text-blue-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-gray-400 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-blue-400 text-xs rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {typeof project.githubUrl === "object" ? (
                    <>
                      <motion.a
                        href={project.githubUrl.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github size={18} />
                        <span className="text-sm">Frontend</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github size={18} />
                        <span className="text-sm">Backend</span>
                      </motion.a>
                    </>
                  ) : (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "glass text-blue-800 dark:text-gray-300 hover:text-blue-900 dark:hover:text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <Filter size={16} />
                <span>{category}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center text-blue-900 dark:text-white">
            Projects ({filteredProjects.length})
          </h3>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group card hover:shadow-neon"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2 py-1 bg-purple-500/80 text-white text-xs rounded backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-pink-500/80 text-white text-xs rounded backdrop-blur-sm">
                      {project.projectType}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-bold font-poppins mb-2 text-blue-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-gray-400 dark:text-gray-400 mb-4 text-sm">
                  {project.description.substring(0, 100)}...
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 text-blue-400 text-xs rounded border border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  {typeof project.githubUrl === "object" ? (
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github size={16} />
                        <span className="text-sm">Frontend</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github size={16} />
                        <span className="text-sm">Backend</span>
                      </motion.a>
                    </div>
                  ) : (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold font-poppins mb-4 gradient-text">
              Want to see more?
            </h3>
            <p className="text-gray-400 dark:text-gray-400 mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <motion.a
              href="https://github.com/tanurims"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
