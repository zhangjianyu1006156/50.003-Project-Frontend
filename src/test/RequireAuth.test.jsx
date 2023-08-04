import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { AuthProvider } from '../AuthContext/Auth';
import { RequireAuth } from '../AuthContext/RequireAuth'

describe('RequireAuth component', () => {
    it('should redirect to the login page when not logged in', () => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <AuthProvider>
            <Route path="/search" element={<RequireAuth><div data-testid="protected-content">Protected Content</div></RequireAuth>} />
            <Route path="/" element={<div data-testid="login-page">Login Page</div>} />
          </AuthProvider>
        </MemoryRouter>
      );
      // When not logged in, it should redirect to the login page
    const loginPageElement = screen.getByTestId('login-page');
    expect(loginPageElement).toBeInTheDocument();

    // Since not logged in, the protected content should not be visible
    const protectedContentElement = screen.queryByTestId('protected-content');
    expect(protectedContentElement).not.toBeInTheDocument();
  });
});