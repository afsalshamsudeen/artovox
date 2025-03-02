import styled from "styled-components"

import Tomato from "../assets/tomato.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

    h1{
        margin: 0;
    }
    p{
        margin: 0;
        font-weight: 300;
        font-size: 12px;
        padding-top: 10px;
    }
`; 

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1{
        margin: 0;
        font-size: 28px;
        font-weight: 500;
        width: 400px;
        padding-top: 20px;
    }
    p{
        width: 350px;
        margin: 0;
        font-size: 16px;
        letter-spacing: 0.5px;
        align-self: center;
    }
`;
const ImageTag = styled.img`

    width: 280px;
    height: 280px;
    border-radius: 10px;
    align-self: center;
    padding-top: 50px;
    
`;

const HowItWorks = () => {
  return (
    <Container>
      <h1>How It Works</h1>
      <p>Turn your imagination into anything.</p>

      <Wrapper>
            <ImageTag src={Tomato}/>
            <Desc>
            <h1>Introducing the AI-Powered Text to Anything Generator</h1>
            <p>Turn simple words into stunning visuals, captivating videos, interactive elements, and more—all with the power of AI. Whether you are creating art, animations, or data-driven content, Text-to-Anything brings your ideas to life effortlessly.</p>
            <p>No design skills? No problem! Just type, and let AI handle the rest. From generating breathtaking images to crafting dynamic videos, the possibilities are endless. Start creating in seconds and watch your imagination take shape! </p>
            </Desc>
      </Wrapper>
    </Container>
  )
}

export default HowItWorks
