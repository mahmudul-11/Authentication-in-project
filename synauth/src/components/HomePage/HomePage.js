import React from 'react';
import useAuth from '../../hooks/useAuth';

const HomePage = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>This is HomePage</h1>
            <h4>Logged in : {user?.displayName}</h4>
        </div>
    );
};

export default HomePage;