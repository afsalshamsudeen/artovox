import styled from "styled-components"
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Renderings from "../components/Renderings";
import HowItWorks from "../components/HowItWorks";
import CustomerTestimonials from "../components/Foot";
import Footer from "../components/Footer";

const Container = styled.div``;
const Home = () => {
  return (
    <Container>
        <NavBar/>
      <HeroSection/>
      <Renderings/>
      <HowItWorks/>
      <CustomerTestimonials/>
      <Footer/>

    </Container>
  )
}

export default Home
