# react-boilerplate-page
A template for creating containers that integrate into [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## Setup

 - Clone this repo
```
$ git clone https://github.com/joaker/react-boilerplate-page
$ yarn
$ npm run watch
```

- Clone react-boilerplate
```
$ git clone https://github.com/react-boilerplate/react-boilerplate
$ npm run setup
$ npm start
```

- Create a loadable for the page
```js
  // containers/RBPage/Loadable.js
  /**
  * Asynchronously loads the component for FeaturePage
  */
  import Loadable from 'react-loadable';

  import LoadingIndicator from 'components/LoadingIndicator';

  export default Loadable({
  loader: () => import('react-boilerplate-page'),
  loading: LoadingIndicator,
  });
```

- Add a route to the App
```js
  /* ...import containers/RBPage/Loadable... */
  <Route path="/example" component={RBPage} />
```

- Go to http://localhost:3000/example#joaker to view your react-boilerplate router
