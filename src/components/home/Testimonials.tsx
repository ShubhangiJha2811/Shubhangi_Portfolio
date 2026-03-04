import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Infosys Springboard',
      role: 'AI Internship Program',
      content: 'Demonstrated exceptional skills in machine learning and full-stack development. Successfully delivered a complex real estate valuation system with impressive accuracy.',
      avatar: '🤖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'CyberGyan C-DAC Noida',
      role: 'Cybersecurity Project Trainee',
      content: 'Excellent grasp of cybersecurity fundamentals and ethical hacking concepts. Demonstrated strong analytical skills in networking, operating systems, and hands-on security tools like Nmap and Wireshark.',
      avatar: '🔒',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Csharptek',
      role: 'Software Development Internship',
      content: 'Quick learner with strong problem-solving abilities. Contributed significantly to multiple projects and showed great teamwork and professional discipline.',
      avatar: '💻',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">What People Say</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 mt-2">
            Testimonials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Feedback</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from mentors and organizations I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-6xl text-gray-200 group-hover:text-gray-300 transition-colors">
                "
              </div>

              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                {testimonial.avatar}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.color}`}>
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>

              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;