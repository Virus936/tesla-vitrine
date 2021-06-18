import React  from "react"
import styled from 'styled-components'

function Section({id,children, bgImage}){
  return(
    <Container id={id} bgImage={bgImage}>
      {children}
    </Container>
    )
}
const Container = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  background-image:url(${props => props.bgImage});
  background-position:center;
  background-size:cover;
  height:100vh;
  scroll-snap-align: center;
`

export default Section
