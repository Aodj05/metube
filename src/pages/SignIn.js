import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: ${({ theme }) => theme.text};
`;

const SignIn = () => {
  return (
    <Container>SignIn</Container>
  )
}

export default SignIn;