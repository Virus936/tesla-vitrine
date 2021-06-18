import React from "react"
import styled from 'styled-components'

export function LightButton({children}){
  return <Light>
    {children}
  </Light>
}

export function DarkButton({children}) {
  return <Dark>
    {children}
  </Dark>
};

const Light = styled.button`
  padding:10px 30px;
  border-radius:90px;
  border:transparent;
  cursor:pointer;
  text-transform:uppercase;
  color:#393b3f;
  background-color:whitesmoke;
`
const Dark = styled(Light)`
background-color:#393b3f;
color:whitesmoke;
`
