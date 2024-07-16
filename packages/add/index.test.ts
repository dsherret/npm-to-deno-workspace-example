import { test } from "node:test";
import assert from "node:assert";
import { add } from "./index.ts";

test("add", () => {
  assert.equal(add(1, 2), 3);
});
