import React, { createContext, ReactNode, useContext } from 'react';
import { colors } from './colors';

export const DEFAULT = {
    baseSpace: 4,
    colors,
};

export const ThemeContext = createContext(DEFAULT);
export const Theme = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeContext.Provider value={DEFAULT}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
