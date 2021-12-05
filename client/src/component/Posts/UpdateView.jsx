
import { useState,useEffect } from "react";
import { Box,makeStyles,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import { getPost,updatePost,uploadFile } from "../../service/api";
import { useHistory } from "react-router-dom";


const useStyles= makeStyles((theme)=>(
    {
container:{
padding:'0 100px',
[theme.breakpoints.down('md')]:{
    padding:0
}
},
image:{
width:'100%',
height:'50vh',
objectFit:'cover'
},
form:
{
    display:'flex',
    flexDirection:'row',
    marginTop:10
},
textField:
{
    flex:1,
    margin:'0 30px',
    fontSize:25
},
textarea:
{
width:'100%',
border:'none',
marginTop:50,
fontSize:18,
'&:focus-visible':{
    outline:'none'
}

}

    }
))

const initialValues ={
    title:"",
    description:"",
    picture:"",
    username:"ashitosh",
    categories:"All",
    createDate: new Date()


}




const UpdateView=({ match })=>
{
    const classes=useStyles();
    
    
    
    const history = useHistory();
   const [post,setPost] = useState(initialValues);
   const [file, setFile] = useState('');
    const [imageUrl,setImageUrl] = useState('');

   const url =post.picture ? post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
  
  
useEffect(()=>{
    const fetchData = async ()=>
   {
      let data = await getPost(match.params.id);
      setPost(data);
   }
   fetchData();
},[])

useEffect(() => {
    const getImage = async () => { 
        if(file) {
            const data = new FormData();
            console.log(file);
            data.append("name", file.name);
            data.append("file", file);
            
            const image = await uploadFile(data);
            post.picture = image.data;
            setImageUrl(image.data);
        }
    }
    getImage();
}, [file])



const updateBlog= async ()=>
{
await updatePost(match.params.id,post);
history.push(`/details/${match.params.id}`);
}

const handleChange=(e)=>
{
setPost({...post,[e.target.name]:e.target.value})
}
   
   
    return(
      <Box className={classes.container}>
<img className={classes.image} src={url} alt='banner'/>
<FormControl className={classes.form}>
<label htmlFor="fileInput">
    <AddCircle fontSize='large' color='action'/>
    </label>
    <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                    
                />
    <InputBase className={classes.textField} name="title" onChange={(e)=>{handleChange(e)}} value ={post.title} placeholder='Title'/>
    <Button onClick = {()=> updateBlog()} variant='contained' color='primary'>Update</Button>
    
</FormControl>
<TextareaAutosize

    rowsmin={5}
    placeholder='tell your story...'
    className={classes.textarea}
    value={post.description}
    name="description"
    onChange={(e)=>{handleChange(e)}}
    
    />
      </Box>
    )
}
export default UpdateView