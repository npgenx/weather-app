# Another Weather App

## Overview
This project was inspired by these 2 projects: [Meteo-nix](https://github.com/DariusLukasukas/nextjs-weather-app) and [Maclinz's app](https://github.com/Maclinz/weather-app). The goal was to address some of the issues found in those projects.

## Features
- The app allows for robust searching of international locations.
- Correctly offers the high and low temps for a given area (if available) 
- Forecasts: hourly for a given day and daily for 7 days
- The map has overlays for temperature, precipitation, wind and clouds (Please zoom out to see the layers).

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

First, run the development server:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
npm run dev
# or
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

