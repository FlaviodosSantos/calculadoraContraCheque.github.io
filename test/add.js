const add = require("../js/add");

QUnit.module("add");

QUnit.test("two numbers", (assert) => {
  assert.equal(add(1, 2), 3);
});
