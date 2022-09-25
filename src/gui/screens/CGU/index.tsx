import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../components/common';
import Marginer from '../../components/marginer';
import {
  ContentPageContainer,
  InnerPageContainer,
  PageContainer
} from '../../components/pageContainer';

const CGUContentContainer = styled(ContentContainer)`
  text-align: justify;

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const CGU = (): ReactElement => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <ContentPageContainer coloredBackground>
          <ContentContainer>
            <h1>Conditions générales d&apos;utilisation</h1>
          </ContentContainer>
        </ContentPageContainer>
        <ContentPageContainer>
          <CGUContentContainer>
            <p>En cours de rédaction...</p>
          </CGUContentContainer>
          <Marginer direction="vertical" margin="2em" />
        </ContentPageContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default CGU;
