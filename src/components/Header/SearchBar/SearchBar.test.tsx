import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../../db.json", () => ({
  companies: [
    {
      id: "1",
      title: "Test Company 1",
      email: "test1@example.com",
      description: "Description 1",
    },
  ],
}));

describe("SearchBar Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    expect(
      screen.getByPlaceholderText("What are you looking for?")
    ).toBeInTheDocument();
  });

  it("handles input change", () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const inputElement = screen.getByPlaceholderText(
      "What are you looking for?"
    );
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement).toHaveValue("test");
  });

  it("renders suggestions", () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    // Simulate input change to trigger suggestions
    fireEvent.change(screen.getByPlaceholderText("What are you looking for?"), {
      target: { value: "example" },
    });
  });

  it("navigates to company details on suggestion click", () => {
    const mockNavigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText(
      "What are you looking for?"
    );
    fireEvent.change(inputElement, { target: { value: "test" } });

    // Ensure suggestions are rendered
    const suggestionElement = screen.getByText("Test Company 1");
    expect(suggestionElement).toBeInTheDocument();

    // Click on the suggestion
    fireEvent.click(suggestionElement);

    // Ensure navigation was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith("/company/1");
  });
});
