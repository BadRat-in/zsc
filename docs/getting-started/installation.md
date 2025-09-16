# Installation

## System Requirements

Currently, Zsh Supercharge is developed and tested primarily on **macOS (Apple Silicon)**. Support for other platforms is planned for the future.

## One-Liner Installation

To install Zsh Supercharge, you can use the following command:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/badrat-in/zsc/main/install.sh)"
```

This command will:

1.  Check for dependencies (`curl`).
2.  Download the latest `zsc` binary to `~/.zsc/bin`.
3.  Configure your `.zshrc` to add `zsc` to your `PATH` and initialize the shell integration.

## Manual Installation

If you prefer to install `zsc` manually, you can do so by following these steps:

1.  **Download the latest binary** from the [releases page](https://github.com/badrat-in/zsc/releases).
2.  **Create the necessary directories.**

    ```bash
    mkdir -p ~/.zsc/bin
    ```

3.  **Move the downloaded binary** to the `~/.zsc/bin` directory and make it executable.

    ```bash
    mv ~/Downloads/zsc ~/.zsc/bin/zsc
    chmod +x ~/.zsc/bin/zsc
    ```

4.  **Add the following to your `.zshrc` file.**

    ```bash
    # Zsh Supercharge
    export PATH="$HOME/.zsc/bin:$PATH"
    eval "$(zsc init -)"
    ```

5.  **Reload your shell.**

    ```bash
    source ~/.zshrc
    ```