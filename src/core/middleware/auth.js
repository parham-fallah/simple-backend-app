import {verifyJwt, JWT_TOKEN_KEY_NAME} from '../utils/jwt.js';

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies ? req.cookies[JWT_TOKEN_KEY_NAME] : null;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized!' });
        }
        const decodedTokenData = verifyJwt(token);
        req.user = decodedTokenData;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Unauthorized!' });
    }
}