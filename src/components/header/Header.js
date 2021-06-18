import React from 'react';
import styled from 'styled-components'
import Logo from './Logo'
import Cars from './Cars'
import Menu from './Menu'


function Header() {
  return <Container>
    <Logo widthdraw='120px' />
    <Cars/>
    <Menu/>
  </Container> 
  }

const Container = styled.header`
  display:flex;
  position:fixed;
  width:100%;
  align-items:center;
  justify-content:space-between;
  background-color: transparent;
  padding:0 20px;
  height:60px;
`

export default Header;
