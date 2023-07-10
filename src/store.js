import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './store/reducers';


const persistConfig = {
    key: 'root', // Chiave di persistenza, può essere personalizzata
    storage, // Tipo di storage, ad esempio localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
