import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCArd from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  getClickedEmoji = id => {
    console.log(id)
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const clickedEmojisLength = clickedEmojisList.length
    const isEmojiPresent = clickedEmojisList.includes(id)
    console.log(isEmojiPresent)

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      // id not in the list so adding the id to the list
      this.setState(prevSta => ({
        clickedEmojisList: [...prevSta.clickedEmojisList, id],
      }))
    }
  }

  playAgain = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = this.shuffledEmojisList()
    const isWon = clickedEmojisList.length === emojisList.length
    return (
      <div className="gameContainer">
        <NavBar
          currentScore={clickedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        {isGameInProgress ? (
          <ul className="unOrderedList">
            {shuffledEmojisList.map(eachEmoji => (
              <EmojiCArd
                eachEmoji={eachEmoji}
                getClickedEmoji={this.getClickedEmoji}
                key={eachEmoji.id}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            isWon={isWon}
            score={clickedEmojisList.length}
            playAgain={this.playAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
