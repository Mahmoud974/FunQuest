// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Assurez-vous d'avoir défini vos reducers dans rootReducer

const store = configureStore({
  reducer: rootReducer,
});

export { store };
