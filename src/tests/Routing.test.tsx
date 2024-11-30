import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";

describe("Routing Test", () => {
  it("renders the Home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it("renders the About page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });

  it("renders the Project page", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Routes>
          <Route path="/projects" element={<Project />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  it("renders the Contact page", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });
});
