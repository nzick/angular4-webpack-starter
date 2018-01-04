# Angular Webpack Starter ![coverage-shield-badge-1](https://img.shields.io/badge/coverage-100%25-brightgreen.svg) [![Build Status](https://travis-ci.org/nzick/angular4-webpack-starter.svg?branch=master)](https://travis-ci.org/nzick/angular4-webpack-starter)

This `angular` starter kit contains everything you need to start building a robust app.

### Install

#### Prerequisites

- node >= 6, `node -v`
- npm >= 3, `npm -v`
- yarn installed `npm install -g yarn`

#### Clone and Start coding _it_

```sh
$ git clone https://github.com/nzick/angular4-webpack-starter.git angular4-webpack-starter
$ cd angular4-webpack-starter
$ rm -rf .git
$ yarn install
$ npm start
```
Your app will be available at localhost:8000 and will update every change you made.

#### Build and Ship _it_

```sh
# Build for Development will be found in ./dist
$ npm run build:dev
# Build for Production will be found in ./dist
$ npm run build:prod
```

#### Test _it_

```sh
# Run Unit Tests. Will also add shield-badge to your README.md with line coverage percentage
$ npm run test
# Run E2E Tests
$ npm run e2e
```

You can change the badge coverage type in `./config/karma.conf.js`.
Visit [istanbul-reporter-shield-badge](https://www.npmjs.com/package/istanbul-reporter-shield-badge) for more information.

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

#### _it_ loads it lazy

In `src/app/components` you'll find a example on how to use lazy loading in angular. 

Just add a new route to the `app.routing.module` like this:

```ts
/* app.routing.module.ts */
const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full',
 // ... other paths ...
 { path: 'component-path', loadChildren: './+component/component.module#ComponentModule' }
];
```

Than add a new angular component like this:

```ts
/* demo.component.ts */
@Component({
  selector: 'demo',
  templateUrl: 'demo.component.html'
})

export class DemoComponent { }
```

Don't forget to add a module like this:

```ts
/* demo.module.ts */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Import your component route
import { DemoComponent, routes } from './';

@NgModule({
  declarations: [ DemoComponent ],
  imports: [
    // add it to your module import
    RouterModule.forChild(routes)
  ]
})

export class DemoModule { }
```

_That's it!_

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

### Contributing 

You're very welcome to contribute. Just raise an issue and make a PR.

### License 

Licensed under the MIT license.
