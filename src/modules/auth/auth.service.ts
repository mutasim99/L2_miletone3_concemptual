import { pool } from "../../database/db";

const logInUserIntoDb = async (email: string, password: string) => {
    const user = pool.query(`
        SELECT * FROM users WHERE email=$1
        `, [email]);
    return user;
};


export const authServices = {
    logInUserIntoDb
}