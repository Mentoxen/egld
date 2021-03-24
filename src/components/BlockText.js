import React from 'react';

const BlockText = ({children, hiddenOnMobile = false}) => {
  return (
    <div className={`colMd4 ${hiddenOnMobile ? 'hiddenOnMobile' : 'hiddenMdUp'}`}>
      {children}
    </div>
  );
};

export default BlockText;
