import {Button} from "gf-ui-lib/src/components/Button/Button";
import {mount} from "cypress/react";
import styles from "gf-ui-lib/src/components/Button/Button.module.scss";

const STUB_BUTTON_VALUE = "TEST BUTTON";

describe("Button component", () => {
  it("contains right value", () => {
    const STUB_FUNCTION = cy.stub();
    mount(
      <Button
        value={STUB_BUTTON_VALUE}
        onClick={STUB_FUNCTION}
      />,
    );
    cy.get("button").should("contains.text", STUB_BUTTON_VALUE);
  });

  it("has a default type of \"button\" if type prop is not defined", () => {
    const STUB_FUNCTION = cy.stub();
    mount(
      <Button
        value={STUB_BUTTON_VALUE}
        onClick={STUB_FUNCTION}
      />,
    );
    cy.get("button").should("have.attr", "type", "button");
  });

  it("button type is set correctly if type prop is defined", () => {
    const STUB_FUNCTION = cy.stub();
    mount(
      <Button
        value={STUB_BUTTON_VALUE}
        onClick={STUB_FUNCTION}
        type="submit"
      />,
    );
    cy.get("button[type=\"submit\"]").should("exist");
  });

  it("button size is set correctly if size prop is defined as 'innerContent'", () => {
    const STUB_FUNCTION = cy.stub();
    mount(
      <Button
        value={STUB_BUTTON_VALUE}
        onClick={STUB_FUNCTION}
        size="innerContent"
      />,
    );
    cy.get("button").should("have.class", styles.innerContent);
  });

  it("button size is set correctly if size prop is not defined and it has 'parentWidth' style", () => {
    const STUB_FUNCTION = cy.stub();
    mount(
      <Button
        value={STUB_BUTTON_VALUE}
        onClick={STUB_FUNCTION}
      />,
    );
    cy.get("button").should("have.class", styles.parentWidth);
  });

  it("onClick callback is triggered when the button is clicked", () => {
    const STUB_FUNCTION = cy.stub();
    mount(
      <Button
        value={STUB_BUTTON_VALUE}
        onClick={STUB_FUNCTION}
      />,
    );

    cy.get("button").click().then(() => {
      expect(STUB_FUNCTION).to.be.called;
    });
  });

  it("button has the correct CSS classes applied", () => {
    const STUB_FUNCTION = cy.stub();
    mount(
      <Button
        value={STUB_BUTTON_VALUE}
        onClick={STUB_FUNCTION}
      />,
    );
    cy.get("button").should("have.class", styles.button);
  });
});