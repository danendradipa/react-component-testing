import { render, screen } from "@testing-library/react";
import ProjectCard from "../component/ProjectCard"; 

describe("ProjectCard", () => {
  const customClass = "bg-gray-300";
  const props = {
    imgSrc: "/images/project1.png",
    title: "Stayhub (In Progress)",
    tags: ["React", "Express JS", "Fullstack", "MongoDB"],
    projectLink: "https://github.com/danendradipa/stayhub",
    classes: customClass,
  };

  it("renders ProjectCard with correct title, image, and tags", () => {
    render(<ProjectCard {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();

    props.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });

    const img = screen.getByAltText(props.title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", props.imgSrc);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', props.projectLink);
  });

  it("applies custom classes if provided", () => {
    render(<ProjectCard {...props} />);

    screen.debug();
    const card = screen.getByTestId('project-card');
    expect(card).toHaveClass(customClass);
  });
});
