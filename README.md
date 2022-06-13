# React Vite Typescript

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/trinhthinh388/react-vite-boilerplate/blob/main/LICENSE)

Opinionated Vite starter template.

## Feature

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- [SCSS module](https://sass-lang.com) with a [basic reset for form styles](https://gist.github.com/hcatlin/1027867).
- Use [ESLint](https://eslint.org), [stylelint](https://stylelint.io) and [Prettier](https://prettier.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

## Getting started

Use this repository as a [GitHub template](https://github.com/trinhthinh388/react-vite-boilerplate) or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit trinhthinh388/react-vite-boilerplate#master my-app
```

Then, install the dependencies:

```
yarn install
```

## Scripts

- `yarn dev` - start a development server with hot reload.
- `yarn build` - build for production. The generated files will be on the `dist` folder.
- `yarn preview` - locally preview the production build.
- `yarn test` - run unit and integration test in CI mode.
- `yarn lint` - runs Typescript, ESlint and Stylelint.
