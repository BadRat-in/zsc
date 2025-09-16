# Advanced Loading

Zsh Supercharge provides two advanced loading options that can help you to improve the performance of your shell: lazy loading and synchronous loading.

## Lazy Loading

Lazy loading is a technique that defers the loading of a plugin until it is actually needed. This can significantly improve the startup time of your shell, especially if you have a lot of plugins.

To lazy-load a plugin, use the `--lazy` flag when you install it:

```sh
zsc install <plugin-name> --lazy
```

When you lazy-load a plugin, `zsc` will not source the plugin's entry point file until you run one of its commands for the first time.

## Synchronous Loading

By default, plugins are loaded asynchronously to keep your prompt responsive. However, some plugins may need to be available immediately. For these plugins, you can use the `--sync` flag to load them synchronously:

```sh
zsc install <plugin-name> --sync
```

When you load a plugin synchronously, `zsc` will block the shell until the plugin has been fully loaded.
