<!-- Copy and paste to package.json after initiating npm init -y in terminal. -->

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development",
    "lint": "eslint src/*.js",
    "test": "jest",
    "debug": "node --inspect node_modules/.bin/jest --runInBand"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/plugin-transform-modules-commonjs": "^7.6.0",
    "clean-webpack-plugin": "3.0.0",
    "css-loader": "^3.2.0",
    "eslint": "^6.3.0",
    "eslint-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "style-loader": "^1.0.0",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "webpack": "4.39.3",
    "webpack-cli": "^3.3.8",
    "webpack-dev-server": "^3.8.0"
  },
  "dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.15.0"
  }
}


________________________________________________________________________

create .eslintrc file in root directory and copy contents below into file:

{
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "env": {
      "es6": true,
      "browser": true,
      "jquery": true
    },
    "rules": {
      "semi": 1,
      "indent": ["warn", 2],
      "no-console": "warn",
      "no-debugger": "warn"
  }
}

________________________________________________________________________

create .babelrc file in root directory and copy contents below into file:

{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}



gitignore

node_modules/
.DS_Store
dist/
