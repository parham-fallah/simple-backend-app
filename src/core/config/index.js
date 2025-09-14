import 'dotenv/config';

export const config = {
    server: {
        port: process.env.PORT || 3000,
        corsOrigin: process.env.CORS_ORIGIN
    },
    database: {
        url: process.env.DATABASE_URL
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET
    }
};