import { call, put, takeLatest, all } from "redux-saga/effects";
import { apiRequestGet, apiRequestPost } from "../utils/requestHelper"
import { LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_FULFILLED } from "../actions/user.actions";
import { DOMAIN_API } from "../constants/configUrl";

function* login(data) {
  try {
    const user = yield call(
      loginHandle.bind(this, data.user)
    );
    if (!user.error) {
      yield put({ type: LOGIN_USER_FULFILLED, user });
    } else {
      yield put({ type: LOGIN_USER_FAILED, error: user.error });
    }

  } catch (e) {
    yield put({ type: LOGIN_USER_FULFILLED, error: e });
  }
}


function loginHandle(user) {
  const url = `${DOMAIN_API}/login`;
  return apiRequestPost(url, JSON.stringify(user)).then(result => {
    return result;
  });
}

export default function* watchUsersSagasAsync() {
  yield all([
    takeLatest(LOGIN_USER, login),
  ]);
}