# Warpster Extension Installation Guide
Welcome to the installation guide for Warpster, a Chrome extension designed to enhance your Farcaster experience. Follow these instructions to get started with Warpster.
# Prerequisites
Before proceeding with the installation, ensure you have the following prerequisites installed on your system:
```
Node.js (18.x): The runtime environment for executing JavaScript code outside a web browser.
NPM (9.x): The Node Package Manager used for managing JavaScript packages. NPM is included with Node.js, so installing Node.js will also install NPM.
```
# Installation Steps
1. Clone the Repository
Open a terminal or command prompt.
Execute the following command to clone the Warpster repository:
```
git clone https://github.com/pgagrwl/warpster-ext.git
```
2. Install Dependencies
Navigate into the cloned repository directory:
```
cd warpster-ext
```
Run the following command to install the necessary modules:
```
npm install --force
```
Using --force ensures that NPM resolves any potential conflicts between package versions without manual intervention.
3. Build the Extension
In the repository directory, execute the following command to build the Warpster extension:
```
npm run build
```
This command compiles the extension and generates a build folder within the repository directory.
4. Loading the Extension in Chrome
Open Google Chrome.
Navigate to chrome://extensions/ in your browser.
Enable Developer Mode by toggling the switch in the top-right corner.
Click on Load unpacked and navigate to the build folder created in the previous step.
Select the build folder and click Open.
The Warpster extension should now be successfully loaded into Chrome and ready for use. You can access it from the Chrome toolbar and begin enhancing your Farcaster experience.
# Using Warpster
With Warpster installed, you're all set to explore its features and integrate it into your Farcaster social networking activities. If you encounter any issues during the installation process or while using the extension, feel free to raise an issue on the Warpster GitHub repository.
Enjoy your enhanced Farcaster experience with Warpster!