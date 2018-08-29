const bodyParser = require('body-parser');
const express = require('express');


const path = require('path');
const http = require('http');
const app = express();
const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist/calendar')));
app.use('/api', api);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/calendar/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Open http://localhost:${port} for server preview`));
