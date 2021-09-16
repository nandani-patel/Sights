import React from 'react';
import {Route} from 'react-router-dom';
import Login from "./login";
import Map from "./Map";
import Post from "./posts";
import BucketList from './BucketList';

function App(){
    return (
        <div classname="App">
           <Route exact path="/" to component={Login}/>
           <Route exact path="/posts" to component={Post}/>
           <route exact path="/Map" to component={Map}/>
           <Route exact path="/BucketList" to component={BucketList}/>
        </div>
    );  
}

export default App;
