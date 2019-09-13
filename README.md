# Slawomir Gawron Shopping Cart

The following website was created using 
 - React
 - Redux 
 - React Hooks
 - HTML
 - CSS/SCSS
 - Canadian Sales Tax API
 
 The primary purpose of this website is to allow potential employers to have access to my Shopping Cart project. 
 This project is intended to demonstrate my skills in some of the newer/more complex parts of React/front end development. 
 My application uses redux to store common states that are used in multiple parts of the application. Rather than hard coding
 ever changing sales tax information; it subscribes to the Canadian Sales Tax API for correct and up to date sales tax information 
 in Canada. Lastly, my application uses hooks which is the new way of writing React components.
 
 The majority of my React knowledge comes from diligent self study, while working regular hours at my current employment.
 I wish I had unlimited time to fine tune my projects, however I think my focus would be better served on creating additional cool 
 and complex projects.  
 
 At the end of the day, I'm still a junior developer; hence my work may have some flaws. However, I'm a quick learner and I like producing quality work 
 (if something needs changing/improvement, I'll gladly do it).
 
 ## Notes: 
 
 store = {
 
     total: integer
     storeDiscount: negative integer
     province: string
     taxInformation: {result: JSON}
     promoCode: {code: string}
     
 }
   
 result: {
 
         on: {
             applicable: 0.13
             gst: 0.05,
             hst: 0.13,
             pst: 0.08,
             source: "Wikipedia (https://en.wikipedia.org/wiki/Sales_taxes_in_Canada), accessed May 31 2019.",
             start: "2008-01-01 00:00:00",
             type: "hst",
             updated_at: "2019-05-31 14:57:21"
         }
  }
   
  
 
 
# Boilerplate React App commands 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
