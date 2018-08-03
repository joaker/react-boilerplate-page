# react-boilerplate-page

A template for creating containers that integrate into [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## Why?

Maybe someone you know build a project based on React boilerplate (AKA 'host repo'). Maybe you want to build a page for it. Maybe you just want to focus on building a container page that the host repo can consume.

Well, here's a template project for doing just that. Clone this. Draft the page of your dreams. Publish it. Draft a tiny PR to the host repo that adds your package as a dependency and adds it to a route as a dependency. Bang. Done.

Check out [Advanced Configuration](#advanced-configuration) for details on sharing the host repo's code with the page module.

gl;hf

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

## Advanced Configuration

This module is meant to reference the `resolve.modules` of the parent project. Patterns listed in the `.parentModule.js` file are except from normal package resolutions, since they're resolved dynamically by the parent application.

For example, if `.parentModule.js` file exports `['components/', 'containers/']`, you may perform `import Foo from 'components/foo'` and `import Bar from 'containers/bar'`, and they will be resolved by the parent module.

If you want to reference a local version of components or containers, you'll have to use relative paths.

## localhost development

Use `$ npm link` in your page project (let's call it 'my-page-project') and `$ npm link my-page-project` in your boilerplate project to link my-page-project as a dependency.

Use `npm run watch` in your page project to enable hot reloading in your boilerplate project. Otherwise you'll have to explicitly build when you want the updates to show up on the page.

In your react-boilerplate application, set [resolve.symlinks](https://webpack.js.org/configuration/resolve/#resolve-symlinks) to false. This is only necessary while you're developing - when your page module is property installed you won't need to use the symlinks flag.
