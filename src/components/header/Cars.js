import React  from "react"
import styled from 'styled-components'

function Cars(){
  return <Container>
    <CarItem href="#models">Model S</CarItem>
    <CarItem href="#model3">Model 3</CarItem>
    <CarItem href="#modelx">Model X</CarItem>
    <CarItem href="#modely">Model Y</CarItem>
    <CarItem href="#powerwall">Powerwall</CarItem>
    <CarItem href="#recharge">Recharge</CarItem>
  </Container>
}

const Container = styled.ul`
  @media (max-width: 1000px){
    display:none;
  }
`
const CarItem = styled.a`
  margin-right:20px;
  text-decoration:none;
  color:black;
`
export default Cars
