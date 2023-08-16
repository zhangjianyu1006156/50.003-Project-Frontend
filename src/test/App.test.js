import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Glogin component for default route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const gloginElement = screen.getByTestId("glogin");
  expect(gloginElement).toBeInTheDocument();
});

test("renders Search component for /search route", () => {
  render(
    <MemoryRouter initialEntries={["/search"]}>
      <App />
    </MemoryRouter>
  );
  const searchElement = screen.getByTestId("search");
  expect(searchElement).toBeInTheDocument();
});

test("renders Results component for /results route", () => {
  render(
    <MemoryRouter initialEntries={["/results"]}>
      <App />
    </MemoryRouter>
  );
  const resultsElement = screen.getByTestId("results");
  expect(resultsElement).toBeInTheDocument();
});
