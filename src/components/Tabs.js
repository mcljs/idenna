import styled from 'styled-components'

export const Tabs = styled.div`
    overflow: hidden;
    height: auto;
    width: 75%;
    margin: 2.5em auto 0;
    display: flex;
    justify-content: space-around;
`

export const Tab = styled.button`
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  font-size: 90%;
  color: blue;
  border-radius: 0;
  border: none;
  border-bottom:2px solid blue;
  background-color: white;
  height: ${props => (props.activeTab ? "3em" : "2.6em; top:.4em")};
  transition: all 200ms ease-in-out;
  :hover {
    background-color: white;
    border: none;
    border-bottom: 1px solid gray;
    color: orange ; 
    box-shadow: none;
    transform: none;
  }

  @media screen and (max-width: 768px){
      width: 40%;
     font-size: 70%;
    }
`


