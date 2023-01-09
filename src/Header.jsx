import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  const GCR = styled.h2`
  font-size:2.6rem
  ${'' /* font-weight:200` */}
   `
  return (
    <MainHeader>
      <NavLink to="/">
        <GCR>Gigantic Rebirth</GCR>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`
;

export default Header;