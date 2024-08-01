import {Component} from 'react'
import Navbar from '../Navbar'

import './index.css'

class MatchGame extends Component {
  state = {
    timeRemainingInSeconds: 60,
  }

  componentDidMount = () => {
    this.timerID = setInterval(this.changeTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  changeTimer = () => {
    const {timeRemainingInSeconds} = this.state
    if (timeRemainingInSeconds > 0) {
      this.setState(prevState => ({
        timeRemainingInSeconds: prevState.timeRemainingInSeconds - 1,
      }))
    }
  }

  render() {
    const {timeRemainingInSeconds} = this.state
    return (
      <div className="app-container">
        <Navbar timeRemainingInSeconds={timeRemainingInSeconds} />
      </div>
    )
  }
}

export default MatchGame
