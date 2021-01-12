import React from 'react';
import { useSelector } from 'react-redux';

const MainLine = () => {
    const info = useSelector(state => state.app.info)
    const passcode = useSelector(state => state.app.passcode)

    return (
        <span className="main-line">{info !== '' ? info : passcode}</span>
    );
}

export default MainLine;