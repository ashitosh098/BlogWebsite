import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Features</Typography>
                <Typography variant="h5" className={classes.text}>
                    <ul>
                        <li>
                            You can read blogs written by other authors
                        </li>
                        <li>
                            You can create your own blogs
                        </li>
                        <li>
                            Filter out blogs of category that you love
                        </li>
                        <li>
                            Update or delete blogs created by you
                        </li>
                        <li>
                            You can Leave comments on blogs of other author 
                        </li>
                    </ul>
                </Typography>
                <Typography variant="h3">Creating a blog is Easy!</Typography>
                <Typography variant="h5" className={classes.text}>
                    <ul>
                        <li>
                            Click on category that you wish to write on
                        </li>
                        <li>
                            Hit create blog button
                        </li>
                        <li>
                            select image that you  wish to post for your blog
                        </li>
                        <li>
                            Write Title Of your blog in Title section
                        </li>
                        <li>
                            Write content Of your blog in Description sction
                        </li>
                    </ul>
                </Typography>
                <Typography variant="h3">Hurray! You have created blog successfully</Typography>
                
                        <Typography variant="h5" className={classes.text}>
                            You Can use below ids to test this blog app-
                                <ul><li>id1:
                                    <ul>
                                <li>username:ashitosh@gmail.com</li>
                                <li>password:Qwert2341</li>
                                </ul>
                                </li>
                                <li>id2:
                                <ul><li>username:aditya@gmail.com</li>
                               <li> password:Poiu0987</li>
                                </ul>
                                </li>
                            </ul>
                        </Typography>
                
            </Box>
        </Box>
    )
}

export default About;