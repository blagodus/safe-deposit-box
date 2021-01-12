import { take, select, call, debounce, put, delay } from "redux-saga/effects";
import * as api from "../../../utils/api";
import * as actions from "./appActions";
import * as types from "./appTypes";

function* screenOffSaga() {
    yield put(actions.setState({ 
        mode: 'normal', 
        isScreenOn: false, 
        info: '' ,
        passcode: ''
    }))
}

export function* watchDelayScreenOffSaga() {
    yield debounce(5000, types.TURN_OF_SCREEN, screenOffSaga) 
}

function* errorSaga() {
    yield put(actions.setState({ info: 'Error' }))
    yield delay(2000)
    yield put(actions.setState({ 
        info: '',
        passcode: '', 
    }))
}

function* lockSaga() {
    const { app } = yield select()

    yield put(actions.setState({ info: 'Locking..' }))
    yield delay(3000)
    yield put(actions.lockSafeDepositBox({ isLocked: true, info: app.passcode.slice(0, -1) }))
}

function* unlockSaga() {
    yield put(actions.setState({ info: 'Unlocking..' }))
    yield delay(3000)
    yield put(actions.unlockSafeDepositBox({ isLocked: false, info: 'Ready' }))
}

function* masterUnlockSaga() {
    const { app } = yield select()

    try {
        yield put(actions.setState({ info: 'Validating..' }))
        yield delay(2000)
        const res = yield call(api.getSerialNumber, `https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=${app.masterPasscode}`)
        if (app.sn === res.sn) {
            yield put(actions.unlockSafeDepositBox)
        } else {
            yield errorSaga()
        }
    } catch (error) {
        yield errorSaga()
    }
}

function* serviceModeSaga() {
    yield put(actions.setState({ mode: 'service', info: 'Service' }))
    yield delay(2000)
    yield put(actions.setState({ info: '', passcode: '' }))
    yield put(actions.delayScreenOff())
}

function* execCommandSaga() {
    const { app } = yield select()
    
    if (app.isLocked && app.passcode.length === 6 && app.passcode === app.savedPasscode) {
        yield unlockSaga()
    } else if (!app.isLocked && app.passcode.length === 7 && app.passcode[6] === 'L') {
        yield lockSaga()
    } else if (app.isLocked && app.passcode.length === 6 && app.passcode === '000000') {
        yield serviceModeSaga()
    } else if (app.mode === 'service' && app.passcode.length > 6) {
        yield masterUnlockSaga()
            } else {
        yield errorSaga() 
    }
}

export function* watchExecCommandSaga() {
    yield debounce(1200, types.EXEC_COMMAND, execCommandSaga)
}

export function* watchKeyPressSaga(type) {
    while (true) {
        const action = yield take(type)
        const { app } = yield select()

        yield put(actions.setState({ isScreenOn: true })) 
        if (app.info === '') {
            yield put(actions.setPasscode(action.payload))
            yield put(actions.execCommand())
        }
        yield put(actions.delayScreenOff())
    }
}