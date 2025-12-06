import { Pool } from "pg";
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({path:path.join(process.cwd(), '.env')})

export const pool = new Pool({
    connectionString: `${process.env.CONNECTION_STR}`
});

export const initDb = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        email VARCHAR(150) NOT NULL,
        password TEXT,
        age INT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)

        console.log('database connected');
        
};