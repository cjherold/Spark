# Spark

A shockingly fast and easy way to make a static site. Yes puns!

---

### TODO

-   create a sample site using this
-   add docs
-   update the .gitignore file with the big one from other projects
-   jquery globally?
-   bootstrap globally?
-   tailwinds?
-   svelte

---

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

# 3/14/2022

-   need .env still
