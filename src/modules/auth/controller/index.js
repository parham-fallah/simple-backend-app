import jwt from 'jsonwebtoken';

import { createUser, getUserByEmail } from '../model/index.js';
import { hashPassword, comparePassword } from '../../../core/utils/encryption.js';
import { config } from '../../../core/config/index.js';



export const registerController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const insertResult = await createUser(email, hashedPassword);
        res.send({ message: 'User created successfully', insertResult });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }

}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        const userInfoIsValid = user ? await comparePassword(password, user.passwordHash) : false;
        
        if (!userInfoIsValid) {
            res.status(401).send({ message: 'Invalid email or password' });
        }

        const jwtToken = jwt.sign(
            { userId: user.id, email: user.email }, 
            config.auth.jwtSecret,
            { expiresIn: '1d' }
        );

        res.cookie(
            'authToken',
            jwtToken,
            {
                httpOnly : true,
                maxAge : 1000*60*60*24
            }
        );
        res.send({
            message: "Login successful",
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}