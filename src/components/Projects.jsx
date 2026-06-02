import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">

      <h2 className="text-5xl font-bold text-center mb-16">
        <span className="gradient-text">
          Projects
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project,index)=>(
          <div
            key={index}
            className="glass rounded-xl overflow-hidden"
          >

            <img
              src={project.image}
              alt=""
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t,i)=>(
                  <span
                    key={i}
                    className="bg-cyan-900 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">

                <a
                  href={project.github}
                  className="border px-4 py-2 rounded"
                >
                  GitHub
                </a>

                {/* <a
                  href={project.live}
                  className="bg-cyan-500 px-4 py-2 rounded"
                >
                  Live
                </a> */}

              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}