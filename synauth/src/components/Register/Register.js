import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
             <h1>Please Register</h1>
            <form >
                <input type="text" name="" id="" /> <br />
                <input type="text" name="" id="" /> <br />
                <input type="submit" value='submit' /> <br />
            </form>
            <Link to='/login'>Already Registered?</Link>
        </div>
    );
};

export default Register;