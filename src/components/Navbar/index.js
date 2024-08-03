import './index.css'

const Navbar = props => {
  const {timeRemainingInSeconds, score} = props
  return (
    <ul className="navbar-container">
      <li>
        {' '}
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </li>

      <li>
        <p className="score">
          Score:<span className="timer">{score}</span>
        </p>
      </li>

      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
      </li>

      <li>
        <p className="timer">{timeRemainingInSeconds} sec</p>
      </li>
    </ul>
  )
}

export default Navbar
