const { execSync } = require("child_process");
const path = require("path");

const setupScript = path.resolve(__dirname, "../tools/setup.js");

describe("Setup Script", () => {
  it("should run without errors", () => {
    const output = execSync(`node ${setupScript}`).toString();
    expect(output).not.toContain("Error");
  });
});