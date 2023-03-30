import {Button} from "./Button";
import {mount} from "cypress/react";

const BUTTON_VALUE = "TEST BUTTON";
const STUB_FUNCTION = () => null;

describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(
      <Button
        value={BUTTON_VALUE}
        onClick={STUB_FUNCTION}
      />,
    );
    cy.get("button").should("contains.text", BUTTON_VALUE);
  });
});