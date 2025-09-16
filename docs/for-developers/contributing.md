# Contributing Plugins

We welcome contributions to the Zsh Supercharge plugin store! The preferred method for adding a plugin is as a git submodule, as this allows for easier maintenance.

## Adding a Plugin as a Submodule (Preferred)

For a detailed guide on creating a new plugin and adding it as a submodule, please see the [Plugin Creation Guide](./plugin-creation.md).

The basic steps are:

1.  **Fork the `zsc` repository.**
2.  **Add your plugin as a submodule.**

    ```bash
    git submodule add <repository-url> plugins/<plugin-id>
    ```

3.  **Ensure your plugin has a valid `plugin.json` file.** You can create one using the `init` tool:

    ```bash
    yarn init
    ```

    And you can validate it using the `validate` tool:

    ```bash
    yarn validate plugins/<plugin-id>/plugin.json
    ```

4.  **Commit, push, and open a pull request.**

## Adding a Plugin Directly

If you do not want to maintain your plugin in a separate repository, you can add the source code directly to the `zsc` repository.

1.  **Fork the `zsc` repository.**
2.  **Create a new directory for your plugin** at `plugins/<plugin-id>`.
3.  **Add your plugin's files to the new directory.**
4.  **Create and validate a `plugin.json` file** using `yarn init` and `yarn validate`.
5.  **Commit, push, and open a pull request.**
