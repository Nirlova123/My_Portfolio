import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">

      <h2 className="text-5xl font-bold text-center mb-16">
        <span className="gradient-text">
          Skills
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {skills.map((skill,index)=>(
          <div
            key={index}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl mb-5">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item,i)=>(
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}