# cypress using xpath and cucumber

cypress using xpath and cucumber

## getting-started

- install go to your work directoty & run "npm init"
- "npm install cypress --save-dev"
- test the instlation run "npx cypress open"

## add cypress-xpath support

- https://github.com/cypress-io/cypress-xpath
- run npm install -D cypress
- add require('cypress-xpath') to cypress/support/index.js

## add cucumber support

- https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
- npm install --save-dev cypress-cucumber-preprocessor
- Add cucumber support to your plugins: cypress/plugins/index.js
  const cucumber = require('cypress-cucumber-preprocessor').default
  module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  }

- add in to package.json

  "cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
  }

## implemntation

- test goal to login in the ExecuteAutomation page & to check if the h2 element exist

- create logintest folder ./cypress/integration/logintest
- create logintest folder ./cypress/integration/logintest/logintest
- add logintest.feature file to ./cypress/integration/logintest
- add loginpage.js file to ./cypress/integration/logintest/logintest
- add logintest.js file to ./cypress/integration/logintest/logintest
