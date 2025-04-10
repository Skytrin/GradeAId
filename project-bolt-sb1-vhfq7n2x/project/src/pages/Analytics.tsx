import React, { useState } from 'react';
import { Upload, BarChart2, FileText, Users, Book, CheckCircle, Award, Star } from 'lucide-react';

function Analytics() {
  const [activeSection, setActiveSection] = useState<'materials' | 'analytics'>('materials');
  const [selectedSubSection, setSelectedSubSection] = useState<string>('');

  const renderMaterialUploads = () => {
    return (
      <div className="space-y-6">
        <div 
          className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedSubSection('grading-scale')}
        >
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Upload Grading Scale</h3>
          </div>
          <p className="text-gray-600">Upload your course grading scale and assessment criteria</p>
          <div className="mt-4">
            <label className="block w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-indigo-500 transition-colors">
              <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <span className="text-sm text-gray-600">Drop files here or click to upload</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div 
          className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedSubSection('reference-materials')}
        >
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Upload Reference Materials</h3>
          </div>
          <p className="text-gray-600">Upload course materials, rubrics, and reference documents</p>
          <div className="mt-4">
            <label className="block w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-indigo-500 transition-colors">
              <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <span className="text-sm text-gray-600">Drop files here or click to upload</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div 
          className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedSubSection('student-assignments')}
        >
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Upload Student-Assignments</h3>
          </div>
          <p className="text-gray-600">Upload student assignments and submissions for analysis</p>
          <div className="mt-4">
            <label className="block w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-indigo-500 transition-colors">
              <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <span className="text-sm text-gray-600">Drop files here or click to upload</span>
              <input type="file" className="hidden" multiple />
            </label>
          </div>
        </div>
      </div>
    );
  };

  const renderAnalytics = () => {
    return (
      <div className="space-y-6">
        <div 
          className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedSubSection('feedback')}
        >
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Recommended Feedback</h3>
          </div>
          <p className="text-gray-600">AI-generated feedback based on assignment analysis</p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">Select an uploaded assignment to view recommended feedback</p>
          </div>
        </div>

        <div 
          className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedSubSection('score')}
        >
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Recommended Score</h3>
          </div>
          <p className="text-gray-600">Calculated score based on grading criteria and submission analysis</p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">Select an uploaded assignment to view recommended score</p>
          </div>
        </div>

        <div 
          className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setSelectedSubSection('grade')}
        >
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-yellow-500 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Recommended Letter Grade</h3>
          </div>
          <p className="text-gray-600">Suggested letter grade based on score and grading scale</p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">Select an uploaded assignment to view recommended grade</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="border-b pb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Material and Analytics</h1>
        <p className="text-gray-600">Upload materials and view AI-powered analysis</p>
      </div>

      <div className="flex space-x-4 border-b">
        <button
          className={`px-6 py-3 font-medium transition-colors ${
            activeSection === 'materials'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveSection('materials')}
        >
          <div className="flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Material Uploads
          </div>
        </button>
        <button
          className={`px-6 py-3 font-medium transition-colors ${
            activeSection === 'analytics'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveSection('analytics')}
        >
          <div className="flex items-center">
            <BarChart2 className="w-5 h-5 mr-2" />
            Analytics
          </div>
        </button>
      </div>

      <div className="mt-8">
        {activeSection === 'materials' ? renderMaterialUploads() : renderAnalytics()}
      </div>
    </div>
  );
}

export default Analytics;