import express from 'express';

import { 
    getNotesController,
    createNotesController
} from '../controller/index.js';

const notesRouter = express.Router();
notesRouter.get('/', getNotesController);
notesRouter.post('/', createNotesController);

export {
    notesRouter
};
