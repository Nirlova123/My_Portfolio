function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <div className="glass-card rounded-3xl p-10 text-center">
        <p className="text-cyan-400 tracking-[6px] uppercase">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Have an opportunity, project, or internship role?
          Feel free to contact me.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://github.com/Nirlova123"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nirlova-panda"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            💼 LinkedIn
          </a>

          <a
            href="mailto:pandanirlova29@gmail.com"
            className="contact-btn"
          >
            ✉️ Email
          </a>
        </div>

        <div className="mt-10">
          <a
            href="mailto:pandanirlova29@gmail.com"
            className="btn-primary"
          >
            pandanirlova29@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;