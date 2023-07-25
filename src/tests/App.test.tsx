import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Renders main page correctly', () => {
  it('Should render the page correctly', () => {
    render(<App />);
    screen.debug();
    const linkElement = screen.getByText(/Signup/i);
    expect(linkElement).not.toBeNull();
    expect(linkElement).toBeInTheDocument();
  });
})

