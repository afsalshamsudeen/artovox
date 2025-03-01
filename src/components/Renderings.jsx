import styled from "styled-components"

import Sample_Img1 from "../assets/street.jpg";
import Sample_Img2 from "../assets/cafe.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1, p{
        margin: 0;
        padding-top: 10px;
    }
`;



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 20px;
`;

const Button = styled.button`
        height: 40px;
        width: 170px;
        border-radius: 40px;
        background-color: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        border: 1px solid #222;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
      
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
        background-color: #7FFFD4;
        color: white;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
    padding-top: 15px;
`;

const RenderImgs = styled.img`

    height: 350px;
    width: 400px;
    border-radius: 10px;

`;

const PromptSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 10px;

    p{
        font-family: "Source Code Pro", monospace;
        font-style: italic;
        width: 400px;
        height : 350;
        background-color: #333333;
        color: #ffffff;
        padding: 6px 12px;
        border-radius: 8px;
        cursor: text;
    }
`;

const Renderings = () => {
  return (
    <Container>
        <h1>Creative Renderings</h1>
        <p>Where ideas take shape in media.</p>
      <Wrapper>
        <BtnWrapper>
            <Button>Image Generation</Button>
            <Button>Audio Generation</Button>
            <Button>3D Model</Button>
            <Button>Video Generation</Button>
        </BtnWrapper>

        <ImageWrapper>
            <RenderImgs src={Sample_Img1}/>
            <RenderImgs src={Sample_Img2}/>
        </ImageWrapper>

        <PromptSection>
            <p>A bustling city street filled with people walking, shopping, and chatting. Tall buildings, cozy cafes, and street vendors bring the scene to life.</p>
            <p>A warm and inviting café with people enjoying coffee and conversation. Soft lighting, wooden decor, and the aroma of fresh pastries fill the air.</p>
        </PromptSection>
        

      </Wrapper>
    </Container>
  )
}

export default Renderings

