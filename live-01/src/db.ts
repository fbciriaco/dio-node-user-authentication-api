import { Pool } from "pg";

const connectionString = 'postgres://postgres:a1s2d3@localhost:5432/app_user';

const db = new Pool({connectionString});

export default db;
