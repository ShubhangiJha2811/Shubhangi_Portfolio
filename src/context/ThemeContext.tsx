import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'default' | 'dark' | 'light' | 'ocean' | 'sunset' | 'forest';
type AnimationSpeed = 'slow' | 'normal' | 'fast';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  animationSpeed: AnimationSpeed;
  setAnimationSpeed: (speed: AnimationSpeed) => void;
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'default';
  });

  const [animationSpeed, setAnimationSpeed] = useState<AnimationSpeed>(() => {
    const saved = localStorage.getItem('animationSpeed');
    return (saved as AnimationSpeed) || 'normal';
  });

  const [reducedMotion, setReducedMotion] = useState(() => {
    const saved = localStorage.getItem('reducedMotion');
    return saved === 'true';
  });

  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fontSize');
    return saved ? parseInt(saved) : 16;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('animationSpeed', animationSpeed);
    document.documentElement.setAttribute('data-animation-speed', animationSpeed);
  }, [animationSpeed]);

  useEffect(() => {
    localStorage.setItem('reducedMotion', reducedMotion.toString());
    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [reducedMotion]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize.toString());
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        animationSpeed,
        setAnimationSpeed,
        reducedMotion,
        setReducedMotion,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};