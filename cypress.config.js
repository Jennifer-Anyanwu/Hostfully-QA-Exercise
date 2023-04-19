const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://computer-database.gatling.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});