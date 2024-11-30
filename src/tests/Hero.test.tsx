import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home";

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders the welcome text', () => {
    const welcomeText = screen.getByText(/WELCOME TO MY PORTFOLIO/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it('renders the name correctly', () => {
    const name = screen.getByText(/Danendra Dipa/i);
    expect(name).toBeInTheDocument();
  });

  it('renders the CV download button', () => {
    const button = screen.getByRole('button', { name: /Download CV/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the image with the correct alt text', () => {
    const image = screen.getByAltText(/Danendra/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'dane-hero.png');
  });
});
