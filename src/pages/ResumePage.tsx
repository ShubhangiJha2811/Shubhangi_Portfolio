import React, { useState } from 'react';
import SEO from '../components/SEO';
import { trackDownload } from '../utils/analytics';

const ResumePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    { id: 'english', name: 'English', flag: '🇬🇧', file: 'Shubhangi_Jha_Resume_EN.pdf' },
    { id: 'hindi', name: 'हिंदी (Hindi)', flag: '🇮🇳', file: 'Shubhangi_Jha_Resume_HI.pdf' },
    { id: 'spanish', name: 'Español (Spanish)', flag: '🇪🇸', file: 'Shubhangi_Jha_Resume_ES.pdf' },
    { id: 'french', name: 'Français (French)', flag: '🇫🇷', file: 'Shubhangi_Jha_Resume_FR.pdf' },
    { id: 'german', name: 'Deutsch (German)', flag: '🇩🇪', file: 'Shubhangi_Jha_Resume_DE.pdf' },
    { id: 'japanese', name: '日本語 (Japanese)', flag: '🇯🇵', file: 'Shubhangi_Jha_Resume_JA.pdf' }
  ];

  const handleDownload = (language: string, fileName: string) => {
    trackDownload(`Resume - ${language}`);
    // Create a download link
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (fileName: string) => {
    window.open(`/${fileName}`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Resume - Shubhangi Jha"
        description="Download Shubhangi Jha's resume in multiple languages. Full Stack Developer, AI Enthusiast, and Cybersecurity Expert."
        url="https://your-domain.com/resume"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Professional Document</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 mt-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Resume</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            View or download my resume in your preferred language
          </p>
        </div>

        {/* Language Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Select Language</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === lang.id
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-200'
                }`}
              >
                <div className="text-4xl mb-3">{lang.flag}</div>
                <div className={`text-sm font-semibold ${selectedLanguage === lang.id ? 'text-white' : 'text-gray-900'}`}>
                  {lang.name}
                </div>
                {selectedLanguage === lang.id && (
                  <div className="absolute top-2 right-2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Resume Preview & Actions */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Preview Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Shubhangi Jha</h3>
                <p className="text-purple-100">Full Stack Developer | AI Enthusiast | Cybersecurity Expert</p>
              </div>
              <div className="text-6xl">
                {languages.find(l => l.id === selectedLanguage)?.flag}
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="p-8">
            <div className="bg-gray-50 rounded-2xl p-12 mb-8 min-h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600 text-lg font-semibold mb-2">Resume Preview</p>
                <p className="text-gray-500 text-sm">
                  {languages.find(l => l.id === selectedLanguage)?.name} version
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleView(languages.find(l => l.id === selectedLanguage)?.file || '')}
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Resume
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>

              <button
                onClick={() => handleDownload(
                  languages.find(l => l.id === selectedLanguage)?.name || '',
                  languages.find(l => l.id === selectedLanguage)?.file || ''
                )}
                className="group flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
                <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <div className="text-blue-600 mb-3">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Always Updated</h3>
            <p className="text-gray-600 text-sm">Resume is regularly updated with latest achievements and skills</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <div className="text-purple-600 mb-3">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Multiple Languages</h3>
            <p className="text-gray-600 text-sm">Available in 6 languages for global opportunities</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div className="text-green-600 mb-3">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Format</h3>
            <p className="text-gray-600 text-sm">ATS-friendly and professionally designed</p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-2xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong className="font-semibold">Note:</strong> Currently, only the English version is available. Other language versions will be added soon. Please check back later or contact me for specific language requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
