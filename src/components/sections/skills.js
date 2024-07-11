import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import {
  JavascriptOriginal,
  PythonOriginal,
  TypescriptOriginal,
  ReactOriginal,
  AngularjsOriginal,
  NextjsOriginal,
  Css3Original,
  SassOriginal,
  TailwindcssPlain,
  MaterialuiOriginal,
  NodejsOriginal,
  NestjsPlain,
  ExpressOriginal,
  FlaskOriginal,
  AmazonwebservicesOriginalWordmark,
  MysqlOriginal,
  MongodbOriginal,
  FirebasePlain,
  DockerOriginal,
  KubernetesPlain,
  GitOriginal,
  // NetlifyOriginal,
  // VercelOriginal,
} from 'devicons-react';

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
  }
`;

const StyledListItem = styled.div`
  background-color: #0a192f;
  color: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 200px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #112240;
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = {
    'Programming Languages': [
      { name: 'JavaScript', icon: <JavascriptOriginal /> },
      { name: 'Python', icon: <PythonOriginal /> },
      { name: 'TypeScript', icon: <TypescriptOriginal /> },
    ],
    'Frontend Technologies': [
      { name: 'React', icon: <ReactOriginal /> },
      { name: 'Angular', icon: <AngularjsOriginal /> },
      { name: 'Next.js', icon: <NextjsOriginal /> },
      { name: 'CSS', icon: <Css3Original /> },
      { name: 'SCSS', icon: <SassOriginal /> },
      { name: 'Tailwind CSS', icon: <TailwindcssPlain /> },
      { name: 'Material UI', icon: <MaterialuiOriginal /> },
      {
        name: 'Angular Material UI',
        icon: (
          <svg viewBox="0 0 128 128">
            <path
              fill="#ffa726"
              d="M63.934.656 5.25 21.66l8.863 77.719 49.82 27.77 49.887-27.77 9.059-77.719Zm0 0"
            ></path>
            <path fill="#fb8c00" d="M63.934.656v126.492l49.886-27.77 9.059-77.718Zm0 0"></path>
            <path
              fill="#ffe0b2"
              d="m72.797 96.688-41.55-20.02 23.827-14.703L96.887 82.05Zm0 0"
            ></path>
            <path
              fill="#fff3e0"
              d="m72.797 81.262-41.55-20.086 23.827-14.637 41.813 20.086Zm0 0"
            ></path>
            <path fill="#fff" d="m72.797 65.84-41.55-20.09 23.827-14.703 41.813 20.086Zm0 0"></path>
          </svg>
        ),
      }, // replace with Angular Material UI icon if available
      {
        name: 'ShadcnUI',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        ),
      }, // replace with ShadcnUI icon if available
    ],
    'Backend Technologies': [
      { name: 'Node.js', icon: <NodejsOriginal /> },
      { name: 'NestJS', icon: <NestjsPlain /> },
      { name: 'Express.js', icon: <ExpressOriginal /> },
      { name: 'Flask', icon: <FlaskOriginal /> },
      { name: 'AWS S3', icon: <AmazonwebservicesOriginalWordmark /> },
      { name: 'SQL', icon: <MysqlOriginal /> }, // replace with generic SQL icon if available
      { name: 'MongoDB', icon: <MongodbOriginal /> },
      { name: 'Firebase', icon: <FirebasePlain /> },
      { name: 'Supabase', icon: <AngularjsOriginal /> }, // replace with Supabase icon if available
    ],
    'Tools & Platforms': [
      { name: 'Docker', icon: <DockerOriginal /> },
      { name: 'Kubernetes', icon: <KubernetesPlain /> },
      { name: 'AWS', icon: <AmazonwebservicesOriginalWordmark /> },
      {
        name: 'Vercel',
        icon: (
          <svg viewBox="0 0 128 128">
            <path d="M64.002 8.576 128 119.424H0Zm0 0"></path>
          </svg>
        ),
      },
      {
        name: 'Netlify',
        icon: (
          <svg viewBox="0 0 128 128">
            <path
              d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943l-.733.733Z"
              fill="#014847"
            ></path>
            <path
              d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"
              fill="#05bdba"
            ></path>
          </svg>
        ),
      },
      { name: 'GitHub', icon: <GitOriginal /> },
    ],
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
                <StyledListItem key={i}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      margin: '0 auto',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    {skill.icon}
                  </div>
                  {skill.name}
                </StyledListItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledAboutSection>
  );
};

export default Skills;
