# Frontend | Accounting Notebook

## Before running the proyect:

You should have installed `Node` (version v12.18 or later) and `Yarn` (version v1.15.0 or later).

---

## Setup:

1. Run `yarn` install all dependencies.
2. Run `yarn start` to run the proyect on production mode.

---

## Running the Proyect:

You can run diferent configs for each env localy like this:

### Production:

Like before just run `yarn start` and the proyect will run with production configuration.

_You may need to set the env variables for that_

### Staging:

Run `yarn staging` with the staging config applied.

### Dev:

Run `yarn dev` and the app wil run on localhost.

---

## Build:

You can run build for diferent envs like this:

### _Development_ ( pre deploy )

Run `yarn build:dev`

### _Stagin_ ( pre deploy )

Run `yarn build:staging`

### _Production_ ( pre deploy )

Run `yarn build:production`

---

## Try the build:

If you run `yarn try:dev`, `yarn try:staging` or `yarn try:production`:
The proyect will build and serve it self as a test like a server.

---

## Tests:

Run `yarn test` to check the test are passing correctly.

_(Comming soon, Will add coverage and health status)_

---

## Linter:

If you run `yarn lint` the proyect will show all the issues that are related to the code structure for you to fix them.

If you run `yarn lint:fix` the proyect will detect all the auto fixeable issues and run over them.
Not all the issues will be addresable, those should be fixed manualy.

---
