#!/usr/bin/env node

/**
 * This script sets up the development environment for zsc.
 */

import { execSync } from "child_process";

function commandExists(command) {
  try {
    execSync(`command -v ${command}`, { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}

function main() {
  console.log("Setting up the zsc development environment...");

  if (!commandExists("yarn")) {
    console.error(
      "Error: yarn is not installed. Please install yarn and try again."
    );
    process.exit(1);
  }

  console.log("--> Installing dependencies with yarn...");
  try {
    execSync("yarn install", { stdio: "inherit" });
    console.log("\nSetup complete! You can now run 'yarn test' to run the tests.");
  } catch (error) {
    console.error("\nError: Failed to install dependencies.");
    process.exit(1);
  }
}

main();