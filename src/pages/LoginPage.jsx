import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 70px;

    p{
        font-size: 36px;
    }
    
`;

const InputField = styled.input`
    border: none;
    flex: 1;
    font-size: 16px;
    background-color: transparent;
    padding: 10px;
    min-height: 20px;
    width: 300px;
    outline: none;
`;
const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p{
        font-size: 12px;
        cursor: pointer;
        font-weight: 300;
        color: #6e6e80;
    }
    span{
        color: #48f5bb;
    }
    
`;
const Terms = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 190px;

    p{
        font-size: 14px;
        color: #48f5bb;
        cursor: pointer;
    }
    span{
        color: #6e6e80;
    }
`;
const SubmitButton = styled.button`
    padding: 20px;
    width: 300px;
    background-color: #7FFFD4;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: none;
    border: none;

    &:hover {
        background-color: #75ccaf;
        color: white;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
    }

    cursor: pointer;
`;

const InputWithICon = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #222;
    border-radius: 8px;
    padding: 10px;
    width: 300px;
    background-color: transparent;

    svg {
        color: #888;
        margin-right: 10px;
    }
`;
const LoginPage = () => {
  return (
    <Container>
      <p>Sign in to artovox</p>
      <InputFieldWrapper>
      <InputWithICon>
      <PersonIcon/>
      <InputField placeholder="Email address" type="email"/>
      </InputWithICon>
      
      <InputWithICon>
      <HttpsIcon/>
      <InputField placeholder="Password" type="password"/>
      </InputWithICon>
      <p>Forget password?</p>
      <SubmitButton>Continue</SubmitButton>
      <p>Don&apos;t have an account? <span>Sign up</span></p>
      </InputFieldWrapper>
      <Terms>
        <p>Terms of Use</p>
        <span>|</span>
        <p>Privacy Policy</p>
      </Terms>
    </Container>
  )
}

export default LoginPage
