import React, {useRef, useEffect} from 'react';
import styled from 'styled-components'

function TitleSection({children  }) {
  const reveal = useRef(null);

  const displayTitle = (entries, observer) => {
    entries.forEach(entry =>{
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = 'translateY(0)'
      }else{
        entry.target.style.opacity=0
        entry.target.style.transform = 'translateY(-40px)'
      }
    })
  }
  const options = {
    threshold:0.3
  }
  useEffect( () => {
    const observer = new IntersectionObserver(displayTitle,options)
    observer.observe(reveal.current)
  })

  return <Container ref={reveal}>
      {children}
    </Container>
}


const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-top:130px;
  align-items:center;
  transition: 1s;

  h1{
    font-size:3rem;
    text-align:center;
    animation:appear 1.5s;
  
    @keyframes appear{
      0%{
        opacity:0;
      }
      60%{
        opacity:0;
      }
      100%{
        opacity:1
      }
    }
  }
  a{
    word-spacing:0.2rem;
    color:inherit;
    animation:appear 2s;
  }
`
export default TitleSection;
