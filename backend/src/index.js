const express = require('express');
const app = express();

const server = require('http').Server(app);

app.listen(3000, () => {
    console.log('listen on port 3000');
});