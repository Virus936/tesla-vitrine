import React from "react"
import styled from 'styled-components'

import Section from './Section'
import TitleSection from './TitleSection'
import { DarkButton, LightButton } from './Button'

import modelS from '../../file/modelS.jpg'
import model3 from '../../file/model3.jpg'
import modelX from '../../file/modelX.jpg'
import modelY from '../../file/modelY.jpg'
import powerWall from '../../file/solarPanel.jpg'
import recharge from '../../file/accessoire.jpg'

function Main(){
  return <>
    <Section id='models' bgImage={modelS}>

      <TitleSection>
        <h1>Model S</h1>
        <a href=''>Réservez un essai sans contact</a>
      </TitleSection>
      
      <ButtonContainer>
        <DarkButton>configuration personalisée</DarkButton>
        <LightButton>véhicule disponibles</LightButton>
      </ButtonContainer>

    </Section>
    <Section id='model3' bgImage={model3}>
      <TitleSection>
        <h1>Model 3</h1>
      </TitleSection>
    </Section>
    <Section id='modelx' bgImage={modelX}>
      <TitleSection>
        <h1>Model X</h1> 
      </TitleSection>
    </Section>
    <Section id='modely' bgImage={modelY}>
      <TitleSection>
        <h1> Model Y </h1>
      </TitleSection>
    </Section>
    <Section id='powerwall' bgImage={powerWall}>
      <TitleSection>
        <h1>Systèmes d'énergie solaire et Powerwall</h1>
        <a href=''>De l'énergie pour tous vos besoins</a>
      </TitleSection>
    </Section>
    <Section id='recharge' bgImage={recharge}>
      <TitleSection>
        <h1>Accessoires</h1>
      </TitleSection>
    </Section>
  </>
}

const ButtonContainer = styled.div`
  display:flex;
  gap:10px;
  margin-bottom:100px;
  transform:translateX(0px);
  opacity:1;
  & :first-child{
    animation:leftanim 2s;
  }

  & :last-child{
    animation:rightanim 2s;
  }

  @keyframes leftanim{
    0%{
      opacity:0;
      transform:translateX(-40px);
    }
    80%{
      opacity:0;
      transform:translateX(-40px);
    }
  }

  @keyframes rightanim{
    0%{
      opacity:0;
      transform:translateX(40px);
    }
    80%{
      opacity:0;
      transform:translateX(40px);
    }
  }

`
export default Main
