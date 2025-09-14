import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { config } from './core/config/index.js';
import { authMiddleware } from './core/middleware/auth.js';
import { logger } from './core/middleware/logger.js';

import { usersRouter } from './modules/users/router/index.js';
import { authRouter } from './modules/auth/router/index.js';
import { notesRouter } from './modules/notes/router/index.js';


const app = express();
const port = config.server.port;


app.use(cors({
  origin: config.server.corsOrigin || true, // Set to your frontend origin or true for all
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(logger);

// Defining routes
app.use('/auth', authRouter);
app.use('/users', authMiddleware, usersRouter);
app.use('/notes', authMiddleware, notesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
