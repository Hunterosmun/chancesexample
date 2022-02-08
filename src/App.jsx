import styled from 'styled-components'

import logo from './logo.svg'
import './App.css'

export default function App () {
  return (
    <SillyBackground>
      <Wrapper>
        <h1>Chance is dah best!!</h1>
        <h3>Here is his example website</h3>
        <p>
          Hunter is so cool for showing Chance all of this stuff... But Chance
          is even cooler for putting up with Hunter's crazy
          <h3>Shenanigans</h3>
        </p>
        <FancyLink
          href='https://github.com/SirChancealot?tab=repositories'
          target={'_blank'}
          rel='noreferrer'
        >
          Chance's Cool Data
        </FancyLink>
      </Wrapper>
    </SillyBackground>
  )
}

const SillyBackground = styled.div`
  background-color: #81f781d5;
  height: 100vh;
`

const Wrapper = styled.div`
  background-color: white;
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
`

const FancyLink = styled.a`
  text-decoration: none;
  color: black;
  border: 1px solid #888;
  padding: 8px;
  border-radius: 8px;
  background-color: #fa8383;

  &:hover {
    background-color: #f53e3e;
  }
  &:active {
    background-color: #e90707;
  }
`
