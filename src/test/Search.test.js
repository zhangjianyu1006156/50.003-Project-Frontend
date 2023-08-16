import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Search } from "../pages/Search";


console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});


test("displays an error message when search input is null", async () => {
  render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );

  const searchButton = screen.getByRole("button", { name: "Search Now!" });

  // Click the search button without filling in any input
  fireEvent.click(searchButton);

  // Wait for the error message to appear
  waitFor(() => {
    const errorMessage = screen.queryByText("Please fill in all the fields");
    expect(errorMessage).toBeInTheDocument();
  });
});
