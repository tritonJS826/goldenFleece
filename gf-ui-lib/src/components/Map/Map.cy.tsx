import {mount} from "cypress/react";
import {Map} from "src/components/Map/Map";
import {markers} from "src/components/Map/Map.fixtures";

describe("<Map />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Map markers={markers} />);
  });
});