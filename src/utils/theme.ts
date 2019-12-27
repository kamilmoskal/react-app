import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const lightTheme = {
    all: {
        borderRadius: '0.5rem',
    },
    main: {
        color: '#FAFAFA',
        textColor: '#212121',
        bodyColor: '#FFF',
    },
    secondary: {
        color: 'blue',
    },
};

export const darkTheme: Theme = {
    all: { ...lightTheme.all },
    main: {
        color: '#212121',
        textColor: '#FAFAFA',
        bodyColor: '#424242',
    },
    secondary: {
        color: 'red',
    },
};

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;