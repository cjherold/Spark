# Spark

###### A shockingly fast and easy way to make a static site. Yes puns!

### This is still in development and things will most likely be cleaned up and changed slightly. Still, this is fully functional and fully awesome. Have fun!


### Quickstart
```bash
# install node modules
npm i

# run development mode
npm run dev

# build
npm run build

# run production mode (simply hosts the dist folder)
npm start
```

### Overview
###### I tried keeping this very simple, and very lightweight. That way you can clone and go without having to remove a whole bunch of junk. I also made it very flexible so that you can move things to fit the pattern you prefer. Here are some of the features that this project has:
* Sass and css are both supported
* JS or TS is supported
* Handlebars is supported
* Development is done in the ./src folder
* Compiles everything into the ./dist folder on build
* Style imports go through ./src/js/styles
* Pages are in ./src and partials are in ./src/partials
* Eslint is included by default but you can also remove the .eslintignore & .eslintrc.yml file
* vite.routes.js routes pages and also contains the context for handlebars files
* Production uses express and runs app.js to host the dist folder
* Images and icons are in the assets folder

***
### Routes
###### vite.routes.js holds the routing info and the page context. Below is an example of how you would add a guide page to this project.
```js
const routes = {
    main: resolve('/index.html'),
    about: resolve('/about.html'),
	guide: resolve('/guide.html'),
};

const pageData = {
    '/index': {
        title: 'Home Page',
    },
    '/about': {
        title: 'About',
    },
    '/guide': {
        title: 'Guide',
    },
};
```

***
### Hosting on Github Pages
###### You can use this starter for Github pages by changing the "dist" folder to be named "docs". You can add the code below to app.js so that after you build and run "npm start" it will add the CNAME to the docs folder.
```js
// Add CNAME to docs folder if not there already
const files = fs.readdirSync('./docs');
if (!files.includes('CNAME')) {
    fs.writeFile('./docs/CNAME', 'www.yourgithubpage.com', (err) => {
		if (err) throw err;
	});
}
```

***

### Possible future additions
* I need to test tailwinds
* Server side rendering instead of just hosting the dist folder
* More docs and examples
* jquery globally instead of importing it
* bootstrap globally?

***

### Random notes for reference

### Add handlebars to the app.js file

###### For reference when I get server side rendering working

```js
const { engine } = require('express-handlebars');

Set up handlebars so that eventually it will render server side on production also
app.engine('html', engine({ defaultLayout: false }));
app.set('view engine', 'html');
app.set('views', './dist');
```


### Workaround for removing hashes from Vite's generated dist files

###### (file name only, not hash within files containing imports)
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