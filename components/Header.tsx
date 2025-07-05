
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
        중학교 1학년 학습 과정
      </h1>
      <p className="mt-3 text-md md:text-lg text-slate-600">
        과목별로 어떤 내용을 배우는지 알아보세요.
      </p>
    </header>
  );
};

export default Header;
