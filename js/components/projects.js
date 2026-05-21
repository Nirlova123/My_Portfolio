const projectContainer =
  document.getElementById(
    "projects-container"
  );

function renderProjects(category = "All") {

  const filtered =
    category === "All"
    ? projects
    : projects.filter(
        project =>
          project.category === category
      );

  projectContainer.innerHTML =
    filtered.map(project => `

      <div class="project-card">

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <p>
          ${project.tech.join(", ")}
        </p>

        <a
          href="${project.github}"
          target="_blank"
        >
          GitHub
        </a>

      </div>

    `).join("");
}

renderProjects();

document
  .querySelectorAll(".filters button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        renderProjects(
          button.dataset.filter
        );
      }
    );
});
