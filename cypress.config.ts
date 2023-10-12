import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 50000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
