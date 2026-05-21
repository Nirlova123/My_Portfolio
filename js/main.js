const skillsContainer =
  document.getElementById(
    "skills-container"
  );

skills.forEach(skill => {

  skillsContainer.innerHTML += `

    <div class="skill-card">

      ${skill}

    </div>

  `;
});
