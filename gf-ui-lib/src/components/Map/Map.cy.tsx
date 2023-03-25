import {mount} from "cypress/react";
import {Map} from "./Map";
import {markers} from "./Map.fixtures";

describe("<Map />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Map markers={markers} />);
  });
});