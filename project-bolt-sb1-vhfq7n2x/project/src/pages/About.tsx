import React from 'react';
import { CheckCircle, Award } from 'lucide-react';

function About() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About GradeAid</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering professors to focus on what matters most: research and meaningful student interaction
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At GradeAid, we understand that college professors' time is invaluable. Our mission is to
            streamline the grading process, allowing educators to dedicate more time to groundbreaking
            research, meaningful student interactions, and academic advancement. By leveraging
            cutting-edge AI technology, we transform hours of grading into minutes, ensuring
            consistency and fairness while maximizing your research potential.
          </p>
          <div className="space-y-4">
            {[
              'Reduce grading time by up to 75%',
              'Increase research productivity',
              'Maintain grading consistency',
              'Enhance work-life balance',
            ].map((item) => (
              <div key={item} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
            alt="Professor lecturing"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-4 rounded-lg shadow-xl">
            <Award className="w-8 h-8 mb-2" />
            <p className="font-semibold">Trusted by 1000+ professors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;