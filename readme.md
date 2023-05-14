`package.json` dependencies

```json
"devDependencies": {
    "@types/express": "^4.17.17",
    "@types/readline-sync": "^1.4.4",
    "copyfiles": "^2.4.1",
    "rimraf": "^5.0.0",
    "typescript": "^5.0.4"
  },
  "dependencies": {
    "express": "^4.18.2",
    "pug": "^3.0.2",
    "readline-sync": "^1.4.10"
  }
```

`rimraf` - used to clear out dist folder between builds.

`copyfiles` - used to copy non ts / js files over to dist after a build.

`express` and `@types/express` - node web server and routing solution.

`pug` - view templating engine for `express`.

`readline-sync` and `@types/readline-sync` - same as built-in readline but synchronous rather than asynchronous. Used to pause the console app while waiting on user input.