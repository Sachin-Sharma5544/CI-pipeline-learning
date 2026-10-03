import Counter from "../Counter";
import { render, screen } from "@testing-library/react";

describe("Counter tests", () => {
  it("validate the count", () => {
    render(<Counter />);
    const header = screen.getByText("Count");
    expect(header).toBeInTheDocument();
  });
});
