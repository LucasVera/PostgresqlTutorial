import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('*', (req, res) => {
    res.type('html');
    res.write('<h2>Test app with postgreSQL and Express</h2>');
    res.end();
    
});

module.exports = app;