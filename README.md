# Another Weather App


## Overview
This project was inspired by these 2 projects: [Meteo-nix](https://github.com/DariusLukasukas/nextjs-weather-app) and [Maclinz's app](https://github.com/Maclinz/weather-app). The goal was to address some of the [issues](./Tech_Summary.md) found in those projects and other weather apps.

## Features
- On Start, the app will load weather info of the current location. (if given access to the location API of a geolocation complaint browser)
- The app pulls weather info from a free API created by [Open Meteo](https://open-meteo.com/en/docs).   (Originally NextJS was going to be used to hide API tokens in server actions. However, now that a free API is being used,  Next.JS is just being used as a static site generator)
- The app allows for robust searching of international locations.
- Correctly offers the high and low temps for a given area (if available) 
- Forecasts: hourly for a given day & daily for 7 days
- The map has overlays for temperature, precipitation, wind and clouds (Please zoom out to see the layers).

additional info can be found in the [summary](./Tech_Summary.md)

<img width="1000" alt="Screenshot of App" src="./public/app-screenshot.jpg">

## Specs
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It was configured with the following:

- [Tailwindcss](https://tailwindcss.com/docs/installation)
- [ESLint](https://eslint.org/)
- [Typescript](https://www.typescriptlang.org/)
- [App Router](https://nextjs.org/docs/app)
- [shadcn UI](https://ui.shadcn.com/docs) with  [next-themes](https://ui.shadcn.com/docs/dark-mode/next) for dark mode 
- Configured for [VSCode debugging](https://nextjs.org/docs/app/building-your-application/configuring/debugging)

Note: *Due to using [React 19RC](https://ui.shadcn.com/docs/react-19) you may have issues deploying using npm (at the time of this writing). If you're using npm, you can install shadcn/ui dependencies with a flag. The shadcn CLI will prompt you to select a flag when you run it. No flags required for pnpm, bun, or yarn.*

## Getting Started
There is an assumption that you have node and some package manager already installed on you machine. If not, google how to run a nextJS app on my machine.


First, install the app if you have not run it before:
```bash
yarn install
# or
pnpm install
# or
bun install
# or
npm install
# or
```

Once the installation is complated, execute one of the commands below to start the development server:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
# or
npm run dev
# or
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.


