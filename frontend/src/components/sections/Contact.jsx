import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanurims@gmail.com",
      href: "mailto:tanurims@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 71 791 8084",
      href: "tel:+94717918084",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Matara, Sri Lanka",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tanurims",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tanuri-mandini",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-poppins mb-8 gradient-text">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-400 text-sm">
                      {info.label}
                    </p>
                    <p className="text-gray-800 dark:text-white font-medium">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass rounded-lg transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="glass rounded-lg p-6 border border-green-400/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-green-400">
                  Available for Work
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Submit Status */}
              {submitStatus && (
                <motion.div
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    submitStatus === "success"
                      ? "bg-green-500/20 border border-green-400/30 text-green-400"
                      : "bg-red-500/20 border border-red-400/30 text-red-400"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {submitStatus === "success" ? (
                    <>
                      <CheckCircle size={20} />
                      <span>
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>
                        Failed to send message. Please try again or contact me
                        directly.
                      </span>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 dark:text-gray-400 mb-4">
            Feel free to contact me ❤️
          </p>
          <p className="text-gray-500 text-sm">
            ©TanuriMandini. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
