import { useState } from "react";
import styled from "styled-components";

import Sample_Img1 from "../assets/street.jpg";
import Sample_Img2 from "../assets/cafe.jpg";
import Audio_Img from "../assets/arc.jpg";
import ThreeDModel from "./ThreeDModel";
import SecondThreeDModel from "./SecondThreeDModel";

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
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px 10px;
    cursor: pointer;
  
    &:hover {
        background-color: #7FFFD4;
        color: white;
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

    p {
        font-family: "Source Code Pro", monospace;
        font-style: italic;
        width: 400px;
        background-color: #333333;
        color: #ffffff;
        padding: 6px 12px;
        border-radius: 8px;
        cursor: text;
    }
`;


const AudioWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
    padding-top: 15px; 

`;
const AudioImg = styled.img`
    height: 250px;
    width: 300px;
    border-radius: 10px;
`;
const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        width: 500px;
    }

`;

const Renderings = () => {
    const [selectedType, setSelectedType] = useState("image");

    const renderContent = () => {
        switch (selectedType) {
            case "image":
                return (
                    <>
                        <ImageWrapper>
                            <RenderImgs src={Sample_Img1} />
                            <RenderImgs src={Sample_Img2} />
                        </ImageWrapper>
                        <PromptSection>
                            <p>A bustling city street filled with people walking, shopping, and chatting...</p>
                            <p>A warm and inviting café with people enjoying coffee and conversation...</p>
                        </PromptSection>
                    </>
                );
            case "audio":
                return (
                    <>
                        <AudioWrapper>
                            <AudioImg src={Audio_Img} />
                        <Desc>
                            <p>Transform text into immersive soundscapes. Whether its AI-generated music, realistic voiceovers, or ambient effects, our audio generation tool brings your ideas to life with crystal-clear sound. Simply input your text, and let AI create stunning audio content in seconds.</p>
                            <p>From lifelike narrations to custom soundtracks, our AI-powered audio generation opens up endless possibilities. Whether you are creating podcasts, audiobooks, or background scores, experience seamless, high-quality audio tailored to your needs.</p>
                        </Desc>
                        </AudioWrapper>
                    </>
                );
            case "3d":
                return (
                    <>
                        <ImageWrapper>
                            <ThreeDModel/>
                            <SecondThreeDModel/>
                        </ImageWrapper>
                        <PromptSection>
                            <p>Transform ideas into stunning 3D models with our AI-driven generation tool. Whether its for gaming, animation, or prototyping, create highly detailed and realistic models in just a few clicks...</p>
                        </PromptSection>
                    </>
                );
            case "video":
                return (
                    <>
                        <ImageWrapper>
                            <RenderImgs src="https://via.placeholder.com/400" />
                            <RenderImgs src="https://via.placeholder.com/400" />
                        </ImageWrapper>
                        <PromptSection>
                            <p>Bring your vision to life with AI-powered video creation. From cinematic storytelling to dynamic motion graphics, effortlessly generate high-quality videos that captivate and engage your audience.</p>
                        </PromptSection>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Container>
            <h1>Creative Renderings</h1>
            <p>Where ideas take shape in media.</p>
            <Wrapper>
                <BtnWrapper>
                    <Button onClick={() => setSelectedType("image")}>Image Generation</Button>
                    <Button onClick={() => setSelectedType("3d")}>3D Model</Button>
                    <Button onClick={() => setSelectedType("video")}>Video Generation</Button>
                    <Button onClick={() => setSelectedType("audio")}>Audio Generation</Button>
                </BtnWrapper>

                {renderContent()}
            </Wrapper>
        </Container>
    );
};

export default Renderings;
