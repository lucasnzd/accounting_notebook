import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import cors from 'cors';
import Logger from './utils/Logger';
import endpoints from './src/endpoints';

const serverConfig = config.get('server');
const app = express();
const PORT = serverConfig.server_port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', endpoints);
app.get('/', (req, res) => res.status(200).send('Welcome to Accounting Notebook API 🤖'));
app.get('*', (req, res) => res.status(404).send('Endpoint not found 👻'));

app.listen(PORT, () => Logger.info(`Application up and running at port ${PORT}.`));

export default app;
