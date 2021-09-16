import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li><Link to='/'>login/signup</Link></li>
            <li><Link to='/posts'>posts</Link></li>
            <li><Link to='/BucketList'>Bucketlist</Link></li>
            <li><Link to='/Map'>Map</Link></li>
        </ul>
    )
}

export default NavBar;