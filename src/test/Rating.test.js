import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from '../components/Rating';

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});


test('displays rating icon and value', () => {
  const ratingValue = 4.5;
  render(<Rating rating={ratingValue} />);

  const iconElement = screen.getByTestId('rating-icon');
  const valueElement = screen.getByText(ratingValue.toString());

  expect(iconElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
});
