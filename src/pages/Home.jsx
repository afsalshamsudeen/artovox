import styled from "styled-components"
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Renderings from "../components/Renderings";

const Container = styled.div``;
const Home = () => {
  return (
    <Container>
        <NavBar/>
      <HeroSection/>
      <Renderings/>

    </Container>
  )
}

export default Home
