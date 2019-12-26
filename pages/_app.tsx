import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/global-styles'

const theme = {
    primary: 'green',
}

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props

        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}