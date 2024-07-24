import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface User {
    id: string;
    isAdmin: boolean;
}

export const verify = (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers.cookie as string;
    if (authHeader) {
        const cookies = authHeader.split(';');
        const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
        if (tokenCookie) {
            const token = tokenCookie.split('=')[1];
            console.log(typeof token);
            console.log("token...#####.", token);

            jwt.verify(token, process.env.SECRET_KEY, (err: any, user: User) => {
                try {
                    if (err) {
                        return res.status(403).json({ message: "Token is not valid!" });
                    }
                    req.user = user;
                    next();
                } catch (error) {
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            });
        } else {
            return res.status(401).json({ message: "Token not found!" });
        }
    } else {
        return res.status(401).json({ message: "Authorization header not found!" });
    }
};