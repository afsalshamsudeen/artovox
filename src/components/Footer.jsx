import styled from "styled-components"

import Logo from "../assets/art.png";
import Instagram from "../assets/social.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
const Container  = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 100px;
    color: #222;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;
const LWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 80px;
    gap: 10px;

    h2{

    }
    p{
        
    }
`;
const RWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-right: 80px;

`;
const FooterLogo = styled.img`
    height: 28px;
    width: 28px;
    background-color: #222;

`;
const FooterIcons = styled.img`
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 1px solid #222;
`;
const Footer = () => {
  return (
    <Container>
      <LWrapper>
        <FooterLogo src={Logo}/>
        <h2>Artovox</h2>
        <p>| </p>
        <p>All right reserved. Copyright @artovox</p>
      </LWrapper>

      <RWrapper>
        <FooterIcons src={Instagram}/>
        <FooterIcons src={Twitter}/>
        <FooterIcons src={Linkedin}/>
      </RWrapper>
    </Container>
  )
}

export default Footer
