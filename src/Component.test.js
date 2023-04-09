import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Component from "./Component";

jest.mock("axios");

test("fetches data and renders the result", async () => {
  axios.get.mockResolvedValue({
    data: [ {
      name: "Example Title",
      completed: false,
    } ],
  });

  render(<Component />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  const titleElement = await waitFor(() => screen.getByText("Example Title"));
  expect(titleElement).toBeInTheDocument();
  // expect(screen.getByText("Completed: No")).toBeInTheDocument();
});
