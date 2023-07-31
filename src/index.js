import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Provider store={store}>
    <App />
  </Provider>,

);


//redux toolkit özet: store.js senin depondur,reducer'larını çekip ordan kullanırsın.
// xxxxSlice adlı js dosyası da reducerını tanımladığın yerdir
//useSelector ile state içindeki değeri çekersin
//useDispatch ise state'in actionlarını (fonksiyonlarını) çekip kullanırsın.

