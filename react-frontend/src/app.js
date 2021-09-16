import React from 'react';

import Login from "./login";
// import Map from "./Map";
import Post from "./posts";
import BucketList from './BucketList';

function App(){
    return (
        <div classname="App">
            <Login/>
            <BucketList/>
            <Post/>
        </div>
    );  
}

export default App;
