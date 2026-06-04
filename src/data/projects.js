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
    live:"https://github.com/Nirlova123/Campus_Management_System"
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
    live:"https://github.com/Nirlova123/Smart_Grid_Stability_Prediction"
  },

 {
  title: "APiWeather",
  image: apiweather,
  description:
    "A responsive weather forecasting application built with Next.js and React.js that delivers real-time weather data and forecasts through the OpenWeather API. Features include current weather conditions, location-based search, and dynamic weather updates. Deployed on Vercel for fast global delivery, seamless scalability, and optimized performance.",
  tech: [
    "Next.js",
    "React.js",
    "JavaScript",
    "REST API",
    "CSS",
    "OpenWeather API",
    "Vercel"
  ],
  github: "https://github.com/Nirlova123/APiWeather",
  live: "https://a-pi-weather.vercel.app/"
 }
];

