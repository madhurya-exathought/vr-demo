import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('renders the header with correct text', () => {
    render(<Header />);
    const textElement = screen.getByText(/React StarterKit with Typescript/);
    expect(textElement).toBeInTheDocument();
  });
});
