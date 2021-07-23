export default {
    NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    HOST: process.env.HOST ? process.env.HOST : '0.0.0.0',
    PORT: process.env.PORT ? Number(process.env.PORT) : Number(3000),
    BASE_URL: process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:3000/api/',
    USER: process.env.USER ? process.env.USER : 'user',
    PASS: process.env.PASS ? process.env.PASS : 'pass'
}
