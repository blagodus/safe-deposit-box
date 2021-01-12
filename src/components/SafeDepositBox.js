import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { keypadPressed } from '../store/features/app/appActions';
import Panel from './Panel';
import BacklitScreen from './BacklitScreen';
import Keypad from './Keypadd';

const SafeDepositBox = () => {
    const dispatch = useDispatch()

    const handleKeyboardKeyPress = (e) => {
        const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','*','L']
        const pressedKey = e.key === 'l' || e.key === 'л' ? 'L' : e.key
        if (allowedKeys.includes(pressedKey)) {
            dispatch(keypadPressed(pressedKey))
        }
    }

    useEffect(() => {
        window.document.addEventListener('keypress', handleKeyboardKeyPress);

        return () => {
            window.document.removeEventListener('keypress', handleKeyboardKeyPress);
        }
    })

    return (
        <Panel>
            <BacklitScreen />
            <Keypad />
        </Panel> 
    );
}

export default SafeDepositBox;
