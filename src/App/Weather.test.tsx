import { render, waitFor } from "@testing-library/react";
import { Weather } from "./Weather";

describe("Weather", () => {
  it("Renders Component According To Snapshot", () => {
    const { container } = render(<Weather city={null} />);
    expect(container).toMatchSnapshot();
  });

  it("displays weather information when a city is provided", async () => {
    const { getByText, getByAltText } = render(<Weather city="New York" />);
    await waitFor(() => {
      expect(getByText(/New York/i)).toBeInTheDocument();
      expect(getByText(/[\d]+ Celsius/)).toBeInTheDocument();
      expect(getByAltText("Weather")).toBeInTheDocument();
    });
  });
});
