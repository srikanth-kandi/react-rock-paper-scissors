import styled from 'styled-components'

export const ShowResultContainer = styled.div`
  width: 100%;
`

export const ResultImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ResultTextImgContainer = styled.div``

export const ResultText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Roboto';
`

export const ResultImageItem = styled.img`
  width: 120px;
  height: 120px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`

export const ResultButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 16px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`
