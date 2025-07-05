
import React from 'react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onSelect: (subject: Subject) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onSelect }) => {
  const { name, description, icon: Icon, color, bgColor } = subject;

  return (
    <div
      onClick={() => onSelect(subject)}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start"
    >
      <div className={`p-3 rounded-lg ${bgColor}`}>
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mt-4">{name}</h3>
      <p className="text-slate-600 mt-2 text-sm flex-grow">{description}</p>
    </div>
  );
};

export default SubjectCard;
