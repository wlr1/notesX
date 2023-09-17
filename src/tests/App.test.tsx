import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("math function should add two numbers correctly", () => {
  // Test the math function separately
  const result = App().props.children.props.children;

  // The expected result of 2 + 5 is 7
  expect(result).toBe(7);
});
