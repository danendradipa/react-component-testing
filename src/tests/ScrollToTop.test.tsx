// ScrollToTop.test.tsx
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Untuk merender komponen dalam konteks router
import ScrollToTop from "../component/ScrollToTop";

describe("ScrollToTop component", () => {
  it("should call window.scrollTo when the pathname changes", () => {
    // Mocking window.scrollTo
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    // Render ScrollToTop dalam konteks MemoryRouter
    render(
      <MemoryRouter initialEntries={['/initial']}>
        <ScrollToTop />
      </MemoryRouter>
    );

    // Simulasi perubahan pathname
    window.history.pushState({}, '', '/new-path');

    // Memastikan bahwa window.scrollTo dipanggil setelah pathname berubah
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });
});
