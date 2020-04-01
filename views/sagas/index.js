import { all, fork } from "redux-saga/effects";
import watchUsersSagasAsync from "./user.sagas";
export default function* sagas() {
  yield all([
    fork(watchUsersSagasAsync)
  ]);
}
