import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import Image from '../images/image.jpg';
// import ParticlesBg from '../components/ParticlesBg';
import './index.css';
import Skills from '../components/sections/skills';

const StyledMainContainer = styled.main`
  counter-reset: section;
  background-color: var(--dark-navy);
  // background-image : url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    {/* <ParticlesBg /> */}
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Skills />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
