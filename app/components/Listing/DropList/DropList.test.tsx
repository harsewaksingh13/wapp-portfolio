import { render, screen } from "~/utils";
import { DropList } from "./DropList";

const items = [{ title: "Item 1" }, { title: "Item 2" }]

describe("DropList component", () => {
    it("has at least 1 item", () => {
        render(<DropList items={[]} />);
        expect(screen.getByText(items[0].title)).toBeInTheDocument()
    });
});
