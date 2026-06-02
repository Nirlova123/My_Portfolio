import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section"
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

          <h2 className="text-2xl mt-5 text-gray-300">
            Python Full Stack Developer
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