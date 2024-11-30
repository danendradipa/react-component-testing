import ProjectCard from "../component/ProjectCard";

const projects = [
  {
    imgSrc: "/images/project1.png",
    title: "Stayhub (In Progress)",
    tags: ["React", "Express JS", "Fullstack", "MongoDB"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project2.png",
    title: "NLP Dashboard",
    tags: ["Streamlit", "Python", "Machine Learning"],
    projectLink: "https://github.com/danendradipa/nlp-dashboard",
  },
  {
    imgSrc: "/images/project3.png",
    title: "House Price Prediction",
    tags: ["Streamlit", "Python", "Machine Learning"],
    projectLink: "https://github.com/danendradipa/house-prediction",
  }, 
  {
    imgSrc: "/images/project4.png",
    title: "Bike Sharing Analysis",
    tags: ["Data Analysis", "Python", "Jupyter Notebook"],
    projectLink: "https://github.com/danendradipa/bike-sharing-analysis",
  },
  {
    imgSrc: "/images/project5.png",
    title: "Book Management API",
    tags: ["API", "Express JS", "MongoDB", "TypeScript"],
    projectLink: "https://github.com/danendradipa/pz-task-5-cicd-docker",
  },
  {
    imgSrc: "/images/project6.png",
    title: "Bookshelf API",
    tags: ["API", "Hapi JS", "JavaScript", "Node JS"],
    projectLink: "https://github.com/danendradipa/bookshelf-api",
  },
  {
    imgSrc: "/images/project7.png",
    title: "Bookshelf APP",
    tags: ["JavaScript", "Frontend", "DOM"],
    projectLink: "https://github.com/danendradipa/bookshelf-apps",
  },
  {
    imgSrc: "/images/project8.png",
    title: "DaneBoard",
    tags: ["JavaScript", "HTML", "CSS", "Responsive"],
    projectLink: "https://github.com/danendradipa/dane-board"
  }
];

const Project = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="container w-[85%]">
        <div className="space-y-2">
          <p className="text-base font-light text-center">Get to Know</p>
          <h1 className="font-bold text-dark text-2xl text-center text-orange-400">
            My Highlight Projects
          </h1>
        </div>
        <div className="pt-20 grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
