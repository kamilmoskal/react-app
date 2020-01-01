import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import NextApp from 'next/app';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/utils/global-styles';
import { lightTheme, darkTheme, Theme } from 'src/utils/theme';
import createStore from 'src/store/store';
import NextNProgress from 'src/utils/nprogress';

interface AppState {
    isDarkTheme: boolean;
    theme: Theme;
}

interface AppProps {
    Component: React.Component;
    store: Store;
}

class App extends NextApp<AppProps, AppState> {
    state = {
        isDarkTheme: false,
        theme: lightTheme,
    }

    static async getInitialProps({ Component, ctx }: any) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    toggleTheme = () => this.setState((prevState: AppState) => ({
        isDarkTheme: !prevState.isDarkTheme,
        theme: prevState.isDarkTheme ? lightTheme : darkTheme,
    }))

    render() {
        const { theme } = this.state;
        const { Component, pageProps, store } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <NextNProgress />
                <GlobalStyle />
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
                <button onClick={this.toggleTheme}>asd</button>
            </ThemeProvider>
        )
    }
}

export default withRedux(createStore)(withReduxSaga(App));