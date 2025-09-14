import express from 'express';

import { 
    getUserController, 
    updateUserController,
    deleteUserController,
} from '../controller/index.js';

const usersRouter = express.Router();
usersRouter.get('/:userId', getUserController);
usersRouter.put('/:userId', updateUserController);
usersRouter.delete('/:userId', deleteUserController);

export {
    usersRouter
};
