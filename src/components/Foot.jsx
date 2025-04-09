import styled from "styled-components"

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    h1{
      font-size: 60px;
      font-weight: 700;
      font-style: italic;
    }

    div{
        height: 30px;
        width: 400px;
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

`;


const CustomerTestimonials = () => {
  const navigator = useNavigate()
  return (
    <Container>

      <h1>Start Creating With Artovox</h1>
      <div>
            <p onClick={()=>navigator('/prompt')}>Try Artoxox</p><ArrowOutwardIcon/>
        </div>
    </Container>
  )
}

export default CustomerTestimonials
