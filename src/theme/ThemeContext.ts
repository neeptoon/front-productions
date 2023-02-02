import { createContext } from "react";

const defaultTheme = {}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export type ThemeContextProps = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const ThemeContext = createContext<ThemeContextProps>(defaultTheme)
