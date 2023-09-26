# D3 MagicEden Tests - Cypress - Henrique

This Automation uses Cypress 13.2.0 to run tests against the Magic Eden NFT Marketplace. 

## How to run

- Clone the repo;
- Run the command ***npm install*** in the root folder;
- Run the command ***npm test*** to run the tests headless;
- Run the command ***npm run cy:open*** to run the tests headed.

## Some important folders and files

- cypress/e2e: The folder where the tests are located;
- cypress/support/commands.js: Custom commands that are shared between the tests;
- cypress.config.js: Project setup file including baseUrl and viewport;
- package.json: Here you can find info about the project and the scripts.
- tests-run-recording.mov: Screen recording of the tests running headed. 

## Test cases

- TC001: Check if the cart is empty in the first access
- TC002 - Add item to the cart
- TC003 - Remove item from the cart
- TC004 - Open the connect to a wallet modal throught the Cart
- TC005 - Collapse filters bar
- TC006 - Filter by Category
- TC007 - Filter by Ending using the search function
- TC008 - Clear All Filters
- TC009 - Search for a valid item
- TC010 - Search for an item that does not exists

## Notes
- This website needs an update on the selectors to add unique attributes such as ***data-testid*** it is important for the tests reliability. Doing it, the automation won't break due to a class, text or order changes for example. It also needs a refactor of the Search feature to prevent if from keep searching while the user is typing, or create a pagination function, so it won't be sending API requests all the time. 
- The choosen viewport is the most used one according to the hobo-web.co