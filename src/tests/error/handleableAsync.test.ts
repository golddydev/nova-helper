import test from "ava";
import { invariant, mayFailAsync } from "index";
import { sleep } from ".";

test("can fail", async (t) => {
  const result = await mayFailAsync(async () => {
    await sleep();
    throw new Error("Error");
  }).complete();

  invariant(!result.ok);
  t.is(result.error, "Error");
});

test("can succeed", async (t) => {
  const result = await mayFailAsync(async () => {
    await sleep();
    return "success";
  }).complete();

  invariant(result.ok);
  t.is(result.data, "success");
});

test("can handle", async (t) => {
  let handled = false;

  const result = await mayFailAsync(async () => {
    throw new Error("this is an error");
  })
    .handle((message) => {
      t.is(message, "this is an error");
      handled = true;
    })
    .complete();

  invariant(!result.ok);
  t.is(result.error, "this is an error");
  t.true(handled);
});
