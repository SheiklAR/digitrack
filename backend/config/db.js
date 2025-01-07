import pool from "./pool.js";

// Connect to PostgreSQL
const connectPG = async () => { 
    console.log('inside connect PG', process.env.PG_URI)
    try {
        const conn = await pool.connect();
        console.log(`Connected to PostgreSQL on host: ${conn.host}`);
    } catch (error) {
        console.log(error.error);
    }

}

// export {pool}
export default connectPG;