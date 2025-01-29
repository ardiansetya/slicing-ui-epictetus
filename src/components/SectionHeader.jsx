import React, { Children } from 'react'

const SectionHeader = ({ children }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-10">{children}</h1>
    </div>
  );
};

export default SectionHeader
