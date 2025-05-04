import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
    specPattern: 'src/tests/e2e/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/e2e/e2e.js'
  },
})