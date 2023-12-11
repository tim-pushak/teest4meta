import React from "react";
import { render, screen } from "@testing-library/react";
import { Load } from "./Load";

describe("Load", () => {
  it("should render", () => {
    render(<Load />);
    expect(screen.getByText("Load")).toBeInTheDocument();
  });
});
