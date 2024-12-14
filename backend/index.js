import express from "express";
import cors from "cors"
import pkg from 'pg';
import { FRONTEND_URL, DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD, PORT } from "./config.js";





const app = express();


const { Pool } = pkg;

const pool = new Pool({
    host:DB_HOST,
    database:DB_DATABASE,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT
})

app.use(cors({
    origin:FRONTEND_URL
}))

app.get("/ping", async(req, res) => {

    const result = await pool.query(`SELECT NOW()`)

    console.log(result)

    res.json({
        pong: result.rows[0].now
    });
});

app.listen(3000, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
