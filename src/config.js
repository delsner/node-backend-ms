export default {
    server: {
        port: process.env.PORT || 8081
    },
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5432'
    }
};
