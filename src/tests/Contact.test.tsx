import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Pages/Contact";

describe("Contact Component", () => {
  test("form fields are present", () => {
    // Render komponen Contact
    render(<Contact />);

    // Memeriksa apakah input form tersedia
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test("form submission works", () => {
    // Render komponen Contact
    render(<Contact />);

    // Menemukan elemen input dan tombol
    const fullNameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    // Simulasi input pada form
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, I would like to collaborate!" } });

    // Memeriksa apakah nilai input sudah berubah
    expect(fullNameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john@example.com");
    expect(messageInput).toHaveValue("Hello, I would like to collaborate!");

    // Simulasi klik tombol kirim
    fireEvent.click(submitButton);

    expect(screen.getByText(/Send Message/i)).toBeInTheDocument();
  });
});
