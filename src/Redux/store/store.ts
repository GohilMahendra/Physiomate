import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../actions/RootSaga';
import rootReducer from '../reducers/RootReducer';
import AuthReducer from '../reducers/AuthReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;