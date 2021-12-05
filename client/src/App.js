

import React from 'react';


import {HashRouter,Switch,Route} from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import ContextProvider from './Context/ContextProvider';



function App() {
  return (
    <ContextProvider>
    <HashRouter>
    <AppWithRouterAccess/>
  
  </HashRouter>
  </ContextProvider>
  );
}

export default App;
