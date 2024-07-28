import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';

dotenv.config();


const uri =  process.env.DB_URI 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri); 
// const client = new MongoClient(process.env.ATLAS_URI)
let db;

export const connectDb = async () => {
    try{
      await client.connect();
      db = client.db('shop_me'); 
      console.log('Connected to MongoDB');
      return db;
    } catch (err){
      console.error('MongoDB connection failed', err)
      throw err
    }
    
  }
  
  export const getDb = () => {
    if (!db) {
        throw new Error('Database not initialized')
    }
    return db;
  };