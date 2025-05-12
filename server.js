const express = require('express');
const app = express();

const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send(`Hello World! - Node Version: ${process.version} - datatime: ${new Date().toLocaleString('it-IT', {timeZone: 'Europe/Rome', hour12: false})}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
