import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComparisonCard from '../components/ComparisonCard'; // Update the import path

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});

test('renders ComparisonCard component with correct data', () => {
    const mockData = {
      images: ['image-url'],
      placename: 'Sample Place',
      sourcewebsite: 'Sample Website',
      bookingmode: 'Direct',
      bookingprice: 'S$100',
      rating: 4.5,
    };

    render(
        // Wrap your component with MemoryRouter
        <MemoryRouter>
          <ComparisonCard my={mockData} other={{}} />
        </MemoryRouter>
      );


  expect(screen.getByText(/Sample Place/)).toBeInTheDocument();
  expect(screen.getByText(/Sample Website/)).toBeInTheDocument();
  expect(screen.getByText(/Direct/)).toBeInTheDocument();
  expect(screen.getByText(/S\$100/)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /View/ })).toBeInTheDocument();
});
