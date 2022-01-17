import { combineReducers, createStore, applyMiddleware } from 'redux';
import { userReducer } from '@reducers/userReducer'
import { boardsReducer } from '@reducers/boardsReducer'
import { boardReducer } from '@reducers/boardReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '@middleware/logger';
import monitorReducerEnhancer from '@enhancers/monitorReducer';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = composeWithDevTools(middlewareEnhancer, monitorReducerEnhancer);

const rootReducer = combineReducers({
  board: boardReducer,
  user: userReducer,
  boards: boardsReducer,
})

const reducerInitializedStore = createStore(rootReducer, composedEnhancers)
if(process.env.NODE_ENV === "development") { 
  console.log(reducerInitializedStore.getState())
}
export default reducerInitializedStore
