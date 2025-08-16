import { 
    createUser, 
    getUser, 
    updateUser, 
    deleteUser 
} from '../model/index.js';

export const createUserController = async (req, res) => {
    const { email, password } = req.body;
    const insertResult = await createUser(email, password);
    res.send({ message: 'User created successfully', insertResult });
}

export const getUserController = async (req, res) => {
    const userId = req.params.userId;
    
    const user = await getUser(userId);
    
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
}

export const updateUserController = async (req, res) => {
    const { email, password } = req.body;
    const userId = req.params.userId;

    const updateResult = await updateUser(userId, email, password);

    if (updateResult.rowCount < 1) {
        res.status(404).send({ message: 'User not found' });
    } else {
        res.send({ message: `User updated successfully`, updateResult });
    }
}

export const deleteUserController = async (req, res) => {
    const userId = req.params.userId;

    const deleteResult = await deleteUser(userId);

    if (deleteResult.rowCount < 1) {
        res.status(404).send({ message: 'User not found' });
    } else {
        res.send({ message: `User deleted successfully`, deleteResult });
    }
}

