import express from 'express';

import { 
    createUserController, 
    getUserController, 
    updateUserController,
    deleteUserController
} from '../controller/index.js';

const usersRouter = express.Router();

usersRouter.post('/', createUserController);

usersRouter.get('/:userId', getUserController);

usersRouter.put('/:userId', updateUserController);

usersRouter.delete('/:userId', deleteUserController);

export {
    usersRouter
};
