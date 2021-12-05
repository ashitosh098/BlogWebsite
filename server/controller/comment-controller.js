
import { response } from 'express';
import Comment from '../schema/comment-schema.js'
export const newComment = async (request,response)=>

{

    try{

        const comment = new Comment(request.body);
        comment.save();

        response.status(200).json('comment saved successfully')


    }
    catch(error)
    {
        response.status(500).json(error)
    }
}

export const getComments= async (request,response)=>
{
    try{

const comments = await  Comment.find({postId: request.params.id});
response.status(200).json(comments);

    }
    catch(error)
    {
        response.status(500).json(error);
    }
}

export const deleteComment = async (request,response)=>
{
    try{
const comment = await Comment.findById(request.params.id);
await comment.delete();
response.status(200).json('comment deleted');
    }
    catch(error){
response.status(500).json(error);
    }
}