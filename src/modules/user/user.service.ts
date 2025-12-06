import { pool } from "../../database/db";

const createUserIntoDB = async (payload: Record<string, unknown>) => {
    const { name, email, password } = payload;
    const result = await pool.query(`
        INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *
        `, [name, email, password]);
        return result
};


export const userService = {
    createUserIntoDB
}