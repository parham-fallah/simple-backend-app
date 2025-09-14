import express from 'express';

import { 
    getUserController, 
    updateUserController,
    deleteUserController,
} from '../controller/index.js';

const usersRouter = express.Router();
usersRouter.get('/', getUserController);
usersRouter.put('/', updateUserController);
usersRouter.delete('/', deleteUserController);

export {
    usersRouter
};
