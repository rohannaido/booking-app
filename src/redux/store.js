import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "booking",
    version: 1,
    storage,
  };

const initialState = {};

export const hotelSlice = createSlice({
  name: "hotelSearch",
  initialState,
  reducers: {
    saveSearch: (state, action) => {
        console.log("SAVE Hotel ", action.payload);
        state.value = action.payload;
    },
    clearSearch: (state) => {
        console.log("SIGN OUT REDUCER ");
        state.value = {};
    }
  },
});

const persistedReducer = persistReducer(persistConfig, hotelSlice.reducer);

export const { saveSearch, clearSearch } = hotelSlice.actions;
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export let persistor = persistStore(store);