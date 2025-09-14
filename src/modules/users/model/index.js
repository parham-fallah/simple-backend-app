import { eq } from 'drizzle-orm';

import { db } from '../../../core/database/connection.js';
import { users } from '../../../core/database/schema.js';


export async function getUser(userId) {
    const user = await db
        .select({userId: users.id, email: users.email, createdAt: users.createdAt})
        .from(users)
        .where(eq(users.id, userId));
    
    if (user.length < 1) {
        return null;
    }
    return user[0];
}

export async function updateUser(userId, email, password) {
    const updateResult = await db
        .update(users)
        .set({email, passwordHash: password})
        .where(eq(users.id, userId));
    return updateResult;
}

export function deleteUser(userId) {
    return db.delete(users).where(eq(users.id, userId));
}