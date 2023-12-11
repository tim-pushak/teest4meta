import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import companiesData from "../../../db.json";
import { ComList } from "./ComList";

describe("ComList", () => {
  it("renders a list of companies with correct links", () => {
    render(
      <MemoryRouter>
        <ComList />
      </MemoryRouter>
    );

    companiesData.companies.forEach((company) => {
      const link = screen.getByRole("link", { name: company.title });
      expect(link).toBeInTheDocument();
      expect(link.getAttribute("href")).toBe(`/company/${company.id}`);
    });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ComList />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
