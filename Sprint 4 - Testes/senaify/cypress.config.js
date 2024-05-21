const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    viewportWidth: 414,
    viewportHeight: 896,
    // QUando estiver no mesmo cenário, no mesmo describe. todos os passos são interligados, não são isolados entre si
    testIsolation: false,
    reactNativeHotReload: true
  },
});
