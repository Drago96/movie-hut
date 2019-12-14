import { createContext } from 'react';

export enum ThemeType {
  Light,
  Dark
}

const DialogContext = createContext({
  currentTheme: ThemeType.Dark,
  handleThemeChange: (_: ThemeType) => {}
});

export default DialogContext;
