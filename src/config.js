module.exports = {
    postgres_database : {
        host: 'localhost',
        user: 'ecommerce',
        password: 'ecommerce',
        database: 'myPostgresDB',
        port: 5432, // El puerto por defecto de PostgreSQL es 5432
    },
    mongodb : {
        host: '127.0.0.1', //Aqui no se puede usar IPv6 local host porque mongo reconoce el IPv4
        user: '',
        password: '',
        database: 'myMongoDB',
        port: 27017, 
    }
}