import { sum } from "../sum";
import { test, expect } from "vitest";

test("sum", () => {
  const items = [
    { name: "a", count: 1 },
    { name: "b", count: 2 },
  ];

  expect(sum(items)).toBe(3);
});
