

import grid from 'gridfs-stream';
import mongoose from 'mongoose';


const url = '';

let gfs;
const conn = mongoose.connection;
conn.once('open', () => {

    mongoose.set('useCreateIndex', true);
    gfs =new grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});



export const uploadImage = (request, response) => {
   try {if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}    
catch(error)
{
    response.status(500).json(error);
}
}


export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename:request.params.filename });
        console.log(file);
        const readStream = gfs.createReadStream(file.filename);
         readStream.pipe(response);
        
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}