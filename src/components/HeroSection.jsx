
import styled from 'styled-components';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Sample_img1 from "../assets/tomato.jpg";
import Sample_img2 from "../assets/panda.jpg";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
      font-weight: 200;
      font-size: 12px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    h1{
        text-align: center;
        font-size: 50px;
        font-weight: 400;
    }
    p{
        width: 700px;
        word-break: break-word;
        text-align: center;
        font-weight: 300;
        font-size: 16px;
        white-space: normal; 
        overflow: visible; 
        text-overflow: clip;
        letter-spacing: 0.5px;
    }
    span{
        color: #7FFFD4;
    }
    div{
        height: 40px;
        width: 200px;
        border-radius: 40px;
        background-color: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        border: 1px solid #222;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
      
        padding: 7px 14px;
        cursor: pointer;

        &:hover {
        background-color: #7FFFD4;
        color: white;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
    }
    }
    div p{
        width: auto;
        white-space: nowrap;
        text-overflow: ellipsis;

    }
    span{
      font-style: italic;
      
    }
`;

const SampleSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    gap: 16px;
    overflow: visible;

`;
const RandomImages = styled.img`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    display: block;
    transition: transform 0.3s ease-in-out !important;
    &:hover{
      transform: scale(1.05);
    }
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <h1 >Turn Text Into  <br /> <span>Anything,</span> in seconds.</h1>
        <p>Unleash your creativity with AI. Transform text into anything—stunning visuals, immersive audio, or even 3D models—in seconds. Just type and watch your ideas come to life.</p>
        <div>
            <p onClick={() => navigate('/prompt')}>Try Artoxox</p><ArrowOutwardIcon/>
        </div>

        
      </Wrapper>
      <SampleSection>
          {Array(5).fill('').map((item, index)=>(
            <RandomImages src={index % 2 ===0 ? Sample_img1 : Sample_img2} key={index} width={70}/>
          ))}
        </SampleSection>
          <p>Generated images from Artovox</p>
    </Container>
  )
}

export default HeroSection
