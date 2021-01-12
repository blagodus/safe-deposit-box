import React from 'react';
import { useDispatch } from 'react-redux';
import { keypadPressed } from '../../store/features/app/appActions';

function Key(props) {
    const { value } = props
    const dispatch = useDispatch()

    return (
        <button className="keypad-button" onClick={() => dispatch(keypadPressed(value))}>{ value }</button>
    );
}

export default Key;