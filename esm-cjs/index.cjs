async function foo() {
  const { add } = await import("./util.mjs");

  console.log(add(1, 2));
}

foo();