const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const config = require('./config/main');

module.exports = {
    jwtCheck: () => {
        return jwt({
            secret: jwks.ExpressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${config.AUTH0_DOMAIN}.well-known/jwks.json`
            }),
            aud: config.AUTH0_API_AUDIENCE,
            issuer: config.AUTH0_DOMAIN,
            algorithm: 'RS256'
        });
    }
};