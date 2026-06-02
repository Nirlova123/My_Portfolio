const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10">
      <p className="text-gray-500">
        © {new Date().getFullYear()} Nirlova Panda.
        Crafted with React, Tailwind & Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;