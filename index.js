const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({
        date: Date.now(),
        foo: 'bar'
    });
});

app.get('/hello', (req, res) => {
    res.send({
        hello: 'world'
    });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
    console.log('Press CTRL + C to quit');
});