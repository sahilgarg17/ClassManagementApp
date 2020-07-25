import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';
class App extends Component {
    UNSAFE_componentWillMount() {
            const firebaseConfig = {
            apiKey: 'AIzaSyDWdXKdipGspGTmTeGtI8jfISH3akprT4Q',
            authDomain: 'manager-45d94.firebaseapp.com',
            databaseURL: 'https://manager-45d94.firebaseio.com',
            projectId: 'manager-45d94',
            storageBucket: 'manager-45d94.appspot.com',
            messagingSenderId: '611326940227',
            appId: '1:611326940227:web:c6a4e39f3c7cc3a2a970f6',
            measurementId: 'G-XJ5FYMS76T',
          };
          // Initialize Firebase
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store = {store}>
                <Router />
            </Provider>
        );
    }
}


export default App;