const express = require('express');
const app = express();
const port = process.env.PORT || 5500;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(`<p>url: <a href="https://ingamore.net">ingamore.net</a></p>\
              <p>url: <a href="https://www.ingamore.net">www.ingamore.net</a></p>\
              <p>Hello World!</p>\
              <p>dirname: ${__dirname}</p>\
              <p>Node Versione: ${process.version}</p>\
              <p>datatime: ${new Date().toLocaleString('it-IT', {timeZone: 'Europe/Rome', hour12: false})}</p>\
              `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
