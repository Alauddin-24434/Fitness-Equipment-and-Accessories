import React from 'react';

interface SectionTitleProps {
  text: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, className }) => {
  return (
    <h2 className={`text-2xl font-semibold mb-6 text-center ${className ? className : ''}`}>
      {text}
    </h2>
  );
};

export default SectionTitle;
