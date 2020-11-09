/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import styled from 'styled-components';

import { DetailContext } from '../appContexts';

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex: 5;
  justify-content: center;
`;

const Title = styled.h3`
  text-align: center;
  padding: 0 20px;
`;

const ThumbNailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  display: block;
  max-width: 300px;
  max-height: 200px;
  width: auto;
  height: auto;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => {
  const { entity } = useContext(DetailContext);
  return (
    <Container>
      {entity && (
        <>
          <Title>{entity.title}</Title>
          <ThumbNailWrapper>
            <Thumbnail src={entity.thumbnail} alt="thumbnail" />
          </ThumbNailWrapper>
          <Footer>
            <p>by ${entity.author}</p>
          </Footer>
        </>
      )}
    </Container>
  );
};
