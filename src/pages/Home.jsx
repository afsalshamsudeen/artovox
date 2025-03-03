import styled from "styled-components"
import HeroSection from "../components/HeroSection";
import Renderings from "../components/Renderings";
import HowItWorks from "../components/HowItWorks";
import CustomerTestimonials from "../components/Foot";

const Container = styled.div``;
const Home = () => {
  return (
    <Container>
        {/* <NavBar/> */}
      <HeroSection/>
      <Renderings/>
      <HowItWorks/>
      <CustomerTestimonials/>

    </Container>
  )
}

export default Home
