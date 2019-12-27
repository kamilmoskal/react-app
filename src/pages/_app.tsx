import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'src/utils/global-styles'
import { lightTheme, darkTheme, Theme } from 'src/utils/theme'

interface AppState {
    isDarkTheme: boolean;
    theme: Theme;
}

export default class App extends NextApp<AppState> {
    state = {
        isDarkTheme: false,
        theme: lightTheme,
    }

    toggleTheme = () => this.setState((prevState: AppState) => ({
        isDarkTheme: !prevState.isDarkTheme,
        theme: prevState.isDarkTheme ? lightTheme : darkTheme,
    }))

    render() {
        const { theme } = this.state;
        const { Component, pageProps } = this.props;


        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
                <button onClick={this.toggleTheme}>asd</button>
            </ThemeProvider>
        )
    }
}