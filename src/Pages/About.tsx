import SkillCard from "../component/SkillCard";

const skillItem = [
  {
    imgSrc: "icon/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "icon/html5.svg",
    label: "HTML",
    desc: "Structure",
  },
  {
    imgSrc: "icon/css3.svg",
    label: "CSS",
    desc: "Styling",
  },
  {
    imgSrc: "icon/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "CSS Framework",
  },
  {
    imgSrc: "icon/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "icon/typescript.svg",
    label: "TypeScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "icon/python.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "icon/jupyter.svg",
    label: "Jupyter Notebook",
    desc: "Machine Learning",
  },
  {
    imgSrc: "icon/react.svg",
    label: "React",
    desc: "Library Web",
  },
  {
    imgSrc: "icon/nodejs.svg",
    label: "NodeJS",
    desc: "Runtime Environment",
  },
  {
    imgSrc: "icon/express.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "icon/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "icon/github.svg",
    label: "GitHub",
    desc: "Version Control",
  },
];

const About = () => {
  return (
    <>
      <section className="pt-24">
        <div className="container w-[85%]">
          <div className="space-y-2">
            <p className="text-base font-light text-center">Get to Know</p>
            <h1 className="font-bold text-dark text-2xl text-center text-orange-400">
              About Me
            </h1>
          </div>

          <div className="flex flex-wrap sm:justify-center md:flex-nowrap pt-20 gap-16 md:justify-evenly">
            <div className="w-[350px] bg-[#2A93D4] rounded-3xl">
              <div className="rotate-12 transition-transform duration-500 hover:rotate-0">
                <img
                  src="dane-square.jpeg"
                  alt="Danendra"
                  className="w-[350px] rounded-3xl"
                />
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:w-1/2 md:max-w-[500px] flex flex-col gap-6">
              <p className="font-light text-justify leading-relaxed">
                Hi everyone, my name is Danendra Dipa. I'm a student of
                Information Technology at Yogyakarta State University with a
                passion for technology, focusing on Machine Learning, Front-End
                Web Development, and UI/UX Design. I have experience using
                Python and JavaScript for development and enjoy creating user
                interfaces with frameworks like React.
              </p>
              <p className="font-light text-justify leading-relaxed">
                I also have a background in designing user-friendly and visually
                appealing interfaces with tools like Figma. I am eager to
                explore new technologies and apply them to solve real-world
                problems effectively.
              </p>
              <a href="#" download={true}>
                <button className="mt-5 text-base text-white font-semibold bg-orange-400 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-20">
        <div className="container w-[85%]">
          <div className="space-y-2">
            <p className="text-base font-light text-center">Get to Know</p>
            <h1 className="font-bold text-dark text-2xl text-center text-orange-400">
              Essential Tools I Use
            </h1>
          </div>
          <div className="pt-20 grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
