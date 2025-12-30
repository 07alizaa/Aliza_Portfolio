/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const PALETTES = {
  day: {
    sunset: {
      primary: '#FF5A36',
      bg: '#FFFCF7',
      text: '#1A1A1A',
      secondary: '#FFA41B',
      accent: '#FFD700',
    },
    misty: {
      primary: '#7C4DFF',
      bg: '#F8F9FF',
      text: '#2D3436',
      secondary: '#00D2FF',
      accent: '#9D4EDD',
    },
    earth: {
      primary: '#6B8E23',
      bg: '#F5F5DC',
      text: '#3E2723',
      secondary: '#A0522D',
      accent: '#CD853F',
    },
    minimal: {
      primary: '#000000',
      bg: '#FFFFFF',
      text: '#121212',
      secondary: '#424242',
      accent: '#757575',
    }
  },
  night: {
    cosmic: {
      primary: '#00D4FF',
      bg: '#0F0F1A',
      text: '#E2E2E2',
      secondary: '#9D4EDD',
      accent: '#FF6B6B',
    },
    neon: {
      primary: '#39FF14',
      bg: '#0D0D0D',
      text: '#FFFFFF',
      secondary: '#FF00FF',
      accent: '#00FFFF',
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('day'); // 'day' or 'night'
  const [mood, setMood] = useState('sunset'); // Current day mood or night mood

  useEffect(() => {
    const currentPalette = theme === 'day' ? PALETTES.day[mood] || PALETTES.day.sunset : PALETTES.night[mood] || PALETTES.night.cosmic;

    const root = document.documentElement;
    root.style.setProperty('--theme-primary', currentPalette.primary);
    root.style.setProperty('--theme-bg', currentPalette.bg);
    root.style.setProperty('--theme-text', currentPalette.text);
    root.style.setProperty('--theme-secondary', currentPalette.secondary);
    root.style.setProperty('--theme-accent', currentPalette.accent);

    root.classList.remove('day', 'night', 'dark');
    root.classList.add(theme);
    if (theme === 'night') root.classList.add('dark');
  }, [theme, mood]);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'day' ? 'night' : 'day';
      setMood(newTheme === 'day' ? 'sunset' : 'cosmic');
      return newTheme;
    });
  };

  const updateMood = (newMood) => {
    setMood(newMood);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      currentMode: theme,
      mood,
      toggleTheme,
      updateMood,
      palettes: PALETTES
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
