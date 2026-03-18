import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CV from "./CV";

test("renders a direct download link for the CV PDF", () => {
  render(
    <MemoryRouter>
      <CV />
    </MemoryRouter>,
  );

  const downloadLink = screen.getByRole("link", { name: /download cv pdf/i });

  expect(downloadLink).toHaveAttribute("download", "Joe-Odams-CV.pdf");
  expect(downloadLink).toHaveAttribute("href", expect.stringContaining("CV_File.pdf"));
});
