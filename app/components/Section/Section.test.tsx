import { render, screen } from "~/utils";
import { Section } from "./Section";


describe("Section component", () => {
    it("has left title", () => {
        render(<Section title={"Section Title"}/>);
        expect(screen.findByTestId("title")).toBeInTheDocument()
    });
});
