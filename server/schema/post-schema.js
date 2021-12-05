import mongoose  from "mongoose";

const PostSchema = mongoose.Schema(
    {
        title:
        {
            type:String,
            required:true,
        },
        description:
        {
            type:String,
            required:true
        },
        picture:
        {
            type:String,
            required:false
        },
        username:
        {
            type:String,
            required:true
        },
        categories:
        {
            type:String,
            required:false
        },
        createDate:
        {
            type:Date,
            required:true
        }
    }
)

const post = mongoose.model('post',PostSchema);

export default post;