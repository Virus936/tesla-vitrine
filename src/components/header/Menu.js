import React, {useState}  from "react"
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'

function Menu(){
  const [BurgerActive, setBurgerActive] = useState(false);
  const handleMenuActive = (e) => {
    e.preventDefault()
    setBurgerActive(!BurgerActive)
  }
  return <Container>
    <NavItem href="">Shop</NavItem>
    <NavItem href="">Compte</NavItem>
    <NavItem href="" onClick={handleMenuActive}>Menu</NavItem>
    <BurgerMenu isActive={BurgerActive} handleMenuActive={handleMenuActive} />
    </Container>
}

const Container = styled.ul`
`

const NavItem = styled.a`
  color:black;
  text-decoration:none;
  margin:20px;
`

export default Menu
