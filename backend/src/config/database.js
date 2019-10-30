module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root5370',
    database: 'farmacia',
    define: {
        timestamp: true, //toda tabela vai ter created_At, updated_at
        underscored: true, //usará o snake_Case;
    },
}