import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaretAnimation = keyframes`
  from, to { border-color: transparent }
  50% { border-color: rgb(0, 68, 255); }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 50px;
  white-space: nowrap;
  overflow: hidden;
  border-right: .15em solid rgb(0, 24, 2);
  animation: ${typingAnimation} 3.5s steps(40, end),
             ${blinkCaretAnimation} 0.75s step-end infinite;
`;

const SubText = styled.div`
  font-size: large;
`;

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Adjust the delay to match the cursor animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <div>
        <Text>
          {showText ? 'Welcome to my website' : ''}
        </Text>
        <SubText>
          My name is Louis and I am a fullstack developer
        </SubText>
      </div>
    </Container>
  );
};

export default Home;
