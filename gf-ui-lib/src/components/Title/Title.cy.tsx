import {Title} from "./Title";
import {mount} from "cypress/react";

const TITLE_VALUE = "Title text";

describe("<SmallTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(
      <Title
        level="h4"
        text={TITLE_VALUE}
      />,
    );
    cy.get("h4").should("contains.text", TITLE_VALUE);
  });
});