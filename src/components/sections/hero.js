import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;

  h1 {
    margin: 0 0 20px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    color: var(--lightest-slate);
    line-height: 1.1;
    font-size: clamp(2.5rem, 5vw + 2rem, 4rem);

    @media (max-width: 480px) {
      font-size: clamp(2rem, 4vw + 2rem, 3rem);
    }
  }

  h3 {
    margin: 0 0 30px;
    color: var(--slate);
    font-size: clamp(1.6rem, 5vw, 2rem);
    font-weight: 400;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
    color: var(--white);
    letter-spacing: 0.5px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  flex: 1;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const one = <h1>Hi, I am</h1>;
  const two = <h2>Abdullah Anwar</h2>;
  const three = <h3>A Full Stack Developer</h3>;
  const four = (
    <p>
      A passionate Full Stack Developer with expertise in building robust and scalable web
      applications. Skilled in both frontend and backend technologies, adept at crafting efficient
      databases, APIs, and user interfaces. Experienced in deploying applications and optimizing for
      performance and security.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <div style={{ flex: 1 }}>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <>
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
                <>
                  {item === three && (
                    <StyledPic className="center-pic">
                      <div className="wrapper">
                        <Img
                          fluid={data.avatar.childImageSharp.fluid}
                          alt="Avatar"
                          className="img"
                        />
                      </div>
                    </StyledPic>
                  )}
                </>
              </>
            ))}
        </TransitionGroup>
      </div>

      <StyledPic className="side-pic">
        <div className="wrapper">
          <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
        </div>
      </StyledPic>
    </StyledHeroSection>
  );
};

export default Hero;
