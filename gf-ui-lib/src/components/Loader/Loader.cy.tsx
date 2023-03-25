import {mount} from "cypress/react";
import {Loader} from "./Loader";

describe("<Loader />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Loader />);
  });
});