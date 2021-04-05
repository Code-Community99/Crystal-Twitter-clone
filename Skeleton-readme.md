# Crystal Twitter Clone
# Indepth explanation on the skeleton of this project

## Main folder - src
  This main folder contains more folders and main files as follows
###   Folders
*    - app
        This folder contains the store.js file.
        This is a file responsible for reducers that manage our storage and local data

*    - assets
        This folder contains other asset folder like images, svgs, icons, fonts

*    - features
        This folder contains other folders named according to pages, each folder contains a specific files for specific slices(state management class) for specific pages and components. Look at the profile folder for example
*    - firebase
        This folder contains the firebase config file that links to the firebase firestore and firebase storage.

*    - global
        This folder contains three folders: components, constants and styles.
        The components folder contains folders named according to pages. This page folders should contain componets used in in each page.
        The constants page app constants such as routes
        The styles folder contains css files for global components, the components that appear globally like the sidebar

*    - pages
        This folder contains all our pages folders, make a file in the folder for the page ie home folder contains Home.js. Home.js is our page(Capitalize page names)
*    - styles
        This folder contains the folder pages. to add a css file to a specific folder consider naming it with a capital letter ie Home.css

###   Files
    - App.css -> This is the app component's css file
    - App.js -> App component being rendered and it contains all the routes. The routes are specified in 'global/constants/Constants.js'. Visit the file if you want to add a path into this file so as to know the path to use together with your component.
    - index.css -> The main entry file of our app, 
    - index.js -> The main entry file of our app, contains the dom render, wraps the app with the redux store and   service workers. It initializes an important feature 'store provider' that gives us access to the global state of the app ie display mode and auth state.
    - reportWebVitals.js
    - service-worker.js
    - serviceWorkerRegistration.js


#### N/B:- Components and pages naming should be capitalized otherwise react will throw an error over the same

#### N/B:- If you realize that you have made a page and its returning 404 remember to add the route and the component into App.js

#       RESOURCES / ENVIRONMENT
*        Vscode
-        > Plugins
                - Auto Import - ES6, TS, JSX, TSX (important)
                - React-Native/React/Redux snippets for es6/es7 (important)
                - ES7 React/Redux/GraphQL/React-Native snippets (important)
                - Bracket pair colorizer
                - ESLint
                - Material Icon Theme
                - Dark+ Material

#### N/B:- Use <a href="https://uiwjs.github.io/#/components">https://uiwjs.github.io/#/components</> To learn about uiwjs a library used in most cases within the app next to Material UI core

#### N/B:- I have done the sidebar and the fixed messaging component to speed up the development process.