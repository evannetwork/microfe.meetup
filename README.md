# Vue Meetup Dresden - 29.01.2020

Small project for testing small dapp microfrontends on the evan.network. The corresponding presentation can be found here:

- [microfrontend in general]()
- [dapps on evan.network]()

## How to use
Have a look at the `./dapps/microfe.meetup` and the included files. Replace the content of the original `dbcp.json` and `src/index.ts` files with the prepared test files (`dbcp${X}` / `src/index${X}`).

To run the project, have a look at the `Install` / `UI Development` section.

## Install
- you very likely will need `nvm` installed

```bash
yarn install
```

## UI Development
- build and serve the local dapp serve
- starts an local server at [http://localhost:3000/dev.html](http://localhost:3000/dev.html)
```bash
yarn run serve
```

- build all dapps
```bash
yarn dapps-build
```

- serve for file change tracking
```bash
yarn dapps-serve
```

## Deployment
Have a look at the [deployment description](https://evannetwork.github.io/dev/deployment).
