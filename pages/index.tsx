import { NextPage, NextPageContext, NextComponentType } from 'next';
import { connect } from 'react-redux';
import { Store } from 'redux';
import { Store as RootStore } from 'src/store/rootReducer';
import { loadData } from 'src/store/test/actions';
import Home, { HomeProps } from 'src/pages/Home/Home';

const IndexPage: NextPage<HomeProps> = Home;

interface IndexPageContext extends NextPageContext {
    store: Store,
}

IndexPage.getInitialProps = async ({ req, store }: IndexPageContext) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    store.dispatch(loadData());
    const { clock: { test, data } }: RootStore = store.getState();

    return { userAgent, test, data };
};

export default IndexPage;