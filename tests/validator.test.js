const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const validatorScript = path.resolve(__dirname, "../tools/validator.js");
const pluginDir = path.resolve(__dirname, "test-plugins");

// Create a dummy plugin for testing
const validPlugin = {
  schema: "v1",
  id: "valid-plugin",
  name: "Valid Plugin",
  version: "1.0.0",
};

beforeAll(() => {
  if (!fs.existsSync(pluginDir)) {
    fs.mkdirSync(pluginDir, { recursive: true });
  }
  fs.writeFileSync(
    path.join(pluginDir, "valid-plugin.json"),
    JSON.stringify(validPlugin, null, 2)
  );
});

afterAll(() => {
  fs.rmSync(pluginDir, { recursive: true, force: true });
});

describe("Validator Script", () => {
  it("should validate a valid plugin.json file", () => {
    const result = spawnSync("node", [
      validatorScript,
      path.join(pluginDir, "valid-plugin.json"),
    ]);
    expect(result.stdout.toString()).toContain("is valid");
    expect(result.status).toBe(0);
  });

  it("should invalidate an invalid plugin.json file", () => {
    const invalidPluginContent = {
      schema: "v1",
      name: "Invalid Plugin",
      version: "1.0.0",
    };
    fs.writeFileSync(
      path.join(pluginDir, "invalid-plugin.json"),
      JSON.stringify(invalidPluginContent, null, 2)
    );

    const result = spawnSync("node", [
      validatorScript,
      path.join(pluginDir, "invalid-plugin.json"),
    ]);
    expect(result.stderr.toString()).toContain("is invalid");
    expect(result.stderr.toString()).toContain(
      "must have required property 'id'"
    );
    expect(result.status).toBe(1);
  });
});