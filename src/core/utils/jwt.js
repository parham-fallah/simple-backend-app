import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export const JWT_TOKEN_KEY_NAME = 'authToken';

export const signJwt = (payload) => {
    const jwtToken = jwt.sign(
        payload, 
        config.auth.jwtSecret,
        { expiresIn: '1d' }
    );
    return jwtToken;
}

export const verifyJwt = (token) => {
    const decodedTokenData = jwt.verify(token, config.auth.jwtSecret);
    return decodedTokenData;
}