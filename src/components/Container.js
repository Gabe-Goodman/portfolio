import React from 'react';
import { ContainerWrapper } from '../elements';
import { Nav, Footer } from '../components';
import { AboutMe, Resume, Contact } from './Links';

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {/* <AboutMe /> */}
      <Resume />
      <Contact />
      {children}
      <Footer />
    </ContainerWrapper>
  );
};
