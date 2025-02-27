import styled from "styled-components"
import Avatar from "../assets/man.png";
import Logo from "../assets/cube.png";
import Cred from "../assets/crypto.png";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-left: 80px;
  `;
const LoginBtn = styled.button`
    font-size: 12px;
    border-radius: 10px;
    border: none;
    color: aliceblue;
    background: #222;
    padding: 8px 12px;
    width: 100px;
    cursor: pointer;
`;

const Rwrapper =styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-right: 80px;
  cursor: pointer;
  p{
      font-weight: 200;
      font-size: 14px;
    }
`;

const Lwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  cursor: pointer;
  
  `;

const UserInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-right: 80px;
  div{
    height: 15px;
    width: 120px;
    border-radius: 40px;
    padding: 12px 15px;
    background-color: #ffffff;
    box-shadow: 2px 3px 3px #888888;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 2px;

    p{
      font-weight: 200;
      font-size: 12px;
    }
  }
  p{
      font-weight: 200;
      font-size: 12px;
    }
    cursor: pointer;

`;
const AvatarImage = styled.img`
  height: ${(props)=>(props.logo ? "44px ": "34px")};
  width: ${(props)=>(props.logo ? "44px ": "34px")};
`;
const CredLogo = styled.img`
  height: 30px;
  width: 30px;
`;

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null)
  return (
    <Container>
      <Wrapper>
        <Lwrapper>
        <AvatarImage logo src={Logo}/>
        <h2>artovox</h2>
        </Lwrapper>
      {user ? <UserInContainer>
        <div>
          <CredLogo src={Cred}/>
          <p>Creds left: 5</p>
        </div>
        <p>Welcome, Elizabeth</p>
        <AvatarImage src={Avatar}/>
        </UserInContainer> :  <Rwrapper>
      <p>Pricing</p>
      <LoginBtn>Login</LoginBtn>
      </Rwrapper>}
     

      </Wrapper>
    </Container>
  )
}

export default NavBar
