<<<<<<< HEAD
import Navigation from 'components/organisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.styles'
import React from 'react'

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    {children}
  </Wrapper>
)

MainTemplate.propTypes = {}

export default MainTemplate
=======
import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
>>>>>>> testing
