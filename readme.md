# How to Run App(s)

1. Pull down repo
2. `npm install` on it
3. `npm run start-angular-app` to build and run the angular app (needs web api running).
4. `npm run start-web-api` to build and run the web api the angular app connects to (used by angular app).
5. `npm run start-console` to build and run the console app (can run by itself).

# `package.json` Dependencies

```json
  "dependencies": {
    "@angular-devkit/build-angular": "^16.0.1",
    "@angular/cli": "^16.0.1",
    "@angular/core": "^16.0.1",
    "@angular/forms": "^16.0.1",
    "@angular/platform-browser-dynamic": "^16.0.1",
    "@angular/platform-browser": "^16.0.1",
    "@angular/router": "^16.0.1",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/morgan": "^1.9.4",
    "@types/readline-sync": "^1.4.4",
    "bootstrap-icons": "^1.10.5",
    "bootstrap": "^5.2.3",
    "copyfiles": "^2.4.1",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "morgan": "^1.10.0",
    "readline-sync": "^1.4.10",
    "rimraf": "^5.0.0",
    "typescript": "^5.0.4"
  }
```

`@angular-devkit/build-angular`, `@angular/cli`, `@angular/core`, `@angular/forms`, `@angular/platform-browser`, `@angular/platform-browser-dynamic`, and `@angular/router` - Seems like the bare minimum needed to get an angular app working and deploying and loading.

`@types/cors`, `@types/express`, `@types/morgan`, `@types/readline-sync` - Used by typescript to know what those npm packages contain.

`bootstrap-icons` - The edit, up, down, delete icons.

`bootstrap` - styling.

`copyfiles` - used to copy non ts / js files over to dist after a build.

`cors` - used to allow angular app to talk to web api express app locally.

`express` - web api app is an express app.

`morgan` - easy express request logging.

`readline-sync` and `@types/readline-sync` - same as built-in readline but synchronous rather than asynchronous. Used to pause the console app while waiting on user input.

`rimraf` - used to clear out dist folder between builds.

`typescript` - because I like typescript.