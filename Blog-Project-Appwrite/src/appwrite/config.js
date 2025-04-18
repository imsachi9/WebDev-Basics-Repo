import conf from "../../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) //API Endpoint
            .setProject(conf.appwriteProjectId) // project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //create post
    async createPost({title, slug, content, featureImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            throw error;
        }
    }

    //update post
    async updatePost(slug, {title, content, featureImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            );
        } catch (error) {
            throw error;
        }
    }

    //delete post
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    //get one post
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    //get all posts
    async getAllPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Serive  :: getAllPosts :: error", error);
            return false;
        }
    }

    //file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
        }
    }
    //delete file
    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        );
    }
}

const service = new Service();

export default service;