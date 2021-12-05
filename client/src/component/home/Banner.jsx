
import { Box,Typography,makeStyles } from "@material-ui/core"
const useStyle=makeStyles(
    {
image:{
    background:`url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
    width:'100%',
    height:'50vh',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
'& :first-child':{
    fontSize:66,
    background:'#ffffff',
    lineHeight:1,
},
'& :last-child':{
    fontSize:20,
    background:'#ffffff',
    marginTop:15,
    fontFamily:'cursive'
}
}
    }
);

const Banner =()=>
{
    const classes=useStyle();
    return(
        <Box className={classes.image}>
            <Typography style={{fontFamily:'cursive'}}>BLOG</Typography>
            <Typography>Ocean Of NEWS FACTS and STORIES....</Typography>
        </Box>
    )
}
export default Banner