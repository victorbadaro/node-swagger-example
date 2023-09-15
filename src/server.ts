import 'dotenv/config';
import express from 'express';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Server port is now running at :${SERVER_PORT}...`));
