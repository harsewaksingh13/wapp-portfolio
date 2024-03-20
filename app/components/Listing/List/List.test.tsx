import { render, screen } from "~/utils";
import { List } from "./List";

const items = [{ title: "Item 1" }, { title: "Item 2" }]

describe("List component", () => {
    it("has at least 1 item", () => {
        render(<List items={[]} />);
        expect(screen.getByText(items[0].title)).toBeInTheDocument()
    });
});
