import project1 from "/project1.jpg";
import project2 from "/project2.jpg";
import project3 from "/project3.jpg";
import project4 from "/project4.jpg";
import project5 from "/project5.jpg";
import project6 from "/project6.jpg";

export const projectData = [
  {
    id: 1,
    image: project1,
    title: "Financial Portfolio Management",
    description:
    "A comprehensive tool for tracking and managing investment portfolios. Features real-time stock data integration, the ability to watch and add stocks to a personalized profile, and detailed insights into price movements and market trends.",
    link: "https://github.com/cnikesh/Finshark",
    technologies: [".NET", "React", "SQL Server", "Docker", "Tailwind"],
  },
  {
    id: 2,
    image: project2,
    title: "AI Car Recognition System",
    description:
    "A deep learning-powered system for automatic car classification by model, make, and year. Utilizes Convolutional Neural Networks (CNNs) built with TensorFlow to deliver accurate image-based recognition and analytics.",
    link: "https://github.com/cnikesh/Car-Make-Classification",
    technologies: ["Python", "CNN", "TensorFlow", "Java", "Android"],
  },
  {
    id: 3,
    image: project3,
    title: "Social Media for Travelers",
    description:
    "A modern web platform designed for travelers to share their journeys. Users can post travel stories, explore content from others, and engage through likes and comments, fostering a community of travel enthusiasts.",
    link: "https://github.com/cnikesh/travelgram",
    technologies: ["Angular", "Firebase", "Typescript", "Express", "NoSQL"],
  },
  {
    id: 4,
    image: project4,
    title: "Virtual Yoga Trainer [Build Started...]",
    description:
    "An interactive Unity application that delivers real-time yoga instruction and pose correction using pose estimation powered by MediaPipe Pose and OpenCV. Features a 3D humanoid model for visual guidance and intuitive UI markers to enhance user posture and engagement during sessions.",
    link: "https://github.com/cnikesh",
    technologies: ["Unity", "Mediapipe", "Python", "Opencv", "Blender"],
  },
  {
    id: 5,
    image: project5,
    title: "Runs Tracker [Build Started...]",
    description:
    "A web application for organizing and monitoring run data. Includes a backend API for data processing, with a dynamic UI currently in development to support real-time visualization and performance tracking.",
    link: "https://github.com/cnikesh",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit", "Docker"],
  },
  {
    id: 6,
    image: project6,
    title: "Home Automation Dashboard [Build Started...]",
    description:
    "A centralized IoT platform for managing smart home devices. Features include device automation, energy monitoring, and voice control integration.Currently being evaluated for feasibility due to compatibility challenges. May evolve into a plant health tracking system to automate watering and care routines for indoor gardening.",
    link: "https://github.com/cnikesh",
    technologies: ["Angular", "Node.Js", "Express.Js", "MongoDb", "Docker"],
  },
];