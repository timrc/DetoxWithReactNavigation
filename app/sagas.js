import { fork, put, select, call, take, takeEvery } from 'redux-saga/effects';

import { resetFlow } from './actions';

const goTo = function* goTo(action) {
    yield put(resetFlow(action.flow));
};

const changeFlow = function* changeFlow(action) {
    yield put({
        type: 'GO_TO',
        flow: action.flow,
    });
};

export default function* root() {
    yield takeEvery('GO_TO', goTo);
    yield takeEvery('CHANGE_FLOW', changeFlow);
}
