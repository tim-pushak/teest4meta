// Import necessary libraries
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("should render App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it("should display content from Main", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();
  });
});
