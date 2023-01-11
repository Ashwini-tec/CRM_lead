import express from 'express';
import bodyparser from 'body-parser';
import * as routes from './src/index.js';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

/**
 * adding routes
 */
Object.values(routes)
    .map(route => app.use('/api', route));


export default app;
