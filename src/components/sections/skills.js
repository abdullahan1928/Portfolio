import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 20px;

  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .section {
    width: 100%;
    margin-bottom: 40px;
  }

  .section-heading {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    width: fit-content;
    margin: 10px auto;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, #0a192f, #64ffda);
      position: absolute;
      bottom: -4px;
    }
  }
`;

const StyledListItem = styled.div`
  background-color: #0a192f; /* Dark navy */
  color: #fff; /* White text */
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  flex: 1 1 200px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #112240; /* Light navy */
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = {
    'Programming Languages': ['JavaScript', 'Python', 'TypeScript'],
    'Frontend Technologies': [
      'ReactJS',
      'Angular',
      'Next.js',
      'CSS',
      'SCSS',
      'Tailwind CSS',
      'Material UI',
      'Angular Material UI',
      'ShadcnUI',
    ],
    'Backend Technologies': [
      'Node.js',
      'NestJS',
      'Express.js',
      'Flask',
      'AWS S3',
      'SQL',
      'MongoDB',
      'Firebase',
      'Supabase',
    ],
    'Tools & Platforms': ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'Netlify', 'GitHub'],
  };

  return (
    <StyledAboutSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Skills</h2>

      <div className="inner">
        {Object.keys(skills).map((category, index) => (
          <div className="section" key={index}>
            <h3 className="section-heading">{category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {skills[category].map((skill, i) => (
                <StyledListItem key={i}>{skill}</StyledListItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledAboutSection>
  );
};

export default Skills;
