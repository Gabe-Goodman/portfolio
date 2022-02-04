import React from 'react';
import { ProPicWrapper } from '../elements';
import proPic from '../images/proPic.png';

export const ProPic = ({ children }) => {
  return (
    <ProPicWrapper>
      <img
        className="proPic"
        src={proPic}
        style={{
          height: '200px',
          borderRadius: '50%',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '-30%',
          marginBottom: '5%',
          backgroundColor: '#fff',
          padding: '6px',
          zIndex: 1000,
        }}
      />
    </ProPicWrapper>
  );
};
