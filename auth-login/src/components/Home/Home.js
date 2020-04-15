import React from 'react';
import './home.css';
import app from '../../base'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <button onClick={()=> {
                return app.auth().signOut();
            }}>Sign out</button>
        </>
    )
}
export default Home;