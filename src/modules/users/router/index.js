import express from 'express';

const usersRouter = express.Router();

usersRouter.post('/', (req, res) => {
    res.send({ message: 'Create user route' });
});

usersRouter.get('/:userId', (req, res) => {
    res.send({ message: 'Get user by id' });
});

usersRouter.put('/:userId', (req, res) => {
    res.send({ message: 'Update user by id' });
});

usersRouter.delete('/:userId', (req, res) => {
    res.send({ message: 'Delete user by id' });
});

export {
    usersRouter
};
