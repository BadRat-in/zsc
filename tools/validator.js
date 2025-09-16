/**
 * Validator for zsc plugin.json files
 */

import fs from "fs";
import path from "path";
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true, strict: true });

// Get plugin.json file path (default ./plugin.json)
const pluginFile = process.argv[2] || "./plugin.json";

// Find repo root (assumes git repo)
const execSync = (cmd) =>
  require("child_process").execSync(cmd).toString().trim();
let repoRoot;
try {
  repoRoot = execSync("git rev-parse --show-toplevel");
} catch {
  repoRoot = process.cwd();
}

// Find latest schema version
const schemaDir = path.join(repoRoot, "schemas");
const schemas = fs
  .readdirSync(schemaDir)
  .filter((f) => f.endsWith(".schema.json"));
if (schemas.length === 0) {
  console.error("No schema files found in ./schemas/");
  process.exit(1);
}
const latestSchema = schemas.sort().reverse()[0];
const schemaFile = path.join(schemaDir, latestSchema);

// Read plugin.json
if (!fs.existsSync(pluginFile)) {
  console.error(`Plugin file not found: ${pluginFile}`);
  process.exit(1);
}
const pluginData = JSON.parse(fs.readFileSync(pluginFile, "utf8"));

// Read schema
const schema = JSON.parse(fs.readFileSync(schemaFile, "utf8"));

// Validate
const validate = ajv.compile(schema);
const valid = validate(pluginData);

if (valid) {
  console.log(
    `\x1b[32m✔︎ ${pluginFile} is valid against ${latestSchema}\x1b[0m`,
  );
} else {
  console.error(`\x1b[31m✖ ${pluginFile} is invalid:\x1b[0m`);
  console.error(validate.errors);
  process.exit(1);
}
