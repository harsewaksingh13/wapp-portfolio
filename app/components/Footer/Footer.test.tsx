import { render, screen } from "~/utils";
import { Footer } from "./Footer";

const items = [{ title: "Item 1" }, { title: "Item 2" }]

describe("Footer component", () => {
    it("has at least 1 item", () => {
        render(<Footer/>);
        expect(screen.findByTestId("privacy")).toBeInTheDocument()
    });
});
