import axios from 'axios'

const URL ='';

export const createPost = async (post)=>
{
    try
    {
      return await axios.post(`${URL}/create`,post)

    }
    catch(error)
    {
        console.log("error while calling post api ",error)
    }
}
export const  getAllPosts = async(param)=>
{
  try{
let response = await axios.get(`${URL}/posts${param}`);
return response.data;
  }
  catch(error){
console.log('errror while calling getAllPost API',error)
  }
}
export const getPost = async(id)=>
{
  try{
let response = await axios.get(`${URL}/post/${id}`);
return response.data;
  }
  catch(error)
  {
    console.log('error while calling getPost API',error)
  }
}

export const  updatePost= async(id,post)=>
{
  try{
return await axios.put(`${URL}/update/${id}`,post)
  }
  catch(error)
  {
    console.log('error while calling updatePosT API',error)
  }
}
export const deletePost = async(id)=>
{
  try{
    return await axios.delete(`${URL}/delete/${id}`);
  }
  catch(error){
console.log('error while calling deletePost API',error)
  }
}
export const uploadFile = async (post) => {
  console.log(post);
  try {
      return await axios.post(`${URL}/file/upload`, post);
  } catch (error) {
      console.log('Error while calling uploadFile API ', error);
  }
}

export const newComment = async (data) =>
{
  try{
return await axios.post(`${URL}/comment/new`,data);
  }
  catch(error)
  {
    console.log("Error while calling newComment API ",error)
  }
}

export const getComments = async(id) =>
{
  try
  {
let response= await axios.get(`${URL}/comments/${id}`);
return response.data;
  }
  catch(error)
  {
    console.log('Error while caling getComment API',error);
  }
}

export const deleteComment = async (id)=>
{
  try
{
 return  await axios.delete(`${URL}/comment/delete/${id}`);
}
catch(error)
{
  console.log('error while calling deleteComment API',error)
}
}