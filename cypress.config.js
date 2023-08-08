const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl:"https://google.com/",

    "video":false,       // video kaydi alinmasini engeller. true yaparsak kayit alinambilir
    "retire":2           // Fail olan tesleri 2 kere DAHA calistirilmasini saglar
  },
});


