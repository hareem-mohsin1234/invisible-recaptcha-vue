# invisible-captcha

This application contains form with integrated Google Invisible reCaptcha

## Prerequisites

- NodeJs 16.x

## Project Setup


- Run `npm install & cd server & npm install` in root directory.
- Copy `./server/.env.example` file to `./server/.env` and setup environment variables.
- Update Server path in `./src/utils/constants.js`.
- Execute `npm run start` in root directory for client.
- Execute `npm run start` in `./server` directory for server.

### Compile client and Hot-Reload for Development

```sh
npm run dev
```

### Compile client and Minify for Production

```sh
npm run build
```