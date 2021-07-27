export default {
    NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    HOST: process.env.HOST ? process.env.HOST : '0.0.0.0',
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    API_BASE_URL: process.env.API_BASE_URL ? process.env.API_BASE_URL : 'http://localhost:3000/api/',
    POST_TEXT_MAX_LENGTH: process.env.POST_TEXT_MAX_LENGTH ? Number(process.env.POST_TEXT_MAX_LENGTH) : 500
}
