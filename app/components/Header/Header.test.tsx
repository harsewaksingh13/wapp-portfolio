import { render, screen } from "~/utils";
import { Header } from "./Header";

const items = [{ title: "Item 1" }, { title: "Item 2" }]

describe("Header component", () => {
    it("has at least 1 item", () => {
        render(<Header/>);
        expect(screen.findByTestId("navbar-logo")).toBeInTheDocument()
    });
});
