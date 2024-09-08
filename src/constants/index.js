import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With multiple years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With multiple years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sept 2024 - Present",
    role: "Undergraduate Research Assistant",
    company: "University Of Connecticut",
    description: `As an Undergraduate Research Assistant at the University of Connecticut, I've been deeply involved in cutting-edge genomic research under Professor Aguiar's guidance. My work has centered on developing and testing advanced probabilistic algorithms to enhance the identification of Non-B DNA sequences. `,
    technologies: ["Python", "TensorFlow", "Pandas"],
  },
  {
    year: "Aug 2024 - Sept 2024",
    role: "Sofwtare Engineering Intern",
    company: "Headstarter",
    description: `In my role as an AI developer, I've demonstrated a strong proficiency in leveraging cutting-edge technologies to create innovative solutions. I've successfully built and deployed over five AI-centric applications and APIs, utilizing a powerful tech stack that includes Next.js, OpenAI, Pinecone, and Stripe API. These projects have not only showcased my technical versatility but also achieved an impressive 98% accuracy rate, underscoring the reliability and effectiveness of my work.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "May 2024 - Aug 2024",
    role: "Sofwtare Engineering Intern",
    company: "Non-Lethal Labs",
    description: `I spearheaded several key initiatives that significantly improved our product and development processes. I designed a landing page that boosted pre-launch interest by 20%, reaching over 1,000 potential users through targeted marketing campaigns. My thorough review and refactoring of legacy code resulted in a 40% improvement in efficiency, setting a strong foundation for future scalability.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "DennisChat",
    image: project1,
    description:
      "Engineered a high-performance, real-time chat application that seamlessly blends modern front-end technology with robust back-end services. This project showcases my expertise in creating responsive, scalable, and secure web applications.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Firebase"],
  },
  {
    title: "Google Docs Clone",
    image: project2,
    description:
      "Developed a fully functional clone of Google Docs, demonstrating proficiency in creating complex, real-time collaborative applications. This project showcases my ability to implement advanced features that enhance productivity for both students and professionals.",
    technologies: ["HTML", "CSS", "React.js", "Socket.io", "MongoDB"],
  },
  {
    title: "Movie Watchlist",
    image: project3,
    description:
      "Developed a comprehensive movie information web application that provides users with detailed data on over 100,000 films. This project demonstrates my proficiency in front-end development, API integration, and creating user-friendly interfaces for large datasets.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  phoneNo: "+1 860-804-6027",
  email: "dennis.gega@uconn.edu",
};
