/**
 * Scaffold a new zsc plugin
 */

import fs from "fs";
import path from "path";
import readline from "readline";
import { execSync } from "child_process";
import { parseArgs } from "util";

async function main() {
  const { values: args } = parseArgs({
    options: {
      yes: { type: "boolean", short: "y" },
      id: { type: "string" },
      name: { type: "string" },
      version: { type: "string" },
      description: { type: "string" },
      entry: { type: "string" },
      "author-name": { type: "string" },
      "author-email": { type: "string" },
      repo: { type: "string" },
    },
  });

  let id, name, version, description, entry, author_name, author_email, repo;

  if (args.yes) {
    id = args.id || "test-plugin";
    name = args.name || "Test Plugin";
    version = args.version || "1.0.0";
    description = args.description || "A test plugin";
    entry = args.entry || "entry.zsh";
    author_name = args["author-name"] || "Test Author";
    author_email = args["author-email"] || "test@example.com";
    repo = args.repo || "https://github.com/test/test-plugin";
  } else {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const question = (q, defaultValue) =>
      new Promise((res) => {
        rl.question(`${q}${defaultValue ? ` (${defaultValue})` : ""}: `, (answer) =>
          res(answer || defaultValue),
        );
      });

    console.log(
      "This utility will walk you through creating a plugin.json file.\nPress Ctrl+C to quit.",
    );

    id = await question("Plugin ID (e.g., zsh-my-plugin)");
    name = await question("Plugin Name (e.g., My Plugin)");
    version = await question("Version", "1.0.0");
    description = await question("Description", "A zsc plugin");
    entry = await question("Entry Point", "entry.zsh");
    author_name = await question("Author Name");
    author_email = await question("Author Email");
    repo = await question("Repository URL");
    rl.close();
  }

  const pluginDir = path.join("plugins", id);
  if (fs.existsSync(pluginDir)) {
    console.error(`Directory ${pluginDir} already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(pluginDir, { recursive: true });

  const pluginJson = {
    schema: "v1",
    id,
    name,
    version,
    entry,
    dependencies: { plugins: [], brew: [] },
    author: { name: author_name, email: author_email },
    repo,
    description,
  };

  fs.writeFileSync(
    path.join(pluginDir, "plugin.json"),
    JSON.stringify(pluginJson, null, 2),
  );
  fs.writeFileSync(path.join(pluginDir, entry), "");

  console.log(`\nPlugin structure created at ${pluginDir}`);
  console.log(`  - ${path.join(pluginDir, "plugin.json")}`);
  console.log(`  - ${path.join(pluginDir, entry)}`);

  // Validate immediately
  execSync(`node tools/validator.js ${path.join(pluginDir, "plugin.json")}`, {
    stdio: "inherit",
  });
}

main();