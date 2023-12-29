import styled from 'styled-components'

export const ButtonLiContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
`

export const ButtonImage = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const ImageItem = styled.img`
  width: 120px;
  height: 120px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`
