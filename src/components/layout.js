import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Loader, Nav, Social, Email } from '@components';
import { GlobalStyle, theme } from '@styles';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const SkipToContentLink = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 18px 23px;
    outline: 0;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    overflow: auto;
    transition: var(--transition);
    z-index: 99;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  #content {
    background-color: var(--dark-navy);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
`;

const GoUpButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 75px;
  color: var(--white);
  border: none;
  padding: 20px;
  border-radius: 9999px;
  cursor: pointer;
  z-index: 999;
  transition: opacity 0.3s ease;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green-tint);

  &:hover {
    background-color: var(--green);
  }
`;

const ArrowUpIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--white);
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const [showGoUpButton, setShowGoUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowGoUpButton(true);
      } else {
        setShowGoUpButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoUpClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    history.replaceState({}, document.title, window.location.pathname);
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading]);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    handleExternalLinks();
  }, []);

  return (
    <>
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <SkipToContentLink href="#content">Skip to Content</SkipToContentLink>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                {/* <Footer /> */}
              </div>
            </StyledContent>
          )}

          <GoUpButton show={showGoUpButton} onClick={handleGoUpClick}>
            <ArrowUpIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2l10 10h-6v10h-8v-10h-6z" />
            </ArrowUpIcon>
          </GoUpButton>
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
