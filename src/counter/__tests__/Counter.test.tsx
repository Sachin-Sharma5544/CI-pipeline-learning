import Counter from "../Counter";
import { render, screen } from "@testing-library/react";

describe("Counter tests", () => {
  it("validate the count", () => {
    render(<Counter />);
    const header = screen.getByText("Count: 0");
    expect(header).toBeInTheDocument();
  });
});
