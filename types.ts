import { ComponentType } from 'react';

export interface Example {
  question: string;
  options: string[];
  answer: string;
}

export interface Topic {
  title: string;
  description: string;
  examples?: Example[];
}

export interface Subject {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  description: string;
  curriculum: {
    firstSemester: Topic[];
    secondSemester: Topic[];
  };
}