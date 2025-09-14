import { 
    getUser, 
    updateUser, 
    deleteUser,
} from '../model/index.js';


import { hashPassword } from '../../../core/utils/encryption.js';

export const getUserController = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await getUser(userId);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

export const updateUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userId = req.params.userId;
        const hashedPassword = await hashPassword(password);

        const updateResult = await updateUser(userId, email, hashedPassword);

        if (updateResult.rowCount < 1) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.send({ message: `User updated successfully`, updateResult });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const userId = req.params.userId;

        const deleteResult = await deleteUser(userId);

        if (deleteResult.rowCount < 1) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.send({ message: `User deleted successfully`, deleteResult });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

