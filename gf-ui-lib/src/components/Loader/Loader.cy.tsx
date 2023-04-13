import {mount} from "cypress/react18";
import {Loader} from "./Loader";
import styles from "./Loader.module.scss";


describe("Loader component", () => {
  it("renders", () => {
    mount(<Loader />);
  });

  it("shows loader when isLoading is true", () => {
    mount(<Loader isLoading={true} />);
    cy.get(`.${styles.loader}`).should("be.visible");
  });

  it("hides loader when isLoading is false", () => {
    mount(<Loader isLoading={false} />);
    cy.get(`.${styles.loader}`).should("not.exist");
  });

  it("returns null when isLoading is false", () => {
    mount(<Loader isLoading={false} />);
    cy.get(`.${styles.loader}`).should("not.exist");
  });

  it("sets default value of isLoading to false", () => {
    mount(<Loader />);
    cy.get(`.${styles.loader}`).should("not.exist");
  });

  it("displays correct title", () => {
    mount(<Loader isLoading={true} />);
    cy.get(`.${styles.loader}`).contains("Golden Fleece");
  });

});