# Plugin Creation Guide

This guide provides a complete walkthrough for creating a new plugin, adding it to the Zsh Supercharge (`zsc`) plugin store, and maintaining it over time.

## Step 1: Create Your Plugin Repository

Before adding your plugin to `zsc`, it must exist in its own Git repository.

1.  **Create a new repository on GitHub.**
2.  **Clone the repository to your local machine.**
3.  **Create your plugin files.** At a minimum, you'll need an entry point file (e.g., `entry.zsh`).
4.  **Create a `plugin.json` file.** You can do this manually, or you can use the `zsc` `init` tool to generate one for you (see the next section).
5.  **Commit and push your changes.**

## Step 2: Add Your Plugin to `zsc` as a Submodule

Once your plugin is in its own repository, you can add it to the `zsc` plugin store as a submodule.

1.  **Clone the `zsc` repository.**

    ```bash
    git clone https://github.com/badrat-in/zsc.git
    cd zsc
    ```

2.  **Add your plugin as a submodule.** Use the `git submodule add` command, followed by your plugin's repository URL and the path where you want to add it (`plugins/<your-plugin-id>`).

    ```bash
    git submodule add https://github.com/your-username/your-plugin.git plugins/your-plugin-id
    ```

3.  **Generate a `plugin.json` file (if you haven't already).** The `init` tool will create a `plugin.json` file in the correct directory.

    ```bash
    yarn init
    ```

    Follow the prompts to enter your plugin's information. When it asks for the **Plugin ID**, make sure it matches the directory name you used in the `git submodule add` command.

4.  **Commit the submodule addition.**

    ```bash
    git add .gitmodules plugins/<your-plugin-id>
    git commit -m "feat: Add <your-plugin-id> plugin"
    ```

5.  **Push your changes to your fork and open a pull request.**

## Step 3: Updating Your Plugin

To update a plugin that has already been added to `zsc`, you need to update the submodule to point to the latest commit in your plugin's repository.

1.  **Navigate to your plugin's directory** within the `zsc` repository.

    ```bash
    cd plugins/<your-plugin-id>
    ```

2.  **Pull the latest changes** from your plugin's repository.

    ```bash
    git pull origin main
    ```

3.  **Return to the root of the `zsc` repository.**

    ```bash
    cd ../..
    ```

4.  **Commit the updated submodule.**

    ```bash
    git add plugins/<your-plugin-id>
    git commit -m "feat: Update <your-plugin-id> plugin"
    ```

5.  **Push your changes and open a pull request.**