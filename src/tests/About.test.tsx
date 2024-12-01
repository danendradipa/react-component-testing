import { render, screen } from "@testing-library/react";
import About from "../Pages/About";

describe('About Component', () => {
  it('renders the "About Me" section correctly', () => {
    render(<About />);

    const title = screen.getByText(/About Me/i);
    const paragraph1 = screen.getByText(/Hi everyone, my name is Danendra Dipa/i);
    const paragraph2 = screen.getByText(/I also have a background in designing user-friendly and visually appealing interfaces/i);
    const button = screen.getByRole('button', { name: /Download CV/i });

    expect(title).toBeInTheDocument();
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders skill cards correctly', () => {
    render(<About />);    

    const skillCards = screen.getAllByTestId('skill-card-img');
  
    expect(skillCards).toHaveLength(13); 
  });

  it('renders image with the correct alt text in About section', () => {
    render(<About />);

    const image = screen.getByAltText(/Danendra/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'dane-square.jpeg');
  });
});
