import React from "react";
import { motion } from "framer-motion";
import { Code, Heart, Coffee, Target, Moon, Package } from "lucide-react";

const About = () => {
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

  const stats = [
    { icon: Code, label: "Projects Completed", value: "8" },
    { icon: Coffee, label: "Cups of Tea", value: "500+" },
    { icon: Package, label: "Frameworks Learned", value: "5+" },
    { icon: Moon, label: "Late-Night Coding Sessions", value: "100+" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Profile Image Placeholder */}
              <motion.div
                className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-pink-500/20 glass backdrop-blur-sm border border-white/20 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Tanuri Mandini"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 hidden items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">TM</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full glass backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code size={24} className="text-blue-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full glass backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart size={20} className="text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold font-poppins mb-6 gradient-text">
                Passionate Developer & Problem Solver
              </h3>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-400 dark:text-gray-400 leading-relaxed"
            >
              <p>
                Hi, I’m Tanuri Mandini, a computer science undergraduate who
                loves building innovative apps and smooth user experiences. I
                enjoy working with React, MERN, and modern web technologies,
                especially full-stack projects where I can take ideas from
                concept to deployment.
              </p>

              <p>
                When I’m not coding, I’m exploring new technologies, or learning
                something new. I’m driven by solving challenges, creating
                user-focused solutions, and growing every day.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              className="text-center card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 ${
                  index % 2 === 0 ? "bg-blue-500" : "bg-pink-500"
                } rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-2">{value}</h3>
              <p className="text-gray-400 dark:text-gray-400 text-sm">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
