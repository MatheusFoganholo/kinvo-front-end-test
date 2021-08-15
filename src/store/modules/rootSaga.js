import { all } from 'redux-saga/effects';
import data from './data/sagas';

export default function* rootSaga() {
  return yield all([data]);
}
