const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const initScript = path.resolve(__dirname, "../tools/init.js");
const pluginsDir = path.resolve(__dirname, "../plugins");

const pluginId = "test-plugin";
const pluginDir = path.join(pluginsDir, pluginId);

afterEach(() => {
  if (fs.existsSync(pluginDir)) {
    fs.rmSync(pluginDir, { recursive: true, force: true });
  }
});

describe("Init Script", () => {
  it("should create a new plugin structure", (done) => {
    const command = `node ${initScript} --yes --id=${pluginId}`;

    exec(command, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stdout).toContain("Plugin structure created");
      expect(fs.existsSync(pluginDir)).toBe(true);
      expect(fs.existsSync(path.join(pluginDir, "plugin.json"))).toBe(true);
      expect(fs.existsSync(path.join(pluginDir, "entry.zsh"))).toBe(true);
      done();
    });
  }, 10000); // Increase timeout to 10 seconds
});