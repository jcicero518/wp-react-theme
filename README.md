_Note: This is currently an experiment. It has some basic webpack configuration steps for getting HMR all set up, but is not a full webpack configuration._

# Webpack setup for WordPress
This theme has a basic configuration for getting started with React in a WordPress theme. The configuration uses Webpack and React Hot Loader in order to automatically render changes to a page whenever it is updated, without a page refresh.

### To use:

````
npm install
````

````
npm run dev
````

This will run `webpack-dev-server` along with `react-hot-loader` so that changes made to the JS files will be automatically injected into the theme. In order to accomplish this, the file compiled by webpack is enqueued instead of the standard JS file in `functions.php`. Webpack is configured to use port 3000, but this can be easily changed.

The big trick is to use webpack dev server's inline mode, along with setting a `publicPath` for the output file. This allows the file to be used by WordPress, but also recieve and patch updates as they come in. Also, React-hot-loader requires that the app be wrapped in an `AppContainer`, which you can see in `src/index.js`.

#### To do:
- [ ] Add config for production and development
- [ ] Enqueue production or development JS file based on `WP_DEV_MODE` flag
- [ ] Add SASS support
- [ ] Add Eslint support
- [ ] Add testing support
