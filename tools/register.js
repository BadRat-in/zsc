/**
 * Registry generator for zsc plugin store.
 *
 * Reads `.gitmodules` + each plugin's `plugin.json`
 * and generates a consolidated `.plugins.yml` file.
 */

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// Root dir = repo root (one above tools/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const gitmodulesPath = path.join(repoRoot, ".gitmodules");
const outputPath = path.join(repoRoot, ".plugins.yml");

// --- Step 1: Parse .gitmodules ---
function parseGitmodules(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("❌ .gitmodules not found at", filePath);
    process.exit(1);
  }

  const lines = fs.readFileSync(filePath, "utf8").split("\n");
  const modules = [];
  let current = {};

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith("[submodule")) {
      if (current.path) modules.push(current);
      current = {};
    } else if (line.startsWith("path")) {
      current.path = line.split("=").pop().trim();
    } else if (line.startsWith("url")) {
      current.url = line.split("=").pop().trim();
    }
  }
  if (current.path) modules.push(current);
  return modules;
}

// --- Step 2: Get commit SHA of submodule ---
function getCommitSha(submodulePath) {
  try {
    const out = execSync(`git ls-tree HEAD ${submodulePath}`, { cwd: repoRoot })
      .toString()
      .trim();

    const fields = out.split(/\s+/);
    if (fields.length < 3) {
      console.warn(
        `⚠️  Unexpected ls-tree output for ${submodulePath}: ${out}`,
      );
      return null;
    }
    return fields[2]; // <--- commit SHA
  } catch (err) {
    console.error(
      `⚠️  Failed to get commit for ${submodulePath}:`,
      err.message,
    );
    return null;
  }
}

// --- Step 3: Read plugin.json metadata ---
function readPluginMetadata(submodulePath) {
  const pluginJsonPath = path.join(repoRoot, submodulePath, "plugin.json");
  if (!fs.existsSync(pluginJsonPath)) {
    console.error(`⚠️  Missing plugin.json in ${submodulePath}`);
    return {};
  }
  try {
    return JSON.parse(fs.readFileSync(pluginJsonPath, "utf8"));
  } catch (err) {
    console.error(
      `⚠️  Failed to parse plugin.json in ${submodulePath}`,
      err.message,
    );
    return {};
  }
}

// --- Step 4: Build registry ---
function buildRegistry() {
  const modules = parseGitmodules(gitmodulesPath);

  const registry = {
    plugins: modules.map((mod) => {
      const sha = getCommitSha(mod.path);
      const meta = readPluginMetadata(mod.path);

      return {
        id: meta.id || path.basename(mod.path),
        name: meta.name || path.basename(mod.path),
        url: mod.url,
        commit: sha,
        author: meta.author || {},
        description: meta.description || "",
      };
    }),
  };

  return registry;
}

// --- Step 5: Write .plugins.yml ---
function writeRegistry(registry) {
  const yamlStr = yaml.dump(registry, { noRefs: true, lineWidth: 100 });
  fs.writeFileSync(outputPath, yamlStr, "utf8");
  console.log(`✅ Registry written to ${outputPath}`);
}

// --- Run ---
const registry = buildRegistry();
writeRegistry(registry);
