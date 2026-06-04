import cms from "../assets/cms.png";
import smartgrid from "../assets/smartgrid.png";
import apiweather from "../assets/apiweather.png";

export const projects = [
  {
    title:"Campus Management System",
    image:cms,
    description:
      "React + Django + PostgreSQL project.",
    tech:[
      "React",
      "Django",
      "PostgreSQL"
    ],
    github:"https://github.com/Nirlova123/Campus_Management_System",
    live:"#"
  },

  {
    title:"Smart Grid Stability",
    image:smartgrid,
    description:
      "ANN model for smart grid prediction.",
    tech:[
      "Python",
      "TensorFlow",
      "Machine Learning"
    ],
    github:"https://github.com/Nirlova123/Smart_Grid_Stability_Prediction",
    live:"#"
  },

  {
    title: "APiWeather",
    image: apiweather,
    description:
      "A full-stack weather forecasting application built with Next.js that provides real-time weather conditions and forecasts using third-party weather APIs.",
    tech: [
      "Next.js",
      "React.js",
      "JavaScript",
      "REST API",
      "CSS",
      "OpenWeather API"
    ],
    github: "https://github.com/Nirlova123/APiWeather",
    live: "#"
  }
];