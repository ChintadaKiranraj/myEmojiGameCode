import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props
  return (
    <nav className="NavBar">
      <div className="emoji-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scoreAndTopScore">
          <p className="scoreMargin">Score: {currentScore}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
