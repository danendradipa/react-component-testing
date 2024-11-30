// Navbar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Mengganti BrowserRouter dengan MemoryRouter
import Navbar from '../component/Navbar';

describe('Navbar Component', () => {
  const setup = () => {
    render(
      <MemoryRouter> {/* Menggunakan MemoryRouter */}
        <Navbar />
      </MemoryRouter>
    );
  };

  it('renders the logo correctly', () => {
    setup();
    const logo = screen.getByText(/Dane/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    setup();
    const navLinks = ['Home', 'About', 'Projects', 'Contact'];
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('toggles the menu when hamburger button is clicked', () => {
    setup();
    const button = screen.getByRole('button', { name: /toggle navigation/i });
    expect(button).toBeInTheDocument();

    // Before clicking, ensure the menu is hidden
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('-translate-x-full');

    // Click to open the menu
    fireEvent.click(button);
    expect(nav).toHaveClass('translate-x-0');

    // Click to close the menu
    fireEvent.click(button);
    expect(nav).toHaveClass('-translate-x-full');
  });

  it('closes the menu when a navigation link is clicked', () => {
    setup();
    const button = screen.getByRole('button', { name: /toggle navigation/i });
    fireEvent.click(button); // Open the menu

    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink); // Click a navigation link

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('-translate-x-full'); // Menu should close
  });

  it('renders social media icons correctly for both desktop and mobile', () => {
    setup();
  
    const socialLinks = [
      { alt: 'GitHub', href: 'https://github.com/danendradipa' },
      { alt: 'LinkedIn', href: 'https://www.linkedin.com/in/danendradipa/' },
      { alt: 'Instagram', href: 'https://instagram.com/danendradipa_' },
    ];
  
    socialLinks.forEach(({ alt, href }) => {
      const icons = screen.getAllByAltText(alt);
  
      expect(icons.length).toBe(2); // Should have 2 icons: mobile and desktop
  
      icons.forEach((icon) => {
        expect(icon).toBeInTheDocument();
        expect(icon.closest('a')).toHaveAttribute('href', href);
      });
    });
  });  
});
