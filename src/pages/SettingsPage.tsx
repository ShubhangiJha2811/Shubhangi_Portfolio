import React from 'react';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const SettingsPage = () => {
  const { theme, setTheme, animationSpeed, setAnimationSpeed, reducedMotion, setReducedMotion, fontSize, setFontSize } = useTheme();

  const themes = [
    {
      id: 'default',
      name: 'Default',
      description: 'Purple & Pink gradient theme',
      preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🎨'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      description: 'Easy on the eyes',
      preview: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      icon: '🌙'
    },
    {
      id: 'light',
      name: 'Light Mode',
      description: 'Clean and bright',
      preview: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      icon: '☀️'
    },
    {
      id: 'ocean',
      name: 'Ocean',
      description: 'Blue & Teal vibes',
      preview: 'linear-gradient(135deg, #667eea 0%, #06b6d4 100%)',
      icon: '🌊'
    },
    {
      id: 'sunset',
      name: 'Sunset',
      description: 'Warm orange & red',
      preview: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
      icon: '🌅'
    },
    {
      id: 'forest',
      name: 'Forest',
      description: 'Green & Nature',
      preview: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      icon: '🌲'
    }
  ];

  const animationSpeeds = [
    { id: 'slow', name: 'Slow', description: 'Relaxed animations', duration: '1s' },
    { id: 'normal', name: 'Normal', description: 'Balanced speed', duration: '0.5s' },
    { id: 'fast', name: 'Fast', description: 'Quick transitions', duration: '0.2s' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Settings - Shubhangi Jha"
        description="Customize your viewing experience with themes, animations, and accessibility options."
        url="https://your-domain.com/settings"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Customize Your Experience</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 mt-2">
            Settings & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Preferences</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Personalize your viewing experience with themes, animations, and accessibility options
          </p>
        </div>

        {/* Theme Selection */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl mr-4">
              🎨
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Theme</h2>
              <p className="text-gray-600">Choose your preferred color scheme</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as any)}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 transform hover:-translate-y-2 ${
                  theme === t.id ? 'border-purple-500 ring-4 ring-purple-200' : 'border-gray-200'
                }`}
              >
                {/* Preview */}
                <div
                  className="w-full h-32 rounded-xl mb-4 shadow-inner"
                  style={{ background: t.preview }}
                ></div>

                {/* Info */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{t.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                  </div>
                  {theme === t.id && (
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-500">{t.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Animation Speed */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl mr-4">
              ⚡
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Animation Speed</h2>
              <p className="text-gray-600">Control the speed of transitions and animations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {animationSpeeds.map((speed) => (
              <button
                key={speed.id}
                onClick={() => setAnimationSpeed(speed.id as any)}
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  animationSpeed === speed.id ? 'border-blue-500 ring-4 ring-blue-200' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{speed.name}</h3>
                  {animationSpeed === speed.id && (
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-3">{speed.description}</p>
                <div className="text-xs text-gray-400">Duration: {speed.duration}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility Options */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl mr-4">
              ♿
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Accessibility</h2>
              <p className="text-gray-600">Options to improve your browsing experience</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Reduced Motion */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Reduce Motion</h3>
                  <p className="text-sm text-gray-600">Minimize animations for a calmer experience</p>
                </div>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    reducedMotion ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      reducedMotion ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Font Size */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Font Size</h3>
                <p className="text-sm text-gray-600">Adjust text size for better readability</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 transition-colors"
                >
                  A-
                </button>
                <div className="flex-1">
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Small</span>
                    <span className="font-bold text-purple-600">{fontSize}px</span>
                    <span>Large</span>
                  </div>
                </div>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 transition-colors"
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={() => {
              setTheme('default');
              setAnimationSpeed('normal');
              setReducedMotion(false);
              setFontSize(16);
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;