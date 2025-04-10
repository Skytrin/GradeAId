import React from 'react';
import { 
  CheckCircle2, 
  Scale, 
  Database,
  Search,
  Clock,
  Settings,
  Files
} from 'lucide-react';

function FeatureSection({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-8 py-16 scroll-mt-16">
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center">
        <Icon className="w-10 h-10 text-indigo-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Overview</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your grading workflow with powerful, intelligent features
        </p>
      </div>

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.05),_transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Features of Service</h2>
          
          <div className="divide-y divide-gray-100">
            <FeatureSection
              icon={CheckCircle2}
              title="Specific Prompt Grading"
              description="Grade assignments based on specifically desired prompts and criteria, ensuring precise evaluation for your unique requirements. Our advanced AI technology understands context and nuance, making it possible to grade according to your exact specifications."
            />
            
            <FeatureSection
              icon={Scale}
              title="Smart Grade Recommendations"
              description="Receive intelligent grade recommendations based on your defined rubric and grading scale, maintaining consistency across all evaluations. The system learns from your grading patterns to provide increasingly accurate suggestions while maintaining your academic standards."
            />
            
            <FeatureSection
              icon={Database}
              title="Local & Secure Processing"
              description="All processing happens locally on your device, ensuring complete data security and privacy of your academic materials. Your sensitive information never leaves your system, providing peace of mind while maintaining high performance."
            />
            
            <FeatureSection
              icon={Search}
              title="Reliable Source Control"
              description="Uses only your provided materials for grading, avoiding unreliable internet sources and maintaining academic integrity. This ensures that all evaluations are based solely on approved course materials and your specific grading criteria."
            />
            
            <FeatureSection
              icon={Clock}
              title="Rapid Processing"
              description="Quickly scan and process large bodies of text without lengthy buffering times, saving valuable research hours. Our optimized algorithms handle complex assignments efficiently, allowing you to focus more on teaching and less on administrative tasks."
            />
            
            <FeatureSection
              icon={Settings}
              title="Adjustable Grading System"
              description="Customize rubrics and grading scales to match your specific requirements and academic standards. The flexible system adapts to your needs, whether you're grading essays, mathematical problems, or scientific reports."
            />
            
            <FeatureSection
              icon={Files}
              title="Broad Format Support"
              description="Seamlessly work with multiple file formats including PDF, Excel, Word, JPEG, and TXT files for maximum flexibility. No matter how your students submit their work, GradeAid can process and analyze it effectively."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;