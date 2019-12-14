import React, { useState, useCallback } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { invert, isNil } from 'lodash';

import lightTheme from 'styles/themes/lightTheme';
import darkTheme from 'styles/themes/darkTheme';
import * as storageService from 'services/storageService';
import ThemeContext, { ThemeType } from './ThemeContext';

const THEME_KEY = 'THEME';

const THEME_KEY_MAPPINGS: { [key: string]: ThemeType } = {
  DARK: ThemeType.Dark,
  LIGHT: ThemeType.Light
};

export const THEME_MAPPINGS = {
  [ThemeType.Dark]: darkTheme,
  [ThemeType.Light]: lightTheme
};

const Theme: React.FC = ({ children }) => {
  const storedThemeKey = storageService.get(THEME_KEY);

  let initialTheme;

  if (!storedThemeKey || isNil(THEME_KEY_MAPPINGS[storedThemeKey])) {
    initialTheme = ThemeType.Dark;
  } else {
    initialTheme = THEME_KEY_MAPPINGS[storedThemeKey];
  }

  const [themeType, setThemeType] = useState<ThemeType>(initialTheme);

  const handleThemeChange = useCallback(
    (newThemeType: ThemeType) => {
      storageService.set(THEME_KEY, invert(THEME_KEY_MAPPINGS)[newThemeType]);

      setThemeType(newThemeType);
    },
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
