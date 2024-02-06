const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 40000,
  defaultCommandTimeout: 40000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
