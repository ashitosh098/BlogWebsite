
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://ashitosh:MongoDb@blogweb-shard-00-00.hklx5.mongodb.net:27017,blogweb-shard-00-01.hklx5.mongodb.net:27017,blogweb-shard-00-02.hklx5.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-e68tag-shard-0&authSource=admin&retryWrites=true&w=majority`,
    
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});
export default multer({storage});