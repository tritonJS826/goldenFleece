import {Title} from "src/components/Title/Title";
import {mount} from "cypress/react";
import {TitleLevel} from "src/components/Title/TitleLevel";

const TITLE_VALUE = "Title text";

describe("<SmallTitle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(
      <Title
        level={TitleLevel.h4}
        text={TITLE_VALUE}
      />,
    );
    cy.get(TitleLevel.h4).should("contains.text", TITLE_VALUE);
  });
});