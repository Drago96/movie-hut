import React, { useState, useCallback } from 'react';
import { ThemeProvider } from '@material-ui/core';

import lightTheme from 'styles/themes/lightTheme';
import darkTheme from 'styles/themes/darkTheme';
import ThemeContext, { ThemeType } from './ThemeContext';

export const THEME_MAPPINGS = {
  [ThemeType.Dark]: darkTheme,
  [ThemeType.Light]: lightTheme
};

const Theme: React.FC = ({ children }) => {
  const [themeType, setThemeType] = useState(ThemeType.Dark);

  const handleThemeChange = useCallback(
    (newThemeType: ThemeType) => setThemeType(newThemeType),
    [setThemeType]
  );

  return (
    <ThemeProvider theme={THEME_MAPPINGS[themeType]}>
      <ThemeContext.Provider
        value={{ currentTheme: themeType, handleThemeChange }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
