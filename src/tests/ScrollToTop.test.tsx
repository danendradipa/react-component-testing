// ScrollToTop.test.tsx
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import ScrollToTop from "../component/ScrollToTop";

describe("ScrollToTop component", () => {
  it("should call window.scrollTo when the pathname changes", () => {
    // Mocking window.scrollTo
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    render(
      <MemoryRouter initialEntries={['/initial']}>
        <ScrollToTop />
      </MemoryRouter>
    );

    window.history.pushState({}, '', '/new-path');

    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });
});
