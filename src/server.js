import express from 'express';

import { config } from './core/config/index.js';
import { usersRouter } from './modules/users/router/index.js';

const app = express();
const port = config.server.port;

app.use(express.json());

// Defining routes
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
