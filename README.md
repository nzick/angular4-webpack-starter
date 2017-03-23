# Angular 4 Webpack Starter ![coverage-shield-badge-1](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

### Install

#### Prerequisites

- Node >= 6, `node -v`
- npm >= 3, `npm -v`
- Yarn installed `npm install -g yarn`
- Gulp installed `npm install -g gulp`

#### Clone and Start coding _it_

```sh
$ git clone https://github.com/nzick/angular4-webpack-starter.git angular4-webpack-starter
$ cd angular4-webpack-starter
$ rm -rf .git
$ yarn install
# App will be available at localhost:8000 and will update every change you made
$ npm start
```

#### Build and Ship _it_

```sh
# Build for Development
$ npm run build:dev
# Build for Production
$ npm run build:prod
```

#### Test _it_

```sh
# Run Unit Tests
$ npm run test
# Run E2E Tests
$ npm run e2e
```

#### Document _it_

```sh
# Runs Typedoc. Result will be found at ./docs
$ gulp docs
```

#### Log _it_

```sh
# Will update ./CHANGELOG.md in root folder
$ gulp changelog
```

#### _it_ Supports every Browser

Thanks to `autoprefixer` we can really focus on the important stuff.
Webpack will add all required css tags.

| Browser | Version |
| :--- | :--- |
| Chrome | >= 48 |
| Firefox | >= 44 |
| Safari | >= 6 |
| Explorer | >= 11 |
| Edge | >= 13 |
| Opera | >= 35 |
| Android | >= 4|
| iOS | >= 8 |


