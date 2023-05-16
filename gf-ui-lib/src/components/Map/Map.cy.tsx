import {mount} from "cypress/react";
import {Map} from "gf-ui-lib/src/components/Map/Map";
import {markers} from "gf-ui-lib/src/components/Map/Map.fixtures";

describe("<Map />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Map markers={markers} />);
  });
});