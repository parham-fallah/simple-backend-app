import { getNotes, createNote } from '../model/index.js';

export async function getNotesController(req, res) {
    const userId = req.user.id;
    try {
        const notes = await getNotes(userId);
        res.status(200).json({ notes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createNotesController(req, res) {
    const userId = req.user.id;
    const { title, content, status } = req.body;
    try {
        const notes = await createNote(userId, title, content, status);
        res.status(200).json({ notes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}