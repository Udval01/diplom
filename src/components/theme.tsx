import * as _ from 'lodash';
import React, { createContext } from 'react';
import { colors, ColorTypes } from '../theme';

const mapRoleToText = {
    success: colors.green.main,
    primary: colors.white.main,
    info: colors.gray[40],
    error: colors.red.main,
    secondary: colors.black.main,
    tertiary: colors.gray[30],
    gray50: colors.gray[50],
    gray40: colors.gray[40],
    black: colors.black.main,
};

export const mapRoleToTextColor = (role) => {
    return _.get(mapRoleToText, role);
};
export const DEFAULT = {
    baseSpace: 5,
    colors,
};

export const ThemeContext = createContext(DEFAULT);
export const Theme = ({ children }) => {
    return (
        <ThemeContext.Provider value={DEFAULT}>
            {children}
        </ThemeContext.Provider>
    );
};
