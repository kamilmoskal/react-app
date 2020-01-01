import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { Store as RootStore } from 'src/store/rootReducer';
import { loadData } from 'src/store/test/actions';
import Home from 'src/pages/Home/Home';

const IndexPage: NextPage = Home;

interface IndexPageContext extends NextPageContext {
    store: Store;
    isServer: boolean;
}

IndexPage.getInitialProps = async ({ req, store, isServer }: IndexPageContext) => {
    const { clock: { data } }: RootStore = store.getState();

    if (!data) {
        store.dispatch(loadData());
    }

    return { isServer };
};

export default IndexPage;