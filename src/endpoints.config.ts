export default {
    DatabaseURL: process.env.DATABASE_URI ?? 'mongodb://localhost:27017/dipaydb',
    Port: process.env.PORT ?? 3000
}