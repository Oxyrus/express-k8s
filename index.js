const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(`Request started at ${new Date()}`)
    res.send('hello world from express');
});

app.listen(3000, () => {
    console.log('Application up and running on port 3000');
});
