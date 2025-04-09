import styled from "styled-components"
import Avatar from "../assets/man.png";
import Logo from "../assets/art.png";
import Cred from "../assets/crypto.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 80px;
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
    &:hover {
    background: #444;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
}
`;

const Rwrapper =styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 80px;
  cursor: pointer;
  p{
      font-weight: 300;
      font-size: 14px;
      margin: 0;
    }
`;

const Lwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  cursor: pointer;
  
  `;

const UserInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding-right: 80px;
  div{
    height: 15px;
    width: 120px;
    border-radius: 40px;
    padding: 12px 15px;
    background-color: #ffffff;
    box-shadow: 1px 2px 3px #888888;
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
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Lwrapper>
          <Link to='/'>
        <AvatarImage logo src={Logo}/>
          </Link>
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
      <p onClick={()=>navigate('/buycredits')}>Pricing</p>
      <LoginBtn onClick={()=>navigate('/login')}>Login</LoginBtn>
      </Rwrapper>}
     

      </Wrapper>
    </Container>
  )
}

export default NavBar
