import React from 'react';
import { useSelector } from 'react-redux';
import MainLine from './MainLine';
import StatusLine from './StatusLine';

const BacklitScreen = () => {
    const isScreenOn = useSelector(state => state.app.isScreenOn)

    return (
        <div className={`screen ${isScreenOn ? 'screen__on' : 'screen__off'}`}>
            <StatusLine />
            <MainLine />
        </div>
    );
}

export default BacklitScreen;