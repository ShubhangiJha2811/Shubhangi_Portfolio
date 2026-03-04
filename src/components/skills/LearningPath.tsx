import React from 'react';

const LearningPath = () => {
  const currentlyLearning = [
    {
      topic: 'Advanced Machine Learning',
      progress: 75,
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      topic: 'Cloud Architecture (AWS)',
      progress: 60,
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      topic: 'Advanced Cybersecurity',
      progress: 70,
      icon: '🔒',
      color: 'from-red-500 to-pink-500'
    },
    {
      topic: 'System Design',
      progress: 55,
      icon: '🏗️',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const futureGoals = [
    {
      goal: 'Master Kubernetes & DevOps',
      icon: '🚀',
      color: 'from-blue-500 to-purple-500'
    },
    {
      goal: 'Deep Learning Specialization',
      icon: '🧠',
      color: 'from-pink-500 to-red-500'
    },
    {
      goal: 'Blockchain Development',
      icon: '⛓️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      goal: 'Mobile App Development (Flutter)',
      icon: '📱',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Continuous Growth</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Always learning, always growing - my path to mastery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Currently Learning */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="text-3xl mr-3">📚</span>
              Currently Learning
            </h3>
            <div className="space-y-6">
              {currentlyLearning.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-md`}>
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-900">{item.topic}</h4>
                    </div>
                    <span className={`text-lg font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                      {item.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 relative overflow-hidden`}
                      style={{ width: `${item.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              Future Goals
            </h3>
            <div className="space-y-4">
              {futureGoals.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      {item.goal}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl">
          <div className="text-6xl mb-6">💡</div>
          <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4">
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
          </blockquote>
          <p className="text-purple-200 text-lg">- Brian Herbert</p>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;