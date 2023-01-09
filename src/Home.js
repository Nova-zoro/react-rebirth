import React from 'react'
import styled from 'styled-components';
import HeroSection from './HeroSection';

const Home = () =>{
  return <>
    <HeroSection/>
  </>
}

const Wrapper = styled.section`
  background-color:${({theme}) => theme.colors.bg};
  height:100vh;
`

export default Home;