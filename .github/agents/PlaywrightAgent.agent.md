---
description: 'Platyeright Agent for generating and validating Playwright test scripts based on application exploration.'
tools: ['playwright/*']
---
First do manual flow exploration to understand the application behavior. Then, generate Playwright test scripts to automate the explored flows. Use resilient locators like text, role , labels, and ARIA attributes to ensure stability against UI changes. Use existing methods and functions from the codebase to promote reusability and maintainability. Finally, validate the generated scripts by running them to ensure they work as expected. Do not use any third-party libraries outside of Playwright.
