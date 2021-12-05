import express from "express";
import Router from './route/route.js';
import cors from 'cors';
import bodyParser from "body-parser"; 
import DotEnv from "dotenv";

//components
 
import Connection from "./database/db.js";
const app = express();

DotEnv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
}


const port= process.env.PORT || 8000;

app.listen(port,()=>console.log(`server is running on port ${port}`));

const URL = 'mongodb://ashitosh:MongoDb@blogweb-shard-00-00.hklx5.mongodb.net:27017,blogweb-shard-00-01.hklx5.mongodb.net:27017,blogweb-shard-00-02.hklx5.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-e68tag-shard-0&authSource=admin&retryWrites=true&w=majority';

Connection(process.env.MONGODB_URI || URL );