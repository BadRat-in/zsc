#!/bin/sh

# This script installs zsc (Zsh Supercharge) for users.
# It downloads the latest binary from GitHub releases.

set -e

# --- Configuration ---
ZSC_DIR="${HOME}/.zsc"
ZSC_BIN_DIR="${ZSC_DIR}/bin"
ZSC_BIN_PATH="${ZSC_BIN_DIR}/zsc"
ZSHRC_PATH="${HOME}/.zshrc"
REPO="badrat-in/zsc"

# --- Helper Functions ---
command_exists() {
  command -v "$@" >/dev/null 2>&1
}

# --- Main Installation Logic ---
echo "Installing Zsh Supercharge..."

# 1. Check for dependencies
if ! command_exists curl; then
  echo "Error: curl is not installed. Please install curl and try again."
  exit 1
fi

# 2. Create installation directories
echo "--> Creating installation directory at ${ZSC_DIR}..."
mkdir -p "${ZSC_BIN_DIR}"

# 3. Download the binary
# Note: This assumes a generic binary named 'zsc'. A more advanced script
# would detect OS and architecture to download the correct binary.
DOWNLOAD_URL="https://raw.githubusercontent.com/${REPO}/main/bin/zsc"
echo "--> Downloading zsc binary from ${DOWNLOAD_URL}..."
if curl -L -o "${ZSC_BIN_PATH}" "${DOWNLOAD_URL}"; then
  echo "--> Download successful."
else
  echo "Error: Failed to download the zsc binary. Please check the URL or your network connection."
  exit 1
fi


# 4. Make the binary executable
echo "--> Making zsc binary executable..."
chmod +x "${ZSC_BIN_PATH}"

# 5. Configure .zshrc
ZSC_CONFIG_BLOCK_START="# Zsh Supercharge"
ZSC_CONFIG_LINE1="export PATH=\"
$HOME/.zsc/bin:$PATH\"
"
ZSC_CONFIG_LINE2='eval "$(zsc init -)"'

if ! grep -q "zsc init" "${ZSHRC_PATH}"; then
  echo "--> Adding Zsh Supercharge configuration to ${ZSHRC_PATH}..."
  printf "\n%s\n%s\n%s\n" "${ZSC_CONFIG_BLOCK_START}" "${ZSC_CONFIG_LINE1}" "${ZSC_CONFIG_LINE2}" >> "${ZSHRC_PATH}"
else
  echo "--> Zsh Supercharge is already configured in ${ZSHRC_PATH}."
fi

echo "\nInstallation complete!"
echo "Please restart your shell or run 'source ${ZSHRC_PATH}' to start using zsc."
