## Overview
This project was inspired by these 2 projects: [Meteo-nix](https://github.com/DariusLukasukas/nextjs-weather-app) and [Maclinz's app](https://github.com/Maclinz/weather-app). 

## Features

- The weather app allows for robust searching of international cities
- Correctly offers the high and low temps for a given area (if available) 
- Forecasts: hourly  and daily ( up to 7 days) 
- Offers infomation in both imperial (US) and metric (Intl) values.



## Getting Started

This app uses [Open-Meteo's ](https://open-meteo.com) API services for:
- [Geocoding](https://open-meteo.com/en/docs/geocoding-api) for international geocoding.
- [Weather/AirQuality Forecast API](https://open-meteo.com/en/docs) for the weather information.

They offer liberal free tiers for using their APIS,



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Setup
#### This is a [Next.js 15](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) using the following configuration:
- [React](https://react.dev/) was downgraded from [19-RC](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) to [18.3.1](https://react.dev/versions) to mitigate issue with npm and peer dependecies errors when deploying.
- [Typescript](https://www.typescriptlang.org/)
- [Tailwinds](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

And it has the following add-ons:
- [shadcn](https://ui.shadcn.com/docs) is the "component libary"
- [next-themes](https://github.com/pacocoursey/next-themes) for the darl/light mode. 
- [lucide react](https://lucide.dev/guide/packages/lucide-react) for icons.






## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

