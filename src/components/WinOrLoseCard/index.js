import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, playAgain} = props

  const win = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const Loose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultImage = isWon ? win : Loose
  const text = isWon ? 'You Won' : 'You lose'
  const imageAlt = isWon ? 'win' : 'lose'
  const scoreType = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winOrLooseCard">
      <div className="scoreContent">
        <h1 className="resultHead">{text}</h1>
        <p>{scoreType}</p>
        <p className="score">{score}/12</p>
        <button type="button" onClick={playAgain} className="playAgainButton">
          Play Again
        </button>
      </div>
      <img src={resultImage} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
