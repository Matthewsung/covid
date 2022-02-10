import React from 'react';
import './App.css';
import Main from './component/Main.tsx';
import Head from './component/Head.tsx'
import Total from './component/Total.tsx';
import Detail from './component/Detail.tsx'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
const App= ()=>{
  
    return (
      <BrowserRouter>
        <Head />
        <Total />

        <Switch>
          <Route exact path='/covid'>
            <Main />
          </Route>
          <Route path='/covid/:country' >
            <Detail />
          </Route>
        </Switch>
        
      </BrowserRouter>
      );
  
}

export default App;
