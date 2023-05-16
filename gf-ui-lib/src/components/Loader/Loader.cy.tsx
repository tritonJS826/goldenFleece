import {mount} from "cypress/react18";
import {Loader} from "src/components/Loader/Loader";
import styles from "src/components/Loader/Loader.module.scss";


describe("Loader component", () => {
  it("renders", () => {
    mount(<Loader />);
  });

  it("shows loader when isShowLoader is true", () => {
    mount(<Loader isShowLoader={true} />);
    cy.get(`.${styles.loader}`).should("be.visible");
  });

  it("hides loader when isShowLoader is false", () => {
    mount(<Loader isShowLoader={false} />);
    cy.get(`.${styles.loader}`).should("not.exist");
  });

  it("returns null when isShowLoader is false", () => {
    mount(<Loader isShowLoader={false} />);
    cy.get(`.${styles.loader}`).should("not.exist");
  });

  it("sets default value of isShowLoader to true", () => {
    mount(<Loader />);
    cy.get(`.${styles.loader}`).should("be.visible");
  });

  it("displays correct title", () => {
    mount(<Loader isShowLoader={true} />);
    cy.get(`.${styles.loader}`).contains("Golden Fleece");
  });

});