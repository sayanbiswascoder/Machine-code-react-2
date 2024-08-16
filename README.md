# Random User Profile, Random Jokes Tweet, and Cats Listing
This React project consists of three main tasks implemented as separate routes within the same application. Each task pulls data from a public API, processes it, and displays it according to the provided Figma designs.

## Project Setup
### Prerequisites
* Node.js and npm should be installed on your machine.
### Installation
1. Clone the Repository:


    `git clone https://github.com/your-username/your-repo-name.git`
    `cd your-repo-name`

2. Install Dependencies:

   `npm install`

3. Run the Project:

   `npm start`
The application will start on http://localhost:3000.

## Project Structure
* Random User Profile (/random-user):

  * Displays a random user profile with styling matched to the Figma design.
  * Includes a refresh button to fetch a new random user.
  * Loading state is creatively handled.
  * Location and call hyperlinks open in a new tab.
  * API used: https://api.freeapi.app/api/v1/public/randomusers/user/random.
* Random Jokes Tweet (/random-jokes):

  * Shows a tweet with a static author (e.g., Elon Musk) but with random tweet content.
  * Timestamp, views, date, and other analytics are randomly generated.
  * New joke data is fetched and displayed on page reload.
  * Loading state is creatively handled.
  * API used: https://api.freeapi.app/api/v1/public/randomjokes/joke/random.
* Cats Listing (/cats-listing):

  * Displays a paginated, horizontally scrollable list of cat cards.
  * The pagination and limit are configured to list all cats from the API.
  * Loading state is creatively handled.
  * API used: https://api.freeapi.app/api/v1/public/cats?page=1&limit=4.
## Additional Features
* Branding Logo: The logo is positioned according to the Figma design. Clicking on the logo redirects to https://chaicode.com.
* Routing: The base URL (/) redirects to /
