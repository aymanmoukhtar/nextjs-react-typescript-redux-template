import * as React from 'react'
import Head from 'next/head'
import { THomeState } from '../types/home';
import { homeReducer } from '../reducers/home';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

export type TGlobalState = {
    home: THomeState
};

const rootReducer = combineReducers({
    home: homeReducer
});

const store = createStore(rootReducer);

function withLayout<T>(Component: React.ComponentType<T>) {
    return (props: T) => (
        <Provider store={store}>
            <div style={layoutStyle}>
                <Head>
                    <title>NextJS Template</title>
                </Head>
                <Component {...props} />
            </div>
        </Provider>
    );
};

export default withLayout;