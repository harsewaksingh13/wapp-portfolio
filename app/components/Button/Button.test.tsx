import { render, screen, AllByAttribute, queryAllByAttribute } from "~/utils";
import { Button, ButtonPrimary } from "./Button";

const items = [{ title: "Item 1" }, { title: "Item 2" }]

describe("Button component", () => {
    it("is primary button", () => {
        render(<ButtonPrimary />);
        expect(screen.getByTestId("button-primary").style.accentColor == '')
    });
});
