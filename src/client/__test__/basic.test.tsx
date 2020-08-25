import * as React from "react";
import { shallow } from "enzyme";
import { AppFrame } from "../components/appframe";
import ShowPanel from "../containers/showpanel";

describe("AppFrame Component", () => {
    let repr: any = null;

    beforeEach(() => {
        repr = shallow(<AppFrame />);
    });

    it("Should have a ShowPanel", () => {
        console.log(repr);
        expect(
            repr.contains(<ShowPanel />),
        ).toBe(true);
    });

});
