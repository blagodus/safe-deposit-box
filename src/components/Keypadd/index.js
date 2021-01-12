import React from 'react';
import Key from './Key';

const Keypad = () => (
    <div className="keypad">
        <Key value={'7'} />
        <Key value={'8'} />
        <Key value={'9'} />
        <Key value={'4'} />
        <Key value={'5'} />
        <Key value={'6'} />
        <Key value={'1'} />
        <Key value={'2'} />
        <Key value={'3'} />
        <Key value={'*'} />
        <Key value={'0'} />
        <Key value={'L'} />
    </div> 
)

export default Keypad;