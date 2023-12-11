import React from "react";
import { render } from "@testing-library/react";
import { Main } from "./Main";
import { MemoryRouter } from "react-router-dom";

describe("Main", () => {
  it("should render", () => {
        render(
          <MemoryRouter>
            <Main /> 
          </MemoryRouter>
        );
  });
});
