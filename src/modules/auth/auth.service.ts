import bcrypt from "bcryptjs";
import { pool } from "../../database/db";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

const logInUserIntoDb = async (email: string, password: string) => {
    const user = await pool.query(`
        SELECT * FROM users WHERE email=$1
        `, [email]);

    const matchPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!matchPassword) {
        throw new Error("invalid credentials!");

    };

    const userInfo = user.rows[0];
    const payload = {
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email
    };

    const secret = process.env.SECRET_KEY

    if (!secret) {
        throw new Error('must need secret key!')
    }

    const token = jwt.sign(payload, secret, { expiresIn: '7d' })
    return { token, user: userInfo };
};


export const authServices = {
    logInUserIntoDb
}