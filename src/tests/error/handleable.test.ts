import test from "ava";
import { invariant, mayFail } from "index";

test("can fail", (t) => {
  const result = mayFail(() => {
    throw new Error("Error");
  });

  invariant(!result.ok);
  t.is(result.error, "Error");
});

test("can succeed", (t) => {
  const result = mayFail(() => "success");

  invariant(result.ok);
  t.is(result.data, "success");
});

test("can handle", (t) => {
  let handled = false;

  const result = mayFail(() => {
    throw new Error("this is an error");
  }).handle((message) => {
    t.is(message, "this is an error");
    handled = true;
  });

  invariant(!result.ok);
  t.is(result.error, "this is an error");
  t.true(handled);
});
