# What is Zsh Supercharge?

Zsh Supercharge (`zsc`) is a modern plugin manager for the Zsh shell. It is designed to be fast, flexible, and easy to use, while also providing powerful features for both users and developers.

## Key Features

-   **Dependency Management:** `zsc` can automatically install and manage dependencies for your plugins, including other `zsc` plugins and Homebrew packages.
-   **Schema-Driven:** Plugins are defined by a `plugin.json` file, which is validated against a schema. This ensures that all plugins are consistent and well-formed.
-   **Lazy Loading:** `zsc` can lazy-load plugins, which means that it only loads the plugins that are actually needed for the current shell session. This can significantly improve the startup time of your shell.
-   **Asynchronous Loading:** By default, plugins are loaded asynchronously to keep your prompt responsive.
-   **Easy to Use:** `zsc` provides a simple and intuitive command-line interface for managing your plugins.

## Why Another Plugin Manager?

While there are many other Zsh plugin managers available, `zsc` is designed to address some of the common pain points of these other systems. For more information, see the [Why Zsh Supercharge?](../about/why-zsc.md) guide.
