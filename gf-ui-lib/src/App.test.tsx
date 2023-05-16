import React from "react";
import {render, screen} from "@testing-library/react";
import App from "gf-ui-lib/src/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeDefined();
});
