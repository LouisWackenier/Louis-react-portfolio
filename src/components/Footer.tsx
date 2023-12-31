import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
     display: inline-block;
     position: fixed;

     background-color: transparent;

     bottom: 0%;
     width: 90vw;

     margin-bottom: 20px;
     margin-left: 40px;
`;

const TwitterIconContainer = styled.div`
    padding-left: 5px;
    cursor: pointer;
`;

const LinkedInIconContainer = styled.div`
   padding-left: 5px;
   cursor: pointer;
`;

const GitHubIconContainer = styled.div`
   padding-left: 5px;
   cursor: pointer;
`;

const Text = styled.div`
   background-color: transparent;
`;

const Socials = styled.div`
   background-color: transparent;
   display: flex;
`;

const Footer = () => {
  return (
      <FooterContainer>
              <Text>© 2023 Louis W. All rights reserved.</Text>
              <Socials>My Socials 
                <TwitterIconContainer>
                   <Link to="https://twitter.com/LouisWDev">
                      <TwitterIcon />
                   </Link>
                </TwitterIconContainer>

                <LinkedInIconContainer>
                     <Link to="https://www.linkedin.com/in/louis-wackenier-37463b255/">
                       <LinkedInIcon />
                     </Link>
                </LinkedInIconContainer>

                <GitHubIconContainer>
                   <Link to="https://github.com/LouisWackenier">
                      <GitHubIcon/>
                   </Link>
                </GitHubIconContainer>
              </Socials>
      </FooterContainer>
  )
}

export default Footer;