import React from 'react';
import Particles from 'react-particles';
import { loadFirePreset } from 'tsparticles-preset-fire';
// import { loadFull } from 'tsparticles';
// import size updater from 'tsparticles/Utils/Particle/SizeUpdater';
// import { loadSizeUpdater } from 'tsparticles/Utils/Particle/SizeUpdater';

const ParticlesBg = () => {
  const options = {
    preset: 'fire',
  };

  const particlesInit = main => {
    loadFirePreset(main);
    // loadSizeUpdater(main);
  };

  const particlesLoaded = container => {
    // eslint-disable-next-line no-console
    console.log(container);
  };

  return <Particles options={options} init={particlesInit} loaded={particlesLoaded} />;
};

export default ParticlesBg;
