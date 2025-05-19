import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; // נתיב לחנות שלך
import App from './App'; // רכיב האפליקציה שלך

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
<<<<<<< HEAD
);

=======
);
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
