import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { config } from './core/config/index.js';
import { authMiddleware } from './core/middleware/auth.js';

import { usersRouter } from './modules/users/router/index.js';
import { authRouter } from './modules/auth/router/index.js';

const app = express();
const port = config.server.port;


app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Defining routes
app.use('/auth', authRouter);
app.use('/users', authMiddleware, usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
