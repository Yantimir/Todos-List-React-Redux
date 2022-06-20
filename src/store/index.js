import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"; // https://www.npmjs.com/package/redux-persist
import storage from "redux-persist/lib/storage";

import todoReducer from "./todoSlice";

const rootReduser = combineReducers({
    todos: todoReducer,
});

const persistConfig = {
    key: "todosList",
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;