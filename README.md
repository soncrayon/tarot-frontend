This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ORI Tarot

ORI Tarot is an application where users can create 3-card spread tarot readings.  Users can save their readings for later viewing and even see overall trends in all their readings to date.  Lastly, the application makes available a general list of cards in the tarot deck along with more detailed descriptions of each.  

## Using ORI Tarot

This is a two-part application.  To use ORI Tarot, pull down a copy of this tarot-frontend portion along with the tarot-backend portion.  Run "rails s" to start the backend Rails API server in tarot-backend and then run "npm start" in the tarot-frontend portion.  

Users can then login or create an account from the landing page.  Once logged in, users can create readings right away by flipping the cards on the home page and saving readings.  

User Readings provides a repository of all saved readings.  Click a reading to view all the cards from that reading or have the option to delete it.  

Card Descriptions provides a list of all tarot cards n the deck categorized by major and minor arcana.  

Click your name in the upper right to access options to view your trends (and aggregate data for all users) or to edit your account information.  You can also delete your account from the user menu.  

## Dependencies/Attributions

ORI Tarot makes use of the CardFlip and FontAwesome libraries for React.  Card images and information are courtesy of the Hawl Tarot API.  Certain background and card art is courtesy of Google Images.  

## See below for additional README information made available via Create React App:  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
