import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "AI & ML Explorer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const updated = currentRole.substring(0, text.length + 1);
        setText(updated);

        if (updated === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const updated = currentRole.substring(0, text.length - 1);
        setText(updated);

        if (updated === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center section"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{opacity:0,x:-50}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
        >
          <p className="text-primary mb-3">
            Available for opportunities
          </p>

          <h1 className="text-6xl font-bold">
            Hi, I'm
            <span className="gradient-text">
              {" "}Nirlova Panda
            </span>
          </h1>

          <h2 className="text-2xl mt-5 font-semibold text-cyan-400 min-h-[40px]">
         {text}
        <span className="animate-pulse">|</span>
        </h2>

          <p className="mt-6 text-gray-400">
            MCA Student passionate about
            Python, React, Django and AI.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-cyan-500"
            >
              View Projects
            </a>

            <a 
              href="https://leetcode.com/u/Nirlova_panda/"
              className="px-6 py-3 rounded-lg border border-cyan-300 text-cyan-300"
            >
              LeetCode Profile
            </a>

            <a
               href="/My_Resume.pdf"
               download="Nirlova_Panda_Resume.pdf"
               className="px-6 py-3 rounded-lg border border-cyan-300 text-cyan-300"
            >
              Download Resume
            </a>

            {/* <a
              href="#contact"
              className="px-6 py-3 rounded-lg border"
            >
              Contact
            </a> */}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:50}}
          animate={{opacity:1,x:0}}
        >
          <img
            src={profile}
            alt=""
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-500 mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}