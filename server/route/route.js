import  express  from "express";
import { createPost,getAllPosts,getPost,updatePost,deletePost } from "../controller/post-controller.js";
import { uploadImage,getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
import { newComment,getComments,deleteComment } from "../controller/comment-controller.js";

const router = express.Router();

router.post('/create',createPost);
router.get('/posts',getAllPosts);
router.get('/post/:id',getPost);
router.put('/update/:id',updatePost);
router.delete('/delete/:id',deletePost);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/comment/new',newComment);
router.get('/comments/:id',getComments);
router.delete('/comment/delete/:id',deleteComment)

export default router 