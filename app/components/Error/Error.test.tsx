import { render, screen } from "~/utils";
import { Error } from "./Error";

describe("Error component", () => {
    it("is basic error", () => {
        render(<Error/>);
        expect(screen.findByTestId("error")).toBeInTheDocument()
    });
});
