import React from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function BurgerMenu({handleMenuActive, isActive  }) {
  return <Container handleMenuActive={handleMenuActive} isActive={isActive}>
    <CloseButton onClick={handleMenuActive}><CloseIcon/></CloseButton>
    <BurgerItem href='#'>Véhicule Disponibles</BurgerItem>
    <BurgerItem href='#'>Véhicule D'occasion</BurgerItem>
    <BurgerItem href='#'>Reprise</BurgerItem>
    <BurgerItem href='#'>Flottes et Entreproses</BurgerItem>
    <BurgerItem href='#'>Powerwall</BurgerItem>
    <BurgerItem href='#'>Énergie</BurgerItem>
    <BurgerItem href='#'>Électricité pour les professionnels</BurgerItem>
    <BurgerItem href='#'>Industries</BurgerItem>
    <BurgerItem href='#'>Essais</BurgerItem>
    <BurgerItem href='#'>Recharge</BurgerItem>
    <BurgerItem href='#'>Nous trouver</BurgerItem>
    <BurgerItem href='#'>Assistance</BurgerItem>
    <BurgerItem href='#'>Carrères</BurgerItem>
    <BurgerItem href='#'>Shop</BurgerItem>
    <BurgerItem href='#'>Compte</BurgerItem>
    <BurgerItem href='#'>Plus</BurgerItem>
  </Container>
}

const BurgerItem = styled.a`
  margin:15px;
  text-decoration:none;
  color:inherit;
`

const CloseButton = styled.a`
  margin:15px;
  text-decoration:none;
  color:inherit;
`

const Container = styled.ul`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  height:100vh;
  width:200px;
  transform:${props => props.isActive?'translateX(0%)':'translateX(100%)'}; 
  transition:transform .2s;
  background-color:white;
`

export default BurgerMenu;
