import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import { Box } from '@material-ui/core';
import { HashRouter } from 'react-router-dom';


//components
import Header from './component/Header';
import Home from './component/home/Home';
import DetailView from './component/Posts/DetailView';
import CreateView from './component/Posts/CreateView';
import UpdateView from './component/Posts/UpdateView';
import Login from './component/account/Login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {

    const history = useHistory();

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    const customAuthHandler = () => {
        history.push('/login');
    };   

    
     
    return (
       <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
    > 
    
            <SecureRoute path='/' component={Header} />
            <Box style={{ marginTop: 64 }}>
                
                <Switch>
                    <Route exact path='/' component={Home} />
                    
                    <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                   
                    <Route exact path='/details/:id' component={DetailView} />
                    <Route exact path='/create/:category?' component={CreateView} />
                    <Route exact path='/update/:id' component={UpdateView} />

                    <Route exact path='/about' component={About} />
                    <Route exact path ='/contact' component={Contact}/>
                    
                </Switch>
            </Box>
            
        </Security >
    )
}

export default AppWithRouterAccess;