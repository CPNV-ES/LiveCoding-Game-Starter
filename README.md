# LiveCoding-Game-Starter

> This repo provides a starter strucutre to build livecoding game.

## How to use it

Download this repo on your dev environnment, and updates the default configuration to match your game requirements.

This example repo contains all the LiveCoding game possibilities, to get more details for game development, visit the [LiveCoding documentation](https://github.com/CPNV-ES/LiveCoding/tree/master/docs).

## Developpment

### Bundler
This repo contains a preconfigured bundler to develop your game in separate js files using esm modules.

You can use following commands to build the game :

```sh
# First install the dependencies
npm i

# Build the game (for production)
npm run build

# Build for developpment (will watch file changes and re-build)
npm run dev
```

### Server for development

To develop your games productively, we recommend using a mini http server to serve the game files locally. Then simply use the `URL` driver in LiveCoding to load the game.

The node.js [http-server](https://github.com/indexzero/http-server) package is perfect because it allows you to easily define cross-origin rules.

```sh
# Install http-server globally
npm i -g http-server

# Launch the server in your game folder (with cross-origin rules on port 3333)
http-server -p 3333 --cors -c-1
```