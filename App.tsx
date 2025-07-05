
import React, { useState } from 'react';
import Header from './components/Header';
import SubjectCard from './components/SubjectCard';
import SubjectDetail from './components/SubjectDetail';
import { SUBJECTS_DATA } from './constants/curriculum';
import { Subject } from './types';

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main className="container mx-auto px-4 py-6">
        <Header />
        
        {selectedSubject ? (
          <SubjectDetail subject={selectedSubject} onBack={handleGoBack} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SUBJECTS_DATA.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onSelect={handleSelectSubject}
              />
            ))}
          </div>
        )}
        
        <footer className="text-center mt-12 py-6 text-slate-500 text-sm">
            <p>&copy; 2024 중1 학습과정 안내. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
