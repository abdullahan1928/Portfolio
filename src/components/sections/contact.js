import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  ${({ theme }) => theme.mixins.boxShadow};

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    height: 4px;
    width: 5%;
    background-color: var(--green);
    box-shadow: 0 0 10px var(--green), 0 0 20px var(--green), 0 0 30px var(--green);
    z-index: -1;
    border-radius: 10px;
    animation: animateBefore 4s infinite linear;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    right: 0;
    height: 4px;
    width: 5%;
    background-color: var(--green);
    box-shadow: 0 0 10px var(--green), 0 0 20px var(--green), 0 0 30px var(--green);
    z-index: -1;
    border-radius: 10px;
    animation: animateAfter 4s infinite linear;
  }

  @keyframes animateBefore {
    0% {
      transform: rotate(0deg);
      top: 0;
      left: 0;
    }
    25% {
      transform: rotate(0deg);
      top: 0;
      left: 98%;
    }
    26% {
      transform: rotate(90deg);
      top: 0;
      left: 98%;
    }
    50% {
      transform: rotate(90deg);
      top: 100%;
      left: 98%;
    }
    51% {
      transform: rotate(180deg);
      top: 100%;
      right: 98%;
    }
    75% {
      transform: rotate(180deg);
      top: 100%;
      right: -3%;
      left: 0;
    }
    76% {
      transform: rotate(270deg);
      top: 100%;
      right: 0;
      left: -3%;
    }
    100% {
      transform: rotate(270deg);
      top: 0;
      right: 0;
      left: -3%;
    }
  }

  @keyframes animateAfter {
    0% {
      transform: rotate(0deg);
      right: 0;
      bottom: 0;
    }
    25% {
      transform: rotate(0deg);
      right: 98%;
      bottom: -5px;
    }
    26% {
      transform: rotate(90deg);
      right: 98%;
      bottom: 0;
    }
    50% {
      transform: rotate(90deg);
      left: -3%;
      right: 98%;
      bottom: 100%;
    }
    51% {
      transform: rotate(180deg);
      left: -3%;
      right: 98%;
      bottom: 100%;
    }
    75% {
      transform: rotate(180deg);
      right: -10px;
      bottom: 100%;
    }
    76% {
      transform: rotate(270deg);
      left: 98%;
      bottom: 100%;
    }
    100% {
      transform: rotate(270deg);
      left: 98%;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .desc {
    margin: 25px auto;
    padding: 25px;
    line-height: 1.5;
    color: var(--light-white);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    transition: background-color 0.5s, transform 0.5s;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--dark-navy);
      transform: translateY(-3px);
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What's Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p className="desc">
        My inbox is always open for any kind of tech or project discussion. Whether you have a
        question or just want to say hi, I'll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
