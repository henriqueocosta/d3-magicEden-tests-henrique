const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    baseUrl: "https://magiceden.io/collections/polygon/0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
