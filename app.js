const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Test run for AWS beanstalk_Test for Review stage in pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
