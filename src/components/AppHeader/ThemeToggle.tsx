import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { Brightness3, WbSunny } from '@material-ui/icons';

import ThemeContext, { ThemeType } from 'components/Theme/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { currentTheme, handleThemeChange } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (currentTheme === ThemeType.Dark) {
      handleThemeChange(ThemeType.Light);
    } else {
      handleThemeChange(ThemeType.Dark);
    }
  };

  return (
    <IconButton color="inherit" onClick={handleThemeToggle}>
      {currentTheme === ThemeType.Dark ? <WbSunny /> : <Brightness3 />}
    </IconButton>
  );
};

export default ThemeToggle;
