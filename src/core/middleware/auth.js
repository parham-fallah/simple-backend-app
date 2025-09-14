import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies?.authToken;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized!' });
        }
        const decodedTokenData = jwt.verify(token, config.auth.jwtSecret);
        req.user = decodedTokenData;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Unauthorized!' });
    }
}