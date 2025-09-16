# Zsh Supercharge

**A fast, flexible, and user-friendly plugin manager for Zsh.**

Zsh Supercharge (`zsc`) is a next-generation plugin manager for Zsh that is designed to be fast, flexible, and easy to use. It provides powerful features for both users and developers, including dependency management, schema validation, and lazy loading.

This repository serves as the official plugin store and development hub for `zsc`.

## 🖥️ Supported OS

Currently, `zsc` is developed and tested primarily on **macOS (Apple Silicon)**. Support for other platforms is on the roadmap.

## ✨ Features

-   [x] **Schema-Driven:** Plugins are defined by a `plugin.json` file, which is validated against a schema.
-   [x] **Dependency Management:** Automatically install and manage dependencies for your plugins (Brew packages, other plugins).
-   [x] **Asynchronous Loading:** Plugins are loaded asynchronously by default to keep your prompt responsive.
-   [x] **Lazy Loading:** Defer plugin loading until they are actually needed to improve shell startup time.
-   [x] **Oh My Zsh Compatibility:** Install plugins directly from the Oh My Zsh repository.
-   [x] **CLI Tools:** A simple and intuitive command-line interface for managing your plugins.
-   [x] **One-Liner Installation:** A frictionless installation script for end-users.

## 🚀 Installation

To get started with Zsh Supercharge, use the following one-liner to install the `zsc` command-line tool:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/badrat-in/zsc/main/install.sh)"
```

##  usage

### Installing Plugins

-   **From `zsc` Store:**
    ```sh
    zsc install <plugin-name>
    ```
-   **From Oh My Zsh:**
    ```sh
    zsc install @omz/<plugin-name>
    ```
-   **With Lazy Loading:**
    ```sh
    zsc install <plugin-name> --lazy
    ```
-   **With Synchronous Loading:**
    ```sh
    zsc install <plugin-name> --sync
    ```

### Managing Plugins

-   **Updating Plugins:**
    ```sh
    zsc update
    ```
-   **Removing a Plugin:**
    ```sh
    zsc remove <plugin-name>
    ```
-   **Listing Installed Plugins:**
    ```sh
    zsc list
    ```

## 📌 Roadmap

-   [x] Schema-driven plugin definition (`plugin.json`).
-   [x] Dependency resolution for Brew and other plugins.
-   [x] Asynchronous and synchronous plugin loading.
-   [x] Lazy loading for faster shell startup.
-   [x] Basic Oh My Zsh compatibility layer (`@omz`).
-   [x] CLI for managing plugins (install, update, remove, list).
-   [x] One-liner installation script.
-   [ ] Add dependency bootstrap for Linux distros (apt, dnf, pacman).
-   [ ] Expand OMZ compatibility layer.
-   [ ] Provide plugin discovery commands (`zsc search`, `zsc info`).
-   [ ] Introduce plugin categories (themes, completions, productivity, etc.).
-   [ ] Support for Windows Subsystem for Linux (WSL).
-   [ ] Support for Intel-based macOS.

## 📖 Documentation

For a complete guide to using and developing for Zsh Supercharge, please see our [comprehensive documentation](./docs/index.md).

-   [Getting Started](./docs/getting-started/what-is-zsc.md)
-   [Installation](./docs/getting-started/installation.md)
-   [Managing Plugins](./docs/usage/managing-plugins.md)
-   [Plugin Creation Guide](./docs/for-developers/plugin-creation.md)

## 🤝 Contributing

We welcome contributions to both the `zsc` engine and the plugin store. For more information, please see our [contributing guide](./docs/for-developers/contributing.md).