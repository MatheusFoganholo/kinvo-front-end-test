import { call, put, takeLatest } from 'redux-saga/effects';
import { axios } from '../../../services';
import { failData, fillData } from './actions';

const request = async () => {
  const data = await axios.get('/mock/getFixedIncomeClassData');
  return data;
};

export function* getApiData() {
  try {
    const {
      data: { data },
    } = yield call(request);
    yield put(fillData(data));
  } catch (error) {
    console.log(error);
    yield put(failData());
  }
}

export default takeLatest('@data/GET_REQUEST', getApiData);
