# Nuxt Default Quickstart
> Starter template for a Nuxt project using the default setup

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/nuxt-default-quickstart?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/nuxt-default-quickstart/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with Node.js](https://img.shields.io/badge/Node.js->%3D12-blue?logo=node.js&logoColor=white)](https://nodejs.org)
[![Made with Yarn](https://img.shields.io/badge/Yarn->%3D1-blue?logo=yarn&logoColor=white)](https://yarnpkg.com/)

[![Package - vue](https://img.shields.io/badge/dependency-vue-blue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue)
[![Package - nuxt](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/nuxt-default-quickstart/nuxt)](https://www.npmjs.com/package/nuxt)


## Preview

<div align="center">
    <img src="/sample.png" alt="Sample screenshot" title="Sample screenshot" width="400" />
</div>

<br>

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/MichaelCurrin/nuxt-default-quickstart/generate)

</div>


## About

This Nuxt project uses Yarn, JavaScript (no TS), Vue and Vue templates. 

What is Nuxt?

> The Intuitive Vue Framework
> 
> Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful.

See the [Nuxt homepage](https://nuxtjs.org/) for more info.

This project uses server-side rendering with Node, but also comes with the option to generate a static site. Follow [Documentation](#documentation) instructions below to setup and run the app locally.

Content is in the [pages](/pages/) directory as `.vue` files. The [Examples](https://nuxtjs.org/examples) section of the Nuxt docs covers a Hello World example which has multiple pages and can be run in the online sandbox.

Related project:

- [![MichaelCurrin - nuxt-static-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=nuxt-static-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/nuxt-static-quickstart)

See [Nuxt](https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/nuxt/) under Dev Resources.


## Create a fresh project

See the [Getting Started / Installation](https://nuxtjs.org/docs/2.x/get-started/installation) Nuxt docs for more info.

This project was generated with this command:

```sh
$ yarn create nuxt-app nuxt-default-quickstart
```

All the default options were used, as follows:

```
✨  Generating Nuxt.js project in nuxt-default-quickstart
? Project name: nuxt-default-quickstart
? Programming language: JavaScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? What is your GitHub username? michaelcurrin
? Version control system: Git
```

Username became lowercase even though entered as `MichaelCurrin`. The app suggested `Michael Currin`, perhaps from git name rather. I don't know how this gets used.


## Documentation

### Installation

Install dependencies

```sh
$ yarn install
```

### Usage

Serve with hot-reload at `localhost:3000`.

```sh
$ yarn dev
```

### Deploy

#### Server-side rendering

Build for production and then launch the Node server.

```sh
$ yarn build
$ yarn start
```

#### Static

Generate static build output in `dist` directory. This can be deployed as a GitHub Pages site. 

```sh
$ yarn generate
```

Recommended:

- Add a `deploy` command to `package.json` as per docs.
- Or use GitHub Actions to build the site and commit the site to `gh-pages` branch.

See info on [GitHub Pages deployment](https://nuxtjs.org/docs/2.x/deployment/github-pages/) in the Nuxt docs.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
