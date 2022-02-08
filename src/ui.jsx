import styled from 'styled-components'

export const Background = styled.div`
  background-color: #81f781d5;
  height: 100vh;
  padding-top: 8px;
`

export const Wrapper = styled.div`
  background-color: white;
  margin: 32px;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 0px 16px #888;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainTitle = styled.h1`
  font-size: 100px;
  font-weight: 200;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #888;
`
export const Subtitle = styled.h1`
  font-size: 24px;
  font-weight: 200;
  margin: 8px 0 16px 0;
`

export const Topbox = styled.div`
  display: flex;
`

export const FancyLink = styled.a`
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
