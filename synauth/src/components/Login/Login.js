import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle, signInWithGithub} = useFirebase();
    return (
       
        <div>
             <h1>Pleae Login </h1>
           
           <button onClick={signInWithGoogle}>Google sign in</button> <br />
           <button onClick={signInWithGithub}>Github Sign In</button> <br/>
            <Link to='/register'>New user?</Link>
        </div>
    );
};

export default Login;