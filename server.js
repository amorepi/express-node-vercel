const express = require('express');
const app = express();

const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send(`Hello World! - node version: ${process.version}`)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
