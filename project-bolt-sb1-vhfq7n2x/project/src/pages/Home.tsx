import React, { useEffect, useState } from 'react';
import { Clock, Shield, BookOpen, Brain, CheckCircle } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-12 h-12 text-indigo-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "GradeAid has revolutionized my grading process. I now have more time for research and meaningful student interactions.",
      author: "Dr. Sarah Mitchell",
      position: "Professor of English Literature",
      university: "Stanford University"
    },
    {
      text: "The AI-powered feedback is remarkably accurate. It's like having a reliable teaching assistant available 24/7.",
      author: "Prof. James Chen",
      position: "Mathematics Department Chair",
      university: "MIT"
    },
    {
      text: "Since implementing GradeAid, I've reduced my grading time by 70%. The consistency in feedback is outstanding.",
      author: "Dr. Emily Rodriguez",
      position: "Associate Professor of Physics",
      university: "UC Berkeley"
    },
    {
      text: "The mathematical solution analysis is incredibly precise. It's transformed how I grade complex problem sets.",
      author: "Prof. Michael Thompson",
      position: "Engineering Department",
      university: "Georgia Tech"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-8 rounded-xl shadow-lg mb-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative h-48 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-1000 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-xl italic mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-indigo-200">{testimonial.position}</div>
              <div className="text-indigo-300 text-sm">{testimonial.university}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const competitors = [
    {
      name: 'GradeAid',
      features: [
        'AI-powered grading assistance',
        'Instant feedback generation',
        'Batch assignment processing',
        'Research time tracking',
        'Mobile app support',
        'Integration with LMS',
      ],
      price: '$9.99/month',
      highlight: true,
    },
    {
      name: 'GradeBook Pro',
      features: [
        'Basic grade tracking',
        'Manual feedback entry',
        'Single assignment processing',
        'No time tracking',
        'Web only',
        'Limited integrations',
      ],
      price: '$14.99/month',
      highlight: false,
    },
    {
      name: 'StudyTracker',
      features: [
        'Grade tracking',
        'Basic feedback templates',
        'No batch processing',
        'No time tracking',
        'Web only',
        'No integrations',
      ],
      price: '$12.99/month',
      highlight: false,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your AI-powered assistant for efficient and accurate grading
        </p>
      </div>

      <TestimonialCarousel />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={Clock}
          title="Lightning Fast"
          description="Grade assignments in minutes, not hours. Our AI processes both essays and mathematical solutions rapidly."
        />
        <FeatureCard
          icon={Brain}
          title="Intelligent & Reliable"
          description="Trusted AI technology ensures consistent, accurate grading and meaningful feedback."
        />
        <FeatureCard
          icon={BookOpen}
          title="Easy to Use"
          description="Intuitive interface designed for professors, with seamless integration into your workflow."
        />
        <FeatureCard
          icon={Shield}
          title="Secure & Private"
          description="Enterprise-grade security ensures your data and student information stays protected."
        />
      </div>

      <div className="border-t pt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Comparison of Competitors
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {competitors.map((competitor) => (
            <div
              key={competitor.name}
              className={`rounded-xl p-6 ${
                competitor.highlight
                  ? 'bg-indigo-50 border-2 border-indigo-500'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{competitor.name}</h3>
              <ul className="space-y-3 mb-6">
                {competitor.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <CheckCircle
                      className={`w-5 h-5 mr-2 ${
                        competitor.highlight ? 'text-indigo-500' : 'text-gray-400'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-gray-900">{competitor.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;