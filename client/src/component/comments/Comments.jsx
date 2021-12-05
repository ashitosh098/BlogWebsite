import { useState,useEffect,useContext  } from 'react';
import { Box, Button, TextareaAutosize,makeStyles } from '@material-ui/core';
import { newComment,getComments } from '../../service/api'
import Comment from './Comment';
import { LoginContext } from '../../Context/ContextProvider';

const useStyles = makeStyles({
    component:{
        marginTop:100,
        display:'flex',

    },
    image:
{
   width:50,
   height:50,
   borderRadius:'50%' 
},
textArea:
{
    width:'100%',
    margin:'0px 20px'
},
button:
{
    height:40
}
})

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments =({ post })=>
{
    const classes = useStyles();
    const url = 'https://static.thenounproject.com/png/12017-200.png';

    const [comment,setComment] = useState(initialValue);
    const [comments,setComments] = useState([]);
    const [toggle,setToggle] = useState(false);
    const { account } = useContext(LoginContext)
    useEffect(() => {
        const getData = async () => {
            const response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post,toggle]);
    

    const handleChange = (e)=>
    setComment(
        {
            ...comment,
            name:account,
            postId:post._id,
            comments: e.target.value
        }
    )

    const postComment = async ()=>
    {
await newComment(comment);
setToggle(prev => !prev);
    }

    return (


   <Box>
       <Box className={classes.component}>
           <img src ={url} alt='dp' className={classes.image}/>
           <TextareaAutosize className={classes.textArea}
           minRows={5}
           onChange={(e) => handleChange(e)}
           />
           <Button
           variant='contained'
           color='primary'
           size='medium'
           className={classes.button}
           onClick={()=>postComment()}
           
           >
               Post
           </Button>
       </Box>
       {comments && comments.map(comment =>
       (
           <Comment comment ={comment} setToggle={setToggle}/>
       ))}
   </Box>
    )
}

export default Comments