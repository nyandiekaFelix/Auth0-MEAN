import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as auth0 from 'auth0-js';

import { AUTH_CONFIG } from './auth.config';

// Avoid name not found warnings
declare const auth0: any;

@Injectable()
export class AuthService {

    // Create an Auth0 web auth instance
    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.CLIENT_ID,
        domain: AUTH_CONFIG.CLIENT_DOMAIN,
        redirectURI: AUTH_CONFIG.REDIRECT,
        audience: AUTH_CONFIG.AUDIENCE,
        scope: AUTH_CONFIG.SCOPE,
        responseType: 'token id_token'
    });

    userProfile: any;
    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

    constructor(private router: Router) { 
        /* If auth token is valid,
            set the local profile property
            and update the loggedIn status subject

            If token is invalid, log out 
        */

        const isProfile = localStorage.getItem('profile');

        if (this.validToken) {
            this.userProfile = JSON.parse(isProfile);
            this.setLoggedIn(true);
        }
        else if (!this.validToken && isProfile){
            this.logout();
        }
    }

    setLoggedIn(value: boolean){
        this.loggedIn$.next(value);
        this.loggedIn = value;
    }

    login(){
        this.auth0.authorize();
    }
    
    handleAuth(){
        this.auth0.parseHash((err, user) => {
            if (user && user.accessToken && user.idToken) {
                window.location.hash = '';
                this.getProfile(user);
            }
            else if (err) {
                console.error(`Error authenticating: ${err.error}`);
            }
            this.router.navigate(['/']);
        });
    }
    
    get validToken(): boolean {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    }
    
    private getProfile(user){
        this.auth0.client.userInfo(user.accessToken, (err, profile) => {
            if (profile) {
                this.setSession(user, profile);
            }
            else if (err) {
                console.error(`Error autenticating: ${err.error}`);
            }
        });
    }
    
    private setSession(user, profile){
        const expiresAt = JSON.stringify((user.expiresIn * 1000) + Date.now());

        localStorage.setItem('access_token', user.accessToken);
        localStorage.setItem('id_token', user.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('profile', JSON.stringify(profile));
        
        this.userProfile = profile;
        this.setLoggedIn(true);                
    }

    logout(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('authRedirect');

        this.userProfile = undefined;
        this.setLoggedIn(false);

        this.router.navigate(['/']);                
    }
    
}
