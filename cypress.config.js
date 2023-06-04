const { defineConfig } = require("cypress");

module.exports = defineConfig({
 // projectId: "zgyyaq",

  env: {
    url: "https://www.tvolearn.com/"
  },

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});
