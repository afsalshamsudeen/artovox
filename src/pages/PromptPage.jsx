import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;


    h1{
      font-size: 46px;

    }
`;
const PromptWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const PromptFiled = styled.input`

    border: 1px solid #222;
    border-radius: 10px;
    outline: none;
    max-height: 80px;
    width: 400px;
    font-size: 16px;
    padding: 10px;
    background-color: transparent;
`;
const GenerateButton = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #7FFFD4;
    box-shadow: 1px #222;
    border: none;
    border-radius: 8px;

    &:hover {
        background-color: #00ffaa;
        color: white;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
    }


`;
const PlaceholderFor = styled.section`
    height: 100%;
`;
const Result = () => {
  return (
    <Container>
      <h1>Explore Artovox Now!</h1>
      <PromptWrapper>
        <PromptFiled placeholder='Create anything...'/>
      <GenerateButton>Generate</GenerateButton>
      </PromptWrapper>
      <PlaceholderFor/>
    </Container>
  )
}

export default Result
