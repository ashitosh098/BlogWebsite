import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://previews.123rf.com/images/279photo/279photo1705/279photo170501991/81032796-client-support-service-workdesk-with-contact-us-signs-dark-background-top-view-mockup.jpg'})`,
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


const Contact = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}>Helloo</Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Get in touch!</Typography> 
                <Typography variant="h5" className={classes.text}>Hi! I'm a Ashitosh ,BE graduate specialized in Computer Engineering 
                    and a Certified MERN Stack developer<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/ashitosh098" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>   
                <Typography variant="h5" className={classes.text}>
                    Reach out to me on Instagram
                    <Link href="https://www.instagram.com/ashitosh_chilbule/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:chilbuleashitosh@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>
            </Box>
        </Box>
    );
}

export default Contact;