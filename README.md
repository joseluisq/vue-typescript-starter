# vue-typescript-starter

> [Vue 2](https://github.com/vuejs/vue) & [Typescript](https://github.com/Microsoft/TypeScript) frontend starter.

_**Note:** This frontend source works with [Koa-GraphQL-RethinkDB](https://github.com/joseluisq/koa-graphql-rethinkdb) (GraphQL Server API).
If you want not to work with GraphQL feel free to customize it._

## Features

- [x] [Webpack 3](https://webpack.js.org/).
- [x] [Vue 2](https://github.com/vuejs/vue) `2.4.x` with [Hot reload API](https://github.com/vuejs/vue-hot-reload-api).
- [x] [Typescript](https://github.com/Microsoft/TypeScript) `2.4.x` with [vue-class-component](https://github.com/vuejs/vue-class-component).
- [x] [Webpack Code Spliting](https://webpack.js.org/guides/code-splitting/).
- [x] [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard) for development.
- [x] [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer) for production.
- [x] [PostCSS](https://github.com/postcss/postcss-loader) with [Autoprefixer](https://github.com/postcss/autoprefixer).
- [x] [Apollo GraphQL Client](https://github.com/apollographql/apollo-client) (optional).

[Node 6](https://nodejs.org/en/) or later is required.

## Install

Clone the repository and install dependencies:

```sh
git clone \
  --depth 1 \
  --single-branch \
  https://github.com/joseluisq/vue-typescript-starter.git ./my-vue-app
```

```sh
cd ./my-vue-app

yarn
```

## Development

```sh
yarn start
```

## Production

```sh
yarn build
```

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/vue-typescript-starter/pulls) or [issue](https://github.com/joseluisq/vue-typescript-starter/issues).

## License
MIT license

© 2017 [José Luis Quintana](http://git.io/joseluisq)
