import {SmallTitle} from "./SmallTitle";
import {mount} from "cypress/react";

const TITLE_VALUE = "Title text";

describe("<SmallTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(
      <SmallTitle
        text={TITLE_VALUE}
      />,
    );
    cy.get("h4").should("contains.text", TITLE_VALUE);
  });
});