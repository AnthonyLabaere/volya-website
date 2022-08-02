import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function PageContainer(props: any) {
  return <PageWrapper>{props.children}</PageWrapper>
}

export const InnerPageContainer = styled.div<{ maxWidth?: number }>`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentPageContainer = styled.div<{ coloredBackground?: boolean | string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ coloredBackground, theme }) => {
    if (coloredBackground === undefined || coloredBackground === false) {
      return 'transparent'
    }
    if (coloredBackground === true) {
      return theme.backgroundColor
    }
    return coloredBackground
  }};
  padding: 10px;

  > * {
    max-width: ${({ theme }) => theme.deviceSizes.laptop};
  }
`
