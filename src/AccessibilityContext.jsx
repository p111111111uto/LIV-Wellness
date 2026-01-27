import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const defaultSettings = {
  fontSize: 1,
  highContrast: false,
  textSpacing: false,
  pauseAnimations: false,
  dyslexiaFont: false,
  largeCursor: false,
};

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('a11ySettings');
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    localStorage.setItem('a11ySettings', JSON.stringify(settings));

    const root = document.documentElement;
    root.style.setProperty('--a11y-font-scale', settings.fontSize);

    document.body.classList.toggle('a11y-high-contrast', settings.highContrast);
    document.body.classList.toggle('a11y-text-spacing', settings.textSpacing);
    document.body.classList.toggle('a11y-pause-animations', settings.pauseAnimations);
    document.body.classList.toggle('a11y-dyslexia-font', settings.dyslexiaFont);
    document.body.classList.toggle('a11y-large-cursor', settings.largeCursor);

  }, [settings]);

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetAll = useCallback(() => {
    setSettings(defaultSettings);
  }, []);

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting, resetAll }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
