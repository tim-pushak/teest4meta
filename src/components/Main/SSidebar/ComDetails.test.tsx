import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useParams } from "react-router-dom";
import companiesData from "../../../db.json";
import { ComDetails } from "./ComDetails";

// Mocking the useParams hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("ComDetails", () => {
  it("renders company details correctly", () => {
    const companyId = "1";
    (useParams as jest.Mock).mockReturnValue({ companyId });

    render(
      <MemoryRouter initialEntries={[`/companies/${companyId}`]}>
        <Routes>
          <Route path="/companies/:companyId" element={<ComDetails />} />
        </Routes>
      </MemoryRouter>
      )

    const company = companiesData.companies.find(
      (c) => c.id.toString() === companyId
    ) || { id: "", title: "", email: "", description: "" };

    expect(
      screen.getByText(`${company.description}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${company.email}`)).toBeInTheDocument();
  });

  it('renders "Company not found" when company is not in the data', () => {
    const companyId = "invalidCompanyId";
    (useParams as jest.Mock).mockReturnValue({ companyId });

    render(
      <MemoryRouter initialEntries={[`/companies/${companyId}`]}>
        <Routes>
          <Route path="/companies/:companyId" element={<ComDetails />} />
        </Routes>
      </MemoryRouter> 
    );

    expect(screen.getByText("Company not found")).toBeInTheDocument();
  });
});
