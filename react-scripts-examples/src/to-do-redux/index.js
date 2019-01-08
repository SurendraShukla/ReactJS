import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

class TodoRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );

    }
}

export default TodoRedux;
