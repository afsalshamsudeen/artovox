import styled from "styled-components"

import Logo from "../assets/art.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    
    div{
        background-color: #ffffff;
        border-radius: 50px;
        width: 164px;
        height: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #222;
    }
    h1{
        font-weight: 500;
        font-size: 35;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
`;
const OfferCards = styled.div`
    height: 259px;
    width: 191px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;

    h3{
        margin: 0;
        padding-top: 15px;
        font-weight: 400;
        font-size: 25px;
    }
    p{
        margin: 0;
        padding-top: 10px;
        font-weight: 400;
        font-size: 17;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
        padding: 0;

    }
    div p{
        font-weight: 300;
        font-size: 12px;
        color: #515151;
    }
`;

const BrandLogo = styled.img`
    height: 38px;
    width: 38px;
`;
const Button = styled.button`
    background-color: #222;
    color: white;
    padding: 15px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    height: 40px;
    width: 150px;
    border-radius: 10px;
    align-self: center;
    margin-top: 20px;

    cursor: pointer;
`;

const Offers = () => {
  return (
    <Wrapper>

    <Container>   
      <div>
        <p>OUR PLANS</p>
      </div>
      <h1>Choose a plan</h1>
    </Container>
    <CardWrapper>

        <OfferCards>
            <BrandLogo src={Logo}/>
            <h3>Starter Pack</h3>
            <p>Ideal for beginners.</p>
            
            <div>
                <h1>$10</h1>
                <p>/100 credits</p>
            </div>
            
            <Button>Get Started</Button>

        </OfferCards>

        <OfferCards>
            <BrandLogo src={Logo}/>
            <h3>Pro Packn</h3>
            <p>For regular users.</p>
            
            <div>
                <h1>$50</h1>
                <p>/250 credits</p>
            </div>
            
            <Button>Get Started</Button>

        </OfferCards>

        <OfferCards>
            <BrandLogo src={Logo}/>
            <h3>Elite Bundle</h3>
            <p>For power users.</p>
            
            <div>
                <h1>$100</h1>
                <p>/500 credits</p>
            </div>
            
            <Button>Get Started</Button>

        </OfferCards>

        

      </CardWrapper>
    </Wrapper>
  )
}

export default Offers
