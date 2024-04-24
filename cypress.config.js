const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "4dp6sp",
    baseUrl: "https://petstore.swagger.io/v2/user",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

 