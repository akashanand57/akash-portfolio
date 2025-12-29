import React from "react";
import styles from "./Experience.module.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiPostman,
  SiSwagger,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiVercel,
  SiNetlify,
  SiDigitalocean,
} from "react-icons/si";

export const Experience = () => {
  const skills = {
    Frontend: [
      { title: "HTML", icon: <FaHtml5 color="#f97316" /> },
      { title: "CSS", icon: <FaCss3Alt color="#3b82f6" /> },
      { title: "JavaScript", icon: <FaJs color="#facc15" /> },
      { title: "React", icon: <FaReact color="#22d3ee" /> },
      { title: "Angular", icon: <FaAngular color="#dc2626" /> },
      { title: "Bootstrap", icon: <FaBootstrap color="#8b5cf6" /> },
      { title: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
    ],
    Backend: [
      { title: "Java", icon: <FaJava color="#ef4444" /> },
      { title: "Spring Boot", icon: <SiSpringboot color="#22c55e" /> },
      { title: "Node.js", icon: <FaNodeJs color="#22c55e" /> },
      { title: "Express.js", icon: <SiExpress color="#4b5563" /> },
    ],
    Database: [
      { title: "MongoDB", icon: <SiMongodb color="#16a34a" /> },
      { title: "MySQL", icon: <SiMysql color="#2563eb" /> },
      { title: "PostgreSQL", icon: <SiPostgresql color="#2563eb" /> },
      { title: "Oracle SQL", icon: <SiOracle color="#dc2626" /> },
    ],
    "Cloud & Hosting": [
      { title: "AWS", icon: <FaAws color="#fb923c" /> },
      { title: "Vercel", icon: <SiVercel color="#000000" /> },
      { title: "Netlify", icon: <SiNetlify color="#06b6d4" /> },
      { title: "DigitalOcean", icon: <SiDigitalocean color="#3b82f6" /> },
    ],
    Tools: [
      { title: "Git", icon: <FaGitAlt color="#f97316" /> },
      { title: "GitHub", icon: <FaGithub color="#111827" /> },
      { title: "Postman", icon: <SiPostman color="#fb923c" /> },
      { title: "Swagger", icon: <SiSwagger color="#22c55e" /> },
      { title: "WordPress", icon: <FaWordpress color="#2563eb" /> },
    ],
  };

  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Technologies</h2>
      <div className={styles.content}>
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className={styles.card}>
            <h3>{category}</h3>
            <div className={styles.skills}>
              {list.map((skill) => (
                <div key={skill.title} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    {skill.icon}
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
