import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'

import {
  BgContainer,
  MainContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  ItemsImagesContainer,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  RulesImage,
  CloseLineContainer,
  CloseLineButton,
  StyledPopup,
} from './styledComponents'

const resultConstants = {
  win: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class Game extends Component {
  state = {
    score: 0,
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    result: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, opponentChoice, result} = this.state
    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        result={result}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    if (choicesList[randomNumber].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        score: prevState.score - 1,
        result: resultConstants.lose,
      }))
    } else if (choicesList[randomNumber].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        score: prevState.score + 1,
        result: resultConstants.win,
      }))
    } else if (choicesList[randomNumber].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        score: prevState.score - 1,
        result: resultConstants.lose,
      }))
    } else if (choicesList[randomNumber].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        score: prevState.score + 1,
        result: resultConstants.win,
      }))
    } else if (choicesList[randomNumber].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        score: prevState.score - 1,
        result: resultConstants.lose,
      }))
    } else if (choicesList[randomNumber].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        score: prevState.score + 1,
        result: resultConstants.win,
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        result: resultConstants.draw,
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonDetails={eachItem}
            getButtonId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {score, showResult} = this.state
    return (
      <BgContainer>
        <MainContainer>
          <ScoreContainer>
            <ItemsContainer>
              <Heading>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
              </Heading>
            </ItemsContainer>
            <ScoreCardContainer>
              <ParagraphScore>Score</ParagraphScore>
              <ScoreSpan>{score}</ScoreSpan>
            </ScoreCardContainer>
          </ScoreContainer>
          {showResult ? this.onGetResult() : this.onGetImages()}
          <PopUpContainer>
            <StyledPopup
              modal
              trigger={<PopUpButton type="button">Rules</PopUpButton>}
            >
              {close => (
                <RulesImageContainer>
                  <CloseLineContainer>
                    <CloseLineButton type="button" onClick={() => close()}>
                      <RiCloseLine />
                    </CloseLineButton>
                  </CloseLineContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesImageContainer>
              )}
            </StyledPopup>
          </PopUpContainer>
        </MainContainer>
      </BgContainer>
    )
  }
}

export default Game
