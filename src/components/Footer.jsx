function Footer() {
  return (
   <footer className="border-t border-slate-800 py-6 mt-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    
    <p className="text-gray-400 text-sm">
      © 2026 Nirlova Panda. All rights reserved.
    </p>

    <div className="flex items-center gap-6 text-sm">
      <a
        href="#about"
        className="text-gray-400 hover:text-cyan-400 transition"
      >
        About
      </a>

      <a
        href="#projects"
        className="text-gray-400 hover:text-cyan-400 transition"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="text-gray-400 hover:text-cyan-400 transition"
      >
        Contact
      </a>

      <a
        href="#home"
        className="text-cyan-400 hover:text-cyan-300 transition"
      >
        Back to Top ↑
      </a>
    </div>

  </div>
</footer>
  );
}

export default Footer;