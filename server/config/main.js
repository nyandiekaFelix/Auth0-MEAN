require('dotenv').load();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,

    AUTH0_DOMAIN: 'https://nyandiekafelix@auth0.com/',
    AUTH0_API_AUDIENCE: 'http://localhost:5555/api/',
	TOKEN_SECRET: process.env.SECRET,
}