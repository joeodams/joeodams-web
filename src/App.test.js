import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the homepage hero and navigation", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /software engineer building fintech applications and distributed systems/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /view cv/i })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /projects/i }).length).toBeGreaterThan(0);
});
