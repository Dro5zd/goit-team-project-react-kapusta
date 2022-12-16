import React from 'react';
import {HomeScreen} from '../components/HomeScreen/HomeScreen';
const Home = () => {
    const currentTime = () => {
        const options: {} = {hour: '2-digit', minute: '2-digit'};
        const today = new Date();
        return today.toLocaleString('ua-UA', options)
    }
    return (
        <>
            <HomeScreen currentTime={currentTime()}/>
        </>
    );
};
export default Home