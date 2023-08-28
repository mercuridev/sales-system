import pgPromise from 'pg-promise';

const pgp = pgPromise();

const connection = pgp({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
});

export default connection;