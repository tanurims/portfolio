import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Cute floating particle system
    class CuteParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2; // Slightly bigger for cuteness
        this.speedX = (Math.random() - 0.5) * 0.8; // Slower, gentler movement
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.4 + 0.2; // More subtle
        this.hue =
          Math.random() > 0.5
            ? Math.random() * 60 + 200
            : Math.random() * 60 + 300; // Blue to pink range
        this.pulse = Math.random() * 0.02 + 0.01; // Gentle pulsing
        this.pulseDirection = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Gentle pulsing effect
        this.opacity += this.pulse * this.pulseDirection;
        if (this.opacity > 0.6 || this.opacity < 0.1) {
          this.pulseDirection *= -1;
        }

        // Wrap around screen with some padding
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas.height + 50;
      }

      draw() {
        // Create soft, cute particles with gradient
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(
          0,
          `hsla(${this.hue}, 70%, 80%, ${this.opacity})`
        );
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 80%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create fewer, cuter particles
    const particles = [];
    const particleCount = 60; // Reduced for less overwhelming effect

    for (let i = 0; i < particleCount; i++) {
      particles.push(new CuteParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw cute connections with soft colors
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.05 * (1 - distance / 120);
            ctx.strokeStyle = `hsla(220, 70%, 70%, ${opacity})`; // Blue connections
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ background: "transparent" }}
      />

      {/* Cute floating gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Blue and pink soft blobs */}
        <motion.div
          className="absolute top-1/6 left-1/5 w-40 h-40 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/6 w-32 h-32 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-2xl opacity-25"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional cute floating elements */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-400 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-blue-500 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-35"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Cute floating stars/sparkles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 2 === 0
                ? "bg-blue-400 dark:bg-blue-300"
                : "bg-pink-400 dark:bg-pink-300"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ParticleBackground;
