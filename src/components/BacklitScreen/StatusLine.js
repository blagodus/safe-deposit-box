import React from 'react';
import { useSelector } from 'react-redux';

const StatusLine = () => {
    const isLocked = useSelector(state => state.app.isLocked)

    return (
        <span className="status-line">{ isLocked ? 'Locked' : 'Unlocked' }</span>
    );
}

export default StatusLine;