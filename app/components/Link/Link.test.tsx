import { render, screen } from "~/utils";
import { Link } from "./Link";

describe("Link component", () => {
    it("is basic link", () => {
        render(<Link to="/">Home</Link>);
        expect(screen.findByTestId("link")).toBeInTheDocument()
    });
});
