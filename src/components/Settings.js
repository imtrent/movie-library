import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  body {
    @import url('https://rsms.me/inter/inter.css');
    font-family: 'Inter', sans-serif;
    a {
      text-decoration: none;
    }
  }
`;

export const colors = {
    primary: '',
    black: '#1A1D20',
    darkgray: '#656D78',
    lightgray: '#F6F6F6'
};

export const breakpoints = {
    small: '0px',
    medium: '667px',
    large: '1024px',
    xlarge: '1200px'
};
