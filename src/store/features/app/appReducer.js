import * as types from "./appTypes";

const initialState = {
    mode: 'normal', // normal | service
    isScreenOn: false,
    isLocked: false,
    info: '',
    passcode: '', // passcode nubmer comination
    savedPasscode: '',
    sn: '4815162342'
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PASSCODE:
            return {
                ...state,
                passcode: state.passcode + action.payload
            };
        case types.LOCK_SAFE_DEPOSIT_BOX:
            return {
                ...state,
                ...action.payload,
                savedPasscode: state.passcode.slice(0, -1),
                passcode: '',
            };
        case types.UNLOCK_SAFE_DEPOSIT_BOX:
            return {
                ...state,
                ...action.payload,
                savedPasscode: '',
                passcode: '',
            };
        case types.SET_STATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }   
};