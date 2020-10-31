/* eslint-disable comma-dangle */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    orange: '#e8836b',
    red: 'red',
    blue: 'blue'
  }
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
