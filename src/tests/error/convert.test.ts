import test from "ava";
import { convertError as convert } from "index";

test("can convert string", (t) => {
  t.is(convert("this is a string"), "this is a string");
});

test("can convert Error", (t) => {
  t.is(convert(new Error("An Error was thrown")), "An Error was thrown");
});

test("can convert bigint", (t) => {
  t.is(convert(10n), "10");
});

test("can convert object", (t) => {
  t.is(
    convert({ msg: "This is an object" }),
    '{"msg":"1"},"This is an object"'
  );
});

test("can convert class", (t) => {
  class MyObject {
    constructor(public a: string, public b: number) {}
  }

  t.is(convert(new MyObject("a", 3)), '{"a":"1","b":3},"a"');
});
