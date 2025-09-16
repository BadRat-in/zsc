const Ajv = require("ajv");
const ajv = new Ajv();
const schema = require("../schemas/v1.schema.json");

describe("Schema Validation", () => {
  it("should validate the v1.schema.json file", () => {
    const validate = ajv.compile(schema);
    expect(validate).toBeInstanceOf(Function);
  });
});
