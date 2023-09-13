const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      AUTH_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1ODU2NDgsImlkIjoiNjRlYzY3Nzc2NmFlMGZhMDBkZDY4NjkzIiwicm9sZSI6InN1cGVyYWRtaW4ifQ.0LP01HZNRCQqQYOH-a1UQUB3j-vI-66gyGKSD-ZvM3A"
    },
    e2e: {
      setupNodeEvents(on, config) {},
    },
  },
});