import styled from 'styled-components'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export const BgContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const MainContainer = styled.div`
  width: 90%;
  color: #ffffff;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 60%;
    justify-content: space-around;
  }
`

export const ScoreContainer = styled.div`
  padding: 0px 10px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ItemsContainer = styled.div`
  margin-left: 10px;
`

export const Heading = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
`

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 15px;
  margin-right: 5px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`

export const ParagraphScore = styled.p`
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin: 0;
`

export const ScoreSpan = styled.p`
  color: #223a5f;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
`

export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  height: 50%;
`

export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 18px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const StyledPopup = styled(Popup)`
  &-content {
    width: 90% !important;
    max-width: 620px;
  }
`
