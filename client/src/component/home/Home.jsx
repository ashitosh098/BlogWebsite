import Banner from "./Banner"
import Categories from "./Categories";
import Posts from "./Posts";
import { Grid } from "@material-ui/core";
import { useEffect,useContext } from "react";

import { LoginContext } from "../../Context/ContextProvider";



const Home =()=>
{

    const {setAccount} = useContext(LoginContext);
    const localStorage = window.localStorage.getItem("okta-token-storage");
    useEffect(() => {
        
        let email =localStorage &&  JSON.parse(localStorage);
        email = email && email.idToken;
        email = email && email.claims;
        email = email && email.email;
        email = email && email.split('@')[0];
        setAccount(email);
    }, [])


    
   
    return(
        <>
        <Banner />
        <Grid container>
            <Grid  item lg={2} xs={12} sm={2}>
            <Categories/>
            </Grid>
            <Grid container item lg={10} xs={12} sm={10}>
            <Posts/>
            </Grid>
        </Grid>
      
        </>
    )
}
export default Home;