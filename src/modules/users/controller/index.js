import { db } from '../../../core/database/connection.js';
import { users } from '../../../core/database/schema.js';

export const createUserController = async (req, res) => {
    const { email, password } = req.body;
    const insertResult = await db.insert(users).values({
        email,
        passwordHash: password,
    });
    res.send({ message: 'User created successfully', insertResult });
}

export const getUserController = (req, res) => {
    res.send({ message: `Get user by id: ${req.params.userId}` });
}

export const updateUserController = (req, res) => {
    res.send({ message: `Update user by id: ${req.params.userId}` });
}

export const deleteUserController = (req, res) => {
    res.send({ message: `Delete user by id: ${req.params.userId}` });
}

