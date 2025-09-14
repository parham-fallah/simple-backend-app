import { eq } from 'drizzle-orm';

import { db } from '../../../core/database/connection.js';
import { notes } from '../../../core/database/schema.js';


export async function getNotes(userId) {
    const notesList = await db
        .select()
        .from(notes)
        .where(eq(notes.userId, userId));
    
    return notesList;
}

export async function createNote(userId, title, content, status) {
    const insertResult = await db.insert(notes).values({
        userId,
        title,
        content,
        status,
    });
    return insertResult;
}