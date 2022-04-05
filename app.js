const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`));

module.exports = app;
