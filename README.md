# Spark

###### A shockingly fast and easy way to make a static site. Yes puns!


### Quickstart
```bash
# install node modules
npm i

# run development mode
npm run dev

# build
npm run build

# run production mode
npm start
```

### Overview
* Sass and css are both supported
* Handlebars is supported
* All development is done in the ./src folder
* Build compiles everything into the ./dist folder
* Style imports go through ./src/js/styles
* Pages are in ./src and partials are in ./src/partials
* Eslint is included by default but you can also remove the .eslintignore & .eslintrc.yml file
* vite.routes.js routes pages and also contains the context for handlebars files
* Production uses express and runs app.js
* Images and icons are in the assets folder

***


### Workaround for removing hashes from Vite's generated dist files

###### Add this to the top of the app.js file so it runs first

```js
const fs = require('fs');

const files = fs.readdirSync('./dist/js/');
files.forEach(file => {
	const hashless = file.replace(/\.[a-zA-Z0-9]*\.js/g, '.js');
	fs.rename(`./dist/js/${file}`, `./dist/js/${hashless}`, function (err) {
		if (err) throw new Error('Failed to remove hashes');
	});
});
```

### Add handlebars to the app.js file

###### For reference when I get server side rendering working

```js
const { engine } = require('express-handlebars');

Set up handlebars so that eventually it will render server side on production also
app.engine('html', engine({ defaultLayout: false }));
app.set('view engine', 'html');
app.set('views', './dist');
```
***
***
### TODO

-   create a sample site using this
-   add docs
-   update the .gitignore file with the big one from other projects
-   jquery globally?
-   bootstrap globally?
-   tailwinds?
-   svelte

# 3/14/2022

-   need .env still
- hamburger menu not working
- add jest? I think so
