import * as types from "./appTypes";

export const keypadPressed = (payload) => ({
    type: types.KEYPAD_PRESS,
    payload
});

export const keyboardPressed = (payload) => ({
    type: types.KEYBOARD_PRESS,
    payload
});

export const delayScreenOff = () => ({
    type: types.TURN_OF_SCREEN
});

export const execCommand = () => ({
    type: types.EXEC_COMMAND
});

export const setPasscode = (payload) => ({
    type: types.SET_PASSCODE,
    payload
});

export const lockSafeDepositBox = (payload) => ({
    type: types.LOCK_SAFE_DEPOSIT_BOX, 
    payload
});

export const unlockSafeDepositBox = (payload) => ({
    type: types.UNLOCK_SAFE_DEPOSIT_BOX, 
    payload
});

export const setState = (payload) => ({
    type: types.SET_STATE, 
    payload
});