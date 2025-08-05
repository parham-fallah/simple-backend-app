import { eq } from 'drizzle-orm';

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

export const getUserController = async (req, res) => {
    const userId = req.params.userId;
    
    const user = await db
        .select({userId: users.id, email: users.email, createdAt: users.createdAt})
        .from(users)
        .where(eq(users.id, userId));
    
    if (user.length < 1) {
        res.status(404).send({ message: 'User not found' });
    } else {
        res.send(user[0]);
    }
}

export const updateUserController = async (req, res) => {
    const { email, password } = req.body;
    const userId = req.params.userId;

    const updateResult = await db
        .update(users)
        .set({email, passwordHash: password})
        .where(eq(users.id, userId));

    if (updateResult.rowCount < 1) {
        res.status(404).send({ message: 'User not found' });
    } else {
        res.send({ message: `User updated successfully`, updateResult });
    }
}

export const deleteUserController = (req, res) => {
    res.send({ message: `Delete user by id: ${req.params.userId}` });
}

