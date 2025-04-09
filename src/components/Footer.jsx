import styled from "styled-components"

import Logo from "../assets/art.png";
import Instagram from "../assets/social.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import { useEffect, useRef, useState } from "react";
const Container  = styled.div`
    width: 100%;
    height: 40px;
    color: #222;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: hidden;
    
    transition: transform 0.3s ease;
    transform: ${({ isHidden }) => (isHidden ? 'translateY(100%)' : 'translateY(0)')};
    z-index: 10
`;
const LWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      setIsAtBottom(scrolledToBottom);

      // Show footer if at bottom
      if (scrolledToBottom) {
        setIsHidden(false);
        return; // Don't run timeout
      }

      // Show while scrolling
      setIsHidden(false);

      // Hide after 500ms idle
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsHidden(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <Container isHidden={isHidden && !isAtBottom} isAtBottom={isAtBottom}>
      <InnerWrapper>

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
      </InnerWrapper>
    </Container>
  )
}

export default Footer
