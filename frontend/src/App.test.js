import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// TODO: Create test for this application and components
test("Renders App", () => {
  const AppRender = render(<App />);
  expect(true).toBe(true);
});
