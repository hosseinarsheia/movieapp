import React, {useCallback, useContext, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {lightTheme} from './lightTheme';
import {darkTheme} from './darkTheme';

type ThemeType = 'dark' | 'light';

interface ThemeContextValue {
  theme: typeof lightTheme | typeof darkTheme;
  themeType: ThemeType;
  isDarkTheme: boolean;
  toggleThemeType: () => void;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: lightTheme,
  themeType: 'light',
  isDarkTheme: false,
  setThemeType: () => {},
  toggleThemeType: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({children}: {children: React.ReactNode}) {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = useState<ThemeType>(colorScheme || 'light');

  const toggleThemeType = useCallback(() => {
    setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);
  const theme = useMemo(() => (isDarkTheme ? darkTheme : lightTheme), [isDarkTheme]);

  const values = useMemo(
    () => ({
      theme,
      themeType,
      isDarkTheme,
      setThemeType,
      toggleThemeType,
    }),
    [theme, themeType, isDarkTheme, setThemeType, toggleThemeType],
  );

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    </PaperProvider>
  );
}
