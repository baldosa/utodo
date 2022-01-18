import { configureStore } from '@reduxjs/toolkit'
import loggerMiddleware from '@middleware/logger';
import monitorReducerEnhancer from '@enhancers/monitorReducer';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers } from 'redux'
import { userReducer } from '@reducers/userReducer';
import { boardsReducer } from '@reducers/boardsReducer';
import { boardReducer } from '@reducers/boardReducer';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

  const reducers = combineReducers({
    board: boardReducer,
    user: userReducer,
    boards: boardsReducer
  });
  

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [monitorReducerEnhancer],
});

export default store;