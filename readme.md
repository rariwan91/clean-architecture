`package.json` dependencies

```json
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.0.1",
    "@angular/cli": "^16.0.1",
    "@types/readline-sync": "^1.4.4",
    "copyfiles": "^2.4.1",
    "rimraf": "^5.0.0",
    "typescript": "^5.0.4"
  },
  "dependencies": {
    "@angular/core": "^16.0.1",
    "@angular/forms": "^16.0.1",
    "@angular/platform-browser": "^16.0.1",
    "@angular/platform-browser-dynamic": "^16.0.1",
    "@angular/router": "^16.0.1",
    "readline-sync": "^1.4.10"
  }
```

`rimraf` - used to clear out dist folder between builds.

`copyfiles` - used to copy non ts / js files over to dist after a build.

`readline-sync` and `@types/readline-sync` - same as built-in readline but synchronous rather than asynchronous. Used to pause the console app while waiting on user input.

`@angular/core`, `@angular/forms`, `@angular/platform-browser`, `@angular/platform-browser-dynamic`, `@angular/router`, `@angular-devkit/build-angular`, `@angular/cli` - Seems like the bare minimum needed to get an angular app working and deploying and loading.