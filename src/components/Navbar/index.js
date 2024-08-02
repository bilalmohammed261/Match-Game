import './index.css'

const Navbar = props => {
  const {timeRemainingInSeconds, score} = props
  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <p className="score">
        Score:<span className="timer">{score}</span>
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        alt="timer"
      />
      <p className="timer">{timeRemainingInSeconds} sec</p>
    </div>
  )
}

export default Navbar
