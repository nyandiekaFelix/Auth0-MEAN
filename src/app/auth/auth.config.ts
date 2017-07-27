import { ENV } from '../core/env.config';

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
    NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'asQr4cb2yaA9jUpB8SGjhxKVq0BpHao3',
    CLIENT_DOMAIN: 'nyandiekafelix.auth0.com',
    AUDIENCE: 'http://localhost:5555/api/',
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile',
    NAMESPACE: 'http://meetupmgr.com/roles'
}