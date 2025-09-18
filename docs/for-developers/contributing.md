# Contributing Plugins

We welcome contributions to the Zsh Supercharge plugin store! The preferred method for adding a plugin is as a **git submodule**, as this allows for easier maintenance, automatic version pinning, and consistent plugin metadata.

---

## Adding a Plugin as a Submodule (Preferred)

For a detailed guide on creating a new plugin, please see the [Plugin Creation Guide](./plugin-creation.md).

The basic steps are:

1. **Fork the `zsc` repository.**

2. **Add your plugin as a submodule:**

   ```bash
   git submodule add <repository-url> plugins/<plugin-id>
   ```

3. **Ensure your plugin has a valid `plugin.json` file.**
   You can create one using the `init` tool:

   ```bash
   yarn init
   ```

   And validate it using the `validate` tool:

   ```bash
   yarn validate <plugin-id>
   ```

4. **Update the plugin registry (`.plugins.yml`)** using the new registry tool:

   ```bash
   yarn register
   ```

   This command:
   - Reads `.gitmodules` and each plugin’s `plugin.json`.
   - Resolves the pinned commit SHA for your submodule.
   - Updates `.plugins.yml` with all required plugin metadata (author, email, description, entry point, etc.).

5. **Commit your changes, including `.plugins.yml`, push, and open a pull request.**

---

## Adding a Plugin Directly

If you do not want to maintain your plugin in a separate repository, you can add the source code directly to the `zsc` repository:

1. **Fork the `zsc` repository.**

2. **Create a new directory for your plugin** at:

   ```
   plugins/<plugin-id>
   ```

3. **Add your plugin’s files** to the new directory.

4. **Create and validate a `plugin.json` file** using:

   ```bash
   yarn init
   yarn validate <plugin-id>
   ```

5. **Register the plugin (`.plugins.yml`)**:

   ```bash
   yarn register
   ```

6. **Commit your changes, including `.plugins.yml`, push, and open a pull request.**

---

### Notes:

- `.plugins.yml` is now the **single source of truth** for `zsc-core`.
- All plugin installations in `zsc-core` use the **pinned commit SHA** from `.plugins.yml`, ensuring stable plugin versions.
- Always run `yarn register` before submitting a PR to ensure your plugin is properly registered.
