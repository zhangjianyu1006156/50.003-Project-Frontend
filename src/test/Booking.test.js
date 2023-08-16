import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Booking } from '../pages/Booking';

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});

// Create a custom mock context for useAuthContext hook
const mockAuthContext = {
  profile: 'mock-profile',
};
jest.mock('../AuthContext/Auth', () => ({
  useAuthContext: () => mockAuthContext,
}));

// Mock the axios module and the delete function
jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('Booking component', () => {
  test('displays the Booking component', () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    expect(screen.getByText('Click to delete the booking')).toBeInTheDocument();
    expect(screen.getByText('TRIPFUSION')).toBeInTheDocument();
  });
});