import { watchExecCommandSaga, watchKeyPressSaga, watchDelayScreenOffSaga } from '../store/features/app/appSagas';
import { fork, all } from "redux-saga/effects";
import * as types from './features/app/appTypes';

export function* watchSagas() {
    yield all([
        fork(watchKeyPressSaga, types.KEYPAD_PRESS),
        fork(watchKeyPressSaga, types.KEYBOARD_PRESS),
        fork(watchDelayScreenOffSaga),
        fork(watchExecCommandSaga),
    ]);
}