import { render, screen } from "~/utils";
import { CardItem } from "./CardItem";

describe('Hero component', () => {
    it('has at least 1 item', () => {
        render(<CardItem title='The portfolio' />);
        expect(screen.findByText('The portfolio')).toBeInTheDocument()
    });
});