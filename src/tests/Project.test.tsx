import { render, screen } from "@testing-library/react";
import Project from "../Pages/Project";

// Mock the ProjectCard component so that we can focus on testing the Project component
jest.mock("../component/ProjectCard", () => ({
  __esModule: true,
  default: jest.fn(() => <div>ProjectCard</div>),
}));

describe("Project", () => {
  it("renders the correct number of ProjectCard components", () => {
    render(<Project />);

    // Check if ProjectCard is rendered for each project (8 in this case)
    const projectCards = screen.getAllByText("ProjectCard");
    expect(projectCards).toHaveLength(8);
  });

  it("renders the correct heading", () => {
    render(<Project />);

    // Check if the heading is rendered correctly
    expect(screen.getByText("My Highlight Projects")).toBeInTheDocument();
  });
});
