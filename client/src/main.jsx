import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import globalReducer from "./state/index.js";   // the reducer property of the globalSlice
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query';
import {api} from "./state/api.js";

// creating the redux toolkit store
const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault)=> getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
