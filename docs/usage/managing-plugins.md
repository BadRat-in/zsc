# Managing Plugins

Zsh Supercharge makes it easy to manage your Zsh plugins directly from the command line using the `zsc` tool.

## Installing Plugins

### From the `zsc` Store

To install a plugin from the official `zsc` store, use the `zsc install` command:

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

## Updating Plugins

To update all of your installed plugins to their latest versions:

```sh
zsc update
```

## Removing Plugins

To uninstall a plugin:

```sh
zsc remove <plugin-name>
```

## Listing Installed Plugins

To see a list of all your installed plugins:

```sh
zsc list
```