import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Styles/Button';
import GCR  from "./img/IsEUxCQb_400x400.jpg"
import { GlobalStyle } from './GlobalStyle';


function HeroSection() {
  return (
    <Wrapper>
     <div className="container">
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data">
                    Welcome To
                </p>
                <h1>Gigantic Rebirth</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui neque voluptatibus ullam quibusdam alias fugit fuga sunt repudiandae nemo. Nihil ipsa sint cumque, tempore deserunt id consequuntur minima? Totam.</p>
                <NavLink to="/products">
                    <Button>Show Now</Button>
                </NavLink>
            </div>
            <div className="hero-section-image"  >
                <figure>
                    <img src={GCR} className="img-style" alt="hero-section-photo" />
                </figure>
            </div>
        </div>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
   .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -4rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection