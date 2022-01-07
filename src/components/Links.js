import React from 'react';
import { Link } from 'gatsby';
import { AboutWrapper, ResumeWrapper, ContactWrapper } from '../elements';
import resumeFile from '../images/gabe-goodman-resume-software-engineer.pdf';

export const AboutMe = () => {
  return (
    <AboutWrapper>
      <Link
        to="/about"
        style={{ textDecoration: 'none' }}
        activeStyle={{
          fontWeight: 800,
        }}
      >
        About
      </Link>
    </AboutWrapper>
  );
};

export const Resume = () => {
  return (
    <ResumeWrapper>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={resumeFile}
        style={{ textDecoration: 'none' }}
      >
        Resume
      </a>
    </ResumeWrapper>
  );
};

export const Contact = () => {
  return (
    <ContactWrapper>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:goodman.g@northeastern.edu"
        style={{ textDecoration: 'none' }}
      >
        Contact
      </a>
    </ContactWrapper>
  );
};
