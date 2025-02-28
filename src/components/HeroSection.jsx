
import styled from 'styled-components';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    h1{
        text-align: center;
        font-size: 50px;
        font-weight: 400;
    }
    p{
        width: 650px;
        word-break: break-word;
        text-align: center;
        font-weight: 300;
        font-size: 16px;
        white-space: normal; 
        overflow: visible; 
        text-overflow: clip; 
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
        padding-left: 10px;
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

const HeroSection = () => {
  return (
    <Container>
      <Wrapper>
        <h1 >Turn Text Into  <br /> <span>Anything,</span> in seconds.</h1>
        <p>Unleash your creativity with AI. Transform text into anything—stunning visuals, immersive audio, or even 3D models—in seconds. Just type and watch your ideas come to life.</p>
        <div>
            <p>Try Artoxox</p><ArrowOutwardIcon/>
        </div>
      </Wrapper>
    </Container>
  )
}

export default HeroSection
