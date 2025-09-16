# Engine Overview

The Zsh Supercharge (`zsc`) engine is what sets it apart from other Zsh plugin managers. While most plugin managers simply source a list of script files, `zsc` uses a more sophisticated approach that provides a number of benefits.

## The `plugin.json` File

The core of the `zsc` engine is the `plugin.json` file. This file, which is present in the root directory of every `zsc` plugin, contains all the metadata that `zsc` needs to load and manage the plugin.

By using a metadata file, `zsc` is able to do things that other plugin managers cannot, such as:

-   **Dependency Management:** `zsc` can automatically install and manage dependencies for your plugins, including other `zsc` plugins and Homebrew packages.
-   **Schema Validation:** `zsc` validates the `plugin.json` file against a schema to ensure that it is well-formed and contains all the necessary information.
-   **Advanced Loading:** `zsc` can use the information in the `plugin.json` file to lazy-load and asynchronously load plugins.

## The `zsc` Binary

The `zsc` binary is a compiled Go program that is responsible for all the heavy lifting of the `zsc` engine. This includes:

-   Parsing and validating `plugin.json` files.
-   Resolving and installing dependencies.
-   Generating the Zsh code that is used to load the plugins.

By using a compiled binary, `zsc` is able to perform these tasks much faster than a traditional shell script-based plugin manager.
