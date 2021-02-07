//import { delay } from 'redux-saga'; // Old-Version
import { takeEvery, takeLatest, put, delay } from 'redux-saga/effects';


function* ageUpAsync(){
	console.log('=== Redux Saga ===');
	yield delay(1000);
	yield put({type:'AGE_UP_ASYNC',myage:1});
}

export function* watchAgeUp(){
	//yield takeEvery('AGE_UP',ageUpAsync);
	yield takeLatest('AGE_UP',ageUpAsync);
}
