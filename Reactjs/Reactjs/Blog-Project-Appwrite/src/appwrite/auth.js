import conf from "../conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) //API Endpoint
            .setProject(conf.appwriteProjectId) // project ID
        this.acoount = new Account(this.client);
    }

    //create account method - signup
    async createAccount ({email, password, name}) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //call a new method (login)
                return this.login({email, password});
            } else {
                return userAccount
            }
        }
        catch (error) {
           throw error;
        }
    }

    //login method
    async login ({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //get current user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
    
    //logout
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;

