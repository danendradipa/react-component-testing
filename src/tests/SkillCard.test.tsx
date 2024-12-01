import { render, screen } from "@testing-library/react";
import SkillCard from "../component/SkillCard";

describe('SkillCard Component', () => {
  it('renders with correct image, label, and description', () => {
    const props = {
      imgSrc: "icon/figma.svg",
      label: "Figma",
      desc: "Design tool",
    };

    render(<SkillCard {...props} />);

    const img = screen.getByAltText(props.label);
    const label = screen.getByText(props.label);
    const description = screen.getByText(props.desc);

    expect(img).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.imgSrc);
  });

  it('applies the custom classes if provided', () => {
    const customClass = "bg-gray-300";
    const props = {
      imgSrc: "icon/figma.svg",
      label: "Figma",
      desc: "Design tool",
      classes: customClass,
    };
  
    render(<SkillCard {...props} />);
  
    const skillCard = screen.getByTestId('skill-card');
    expect(skillCard).toHaveClass(customClass);  
  });
  
});
