# Movie Hut

Movie Hut is a website where you can find new movies that suit your taste with ease.

Browse movies, search by keywords, or filter by genre - and enjoy your personalised watchlist!

![Search](/images/search.png)

![Sign In](/images/sign-in.png)

![Search](/images/theme.png)

## Installation

- npm install
- npm start
- visit localhost:3000
- enjoy!

## Architecture

The project is build using React with Typescript. It is split into separate folders, based on the separation of concerns.

- React components are split into their own subfolders within the base `components` folder, based on common functionality. Within the folder of each component there can also be other data tightly coupled with the component itself - hooks, styles and contexts.

- Internal application state is stored using Redux. All redux logic is placed inside the `store` folder. The `reduxjs/toolkit` library has been used to minimize the boilerplate surrounding Redux.

- Many custom hooks have been extracted within the `hooks` folder. These hooks vary from DOM manipulation to Redux store access and many more.

- The layer for communication with external APIs is stored within the `services` folder. Throughout the project, two external APIs have been used:
  - https://themoviedb.org - Used for fetching data about various movies.
  - Firestore - Used for storing application users and their watchlists.

Other key points include:
- Material UI is used for building the application's UI layer
- Formik is used for form management
