import { motion } from "framer-motion";
import { User, GraduationCap, Code, Database } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-cyan-400 uppercase tracking-[6px]">
          About Me
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Who Am <span className="gradient-text">I?</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-semibold mb-5">
            Software Developer & MCA Student
          </h3>

          <p className="text-gray-400 leading-8">
            I'm Nirlova Panda, an MCA student passionate about
            Full Stack Development, Backend Engineering,
            Data Structures & Algorithms, and Artificial
            Intelligence.
          </p>

          <p className="text-gray-400 leading-8 mt-4">
            I enjoy building scalable web applications using
            React, Django, PostgreSQL, and modern cloud
            technologies.
          </p>

          <p className="text-gray-400 leading-8 mt-4">
            Currently focusing on becoming a strong Software
            Engineer while continuously improving my coding,
            system design, and AI skills.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          <div className="glass-card p-6 rounded-2xl">
            <User className="text-cyan-400 mb-3" />
            <h4 className="font-semibold mb-2">Profile</h4>
            <p className="text-gray-400 text-sm">
              Full Stack Python Developer
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <GraduationCap className="text-pink-400 mb-3" />
            <h4 className="font-semibold mb-2">Education</h4>
            <p className="text-gray-400 text-sm">
              Master of Computer Applications
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <Code className="text-cyan-400 mb-3" />
            <h4 className="font-semibold mb-2">Coding</h4>
            <p className="text-gray-400 text-sm">
              273+ LeetCode Problems Solved
            </p>
          </div>

          {/* <div className="glass-card p-6 rounded-2xl">
            <Database className="text-pink-400 mb-3" />
            <h4 className="font-semibold mb-2">Backend</h4>
            <p className="text-gray-400 text-sm">
              Django REST + PostgreSQL
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;