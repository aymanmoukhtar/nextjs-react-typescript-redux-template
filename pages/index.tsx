import Home from '../src/components/Home/Home';
import { NextPage, } from 'next';
import { NextJSContext } from 'next-redux-wrapper';
import { getDataAsync } from '../src/actions';

const HomePage: NextPage = Home;

// This is where you dispatch actions to pre-fill needed data for page, before sending to the client
HomePage.getInitialProps = async ({ store }: NextJSContext) => {
    await getDataAsync(store.dispatch);
};

export default HomePage;