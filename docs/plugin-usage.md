# Plugin Usage

Zsh Supercharge makes it easy to manage your Zsh plugins directly from the command line using the `zsc` tool.

## Installing Plugins

### From the `zsc-plugins` Store

To install a plugin from this official store, use the `zsc install` command:

```sh
# Example: Install the zsh-autosuggestions plugin
zsc install zsh-autosuggestions
```

### From Oh My Zsh

You can also install plugins directly from the Oh My Zsh repository using the `@omz` prefix:

```sh
# Example: Install the git plugin from Oh My Zsh
zsc install @omz/git
```

## Advanced Installation Options

### Lazy Loading

To speed up your shell's startup time, you can choose to lazy-load a plugin. This means the plugin will only be loaded the first time you run one of its commands.

```sh
zsc install <plugin-name> --lazy
```

### Synchronous Loading

By default, plugins are loaded asynchronously to keep your prompt responsive. If a plugin needs to be available immediately, you can load it synchronously with the `--sync` flag:

```sh
zsc install <plugin-name> --sync
```

## Managing Plugins

### Updating Plugins

To update all of your installed plugins to their latest versions:

```sh
zsc update
```

### Removing Plugins

To uninstall a plugin:

```sh
zsc remove <plugin-name>
```

### Listing Installed Plugins

To see a list of all installed plugins and their configurations, you can inspect the cache file:

```sh
cat ~/.zsc/cache.json
```