import { render, screen } from "~/utils";
import { Hero } from "./Hero";

describe('Hero component', () => {
    it('has at least 1 item', () => {
        render(<Hero title='The portfolio' />);
        expect(screen.findByText('The portfolio')).toBeInTheDocument()
    });
});
