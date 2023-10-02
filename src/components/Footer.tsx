import styled from 'styled-components';

const FooterContainer = styled.div`
     display: flex;
     position: fixed;
     align-items: center;
     background-color: transparent;
     bottom: 0%;
     margin-bottom: 20px;
     margin-left: 40px;
`;

const Text = styled.div`
   background-color: transparent;
`;

const Footer = () => {
  return (
    <FooterContainer>
             <Text>© 2023 Louis W. All rights reserved.</Text>
    </FooterContainer>
  )
}

export default Footer