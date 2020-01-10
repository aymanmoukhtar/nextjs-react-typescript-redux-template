import { THomeState } from "../src/types";
import { homeInitialState, homeReducer } from "../src/reducers";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import Head from "next/head";

export type TGlobalState = {
    home: THomeState
};

const initialState = {
    home: homeInitialState
};

const rootReducer = combineReducers({
    home: homeReducer
});

const initStore = (state = initialState) => {
    return createStore(rootReducer, state, composeWithDevTools())
};

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Page = (props) => {
    const { Component, pageProps, store } = props;

    return (
        <Provider store={store}>
            <div style={layoutStyle}>
                <Head>
                    <title>NextJS Template</title>
                </Head>
                <Component {...pageProps} />
            </div>
        </Provider>
    );
};

Page.getInitialProps = async ({ Component, ctx }) => {
    return {
        pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
}

export default withRedux(initStore)(Page);

export {
    initStore
};