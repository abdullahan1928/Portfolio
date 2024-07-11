import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';

const StyledAboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    justify-content: center;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  p {
    color: var(--light-white);
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    width: 100%;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: var(--green);
      border: 1px solid var(--green);
      padding: 20px;
      border-radius: 50%;

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--light-white);
      }

      svg {
        width: 20px;
        height: 20px;
      }

      &:first-of-type {
        margin-right: 20px;
      }
    }
  }

  .experience {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;

      h4 {
        color: var(--green);
        font-size: 36px;
      }

      p {
        color: var(--light-white);
      }
    }
  }

  button {
    ${({ theme }) => theme.mixins.bigButton};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi, I'm Abdullah Anwar, a passionate full-stack software developer based in Islamabad,
              Pakistan. I thrive on crafting exceptional digital experiences, from sleek websites to
              complex applications. My mission is to deliver pixel-perfect, high-performance
              solutions that leave a lasting impact.
            </p>

            {/* <p>
              With a strong focus on system design and scalability, I excel in building robust,
              large-scale applications. I've gained invaluable experience working both independently
              as a freelancer and collaboratively in diverse teams. This journey has equipped me
              with a deep understanding of engineering principles and a knack for tackling
              challenging projects.
            </p> */}

            <p>
              Having graduated from&nbsp;
              <a href="https://nust.edu.pk/">NUST</a>, I've had the privilege to contribute to
              engineering, development, and research initiatives at various companies. This has
              exposed me to a wide array of captivating projects, fueling my passion for innovation
              and continuous learning.
            </p>
          </div>
        </StyledText>

        <div>
          <StyledLinks>
            <div className="social">
              <a href="https://github.com/abdullahan1928" aria-label="GitHub">
                <Icon name="GitHub" />
                {/* <p>Github</p> */}
              </a>
              <a href="https://www.linkedin.com/in/abdullahan1928" aria-label="Linkedin">
                <Icon name="Linkedin" />
                {/* <p>Linkedin</p> */}
              </a>
            </div>
            <div className="experience">
              <div>
                <h4>2</h4>
                <p>Years Experience</p>
              </div>
              <div>
                <h4>10+</h4>
                <p>Completed Projects</p>
              </div>
            </div>
            <button onClick={() => window.open('path/to/your/cv.pdf', '_blank')}>
              <Icon name="Download" />
              <p> Download CV</p>
            </button>
          </StyledLinks>
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
