import React from 'react';
import { Subject, Topic, Example } from '../types';

interface SubjectDetailProps {
  subject: Subject;
  onBack: () => void;
}

const ExampleQuiz = ({ example }: { example: Example }) => {
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const isAnswered = selectedOption !== null;

    const handleSelectOption = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
    };

    return (
        <div className="mt-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h6 className="font-semibold text-sm text-slate-800">✏️ 확인 문제: {example.question}</h6>
            <div className="mt-3 space-y-2">
                {example.options.map((option, index) => {
                    const isCorrect = option === example.answer;
                    const isSelected = option === selectedOption;
                    
                    let buttonClasses = "w-full text-left p-2.5 text-sm border rounded-md transition-colors duration-200 disabled:cursor-not-allowed flex items-center";

                    if (isAnswered) {
                        if (isCorrect) {
                            buttonClasses += " bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold";
                        } else if (isSelected) {
                            buttonClasses += " bg-red-100 border-red-400 text-red-800 line-through";
                        } else {
                            buttonClasses += " bg-slate-100 text-slate-500 border-slate-200";
                        }
                    } else {
                        buttonClasses += " bg-white hover:bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-800";
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleSelectOption(option)}
                            disabled={isAnswered}
                            className={buttonClasses}
                        >
                            <span className="w-6 inline-block">
                              {isAnswered && isCorrect && '✔︎'}
                              {isAnswered && isSelected && !isCorrect && '✗'}
                            </span>
                            <span>{option}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};


const SubjectDetail: React.FC<SubjectDetailProps> = ({ subject, onBack }) => {
  const { name, description, icon: Icon, color, bgColor, curriculum } = subject;

  const renderTopic = (topic: Topic, index: number, semester: '1st' | '2nd') => (
    <li key={`${semester}-${index}`} className="pl-4">
      <h5 className={`font-bold text-lg ${semester === '1st' ? 'text-teal-700' : 'text-sky-700'}`}>{topic.title}</h5>
      <p className="text-slate-600 mt-1">{topic.description}</p>
      {topic.examples && topic.examples.length > 0 && (
        <div className="mt-4 space-y-3">
          {topic.examples.map((example, i) => (
            <ExampleQuiz key={i} example={example} />
          ))}
        </div>
      )}
    </li>
  );

  return (
    <div className="w-full animate-fade-in">
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-slate-600 hover:text-slate-900 font-semibold transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        과목 목록으로 돌아가기
      </button>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className={`p-4 rounded-xl ${bgColor} mr-5`}>
            <Icon className={`h-10 w-10 ${color}`} />
          </div>
          <div>
            <h2 className={`text-3xl font-bold ${color}`}>{name}</h2>
            <p className="text-slate-600 mt-1">{description}</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 pb-2">주요 학습 내용</h3>
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">1학기</h4>
              <ul className="space-y-6 pl-2 border-l-4 border-teal-200">
                {curriculum.firstSemester.map((topic, index) => renderTopic(topic, index, '1st'))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">2학기</h4>
              <ul className="space-y-6 pl-2 border-l-4 border-sky-200">
                {curriculum.secondSemester.map((topic, index) => renderTopic(topic, index, '2nd'))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;