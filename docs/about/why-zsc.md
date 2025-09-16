# Why Zsh Supercharge?

There are many Zsh plugin managers available, so why did we create another one?

Zsh Supercharge (`zsc`) was born out of a desire for a more robust, performant, and user-friendly plugin management experience. While other plugin managers are excellent, we felt that there were a few key areas where they could be improved.

## The Problem with Traditional Plugin Managers

Most traditional Zsh plugin managers work by simply sourcing a list of script files. While this approach is simple, it has a few drawbacks:

-   **No Dependency Management:** If a plugin has dependencies, it is up to the user to install them manually. This can be a tedious and error-prone process.
-   **No Validation:** There is no way to ensure that a plugin is well-formed or that it will not conflict with other plugins.
-   **Slow Startup Times:** As the number of plugins increases, the startup time of the shell can become noticeably slower.

## The Zsh Supercharge Solution

`zsc` is designed to address these issues by using a more modern, schema-driven approach to plugin management.

-   **Automatic Dependency Management:** `zsc` can automatically install and manage dependencies for your plugins, including other `zsc` plugins and Homebrew packages.
-   **Schema Validation:** `zsc` validates the `plugin.json` file against a schema to ensure that it is well-formed and contains all the necessary information.
-   **Fast Startup Times:** `zsc` is designed to be fast. It can lazy-load and asynchronously load plugins, which can significantly improve the startup time of your shell.

By taking a more structured approach to plugin management, `zsc` is able to provide a more robust, performant, and user-friendly experience for both users and developers.
