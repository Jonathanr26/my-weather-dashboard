import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} themeToggler={themeToggler} theme={theme} />
    </ThemeProvider>
  );
}

export default MyApp;
