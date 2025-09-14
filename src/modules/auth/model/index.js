import { eq } from 'drizzle-orm';

import { db } from '../../../core/database/connection.js';
import { users } from '../../../core/database/schema.js';

export async function createUser(email, password) {
    const insertResult = await db.insert(users).values({
        email,
        passwordHash: password,
    });
    return insertResult;
}

export async function getUserByEmail(email) {
    const user = await db
        .select()
        .from(users)
        .where(eq(users.email, email));
    
    if (user.length < 1) {
        return null;
    }
    return user[0];
}