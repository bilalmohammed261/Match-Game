import {Component} from 'react'
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = this.props
    this.state = {
      timeRemainingInSeconds: 60,
      activeTabId: tabsList[0].tabId,
      activeImageUrl: imagesList[0].imageUrl,
      score: 0,
    }
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
    } else {
      clearInterval(this.timerID)
    }
  }

  getFilteredImages = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props
    const filteredImages = imagesList.filter(
      imageDetails => imageDetails.category === activeTabId,
    )
    return filteredImages
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  updateScore = imageUrl => {
    const {activeImageUrl, timeRemainingInSeconds} = this.state
    const {imagesList} = this.props
    // console.log(imageUrl)

    // console.log(activeImageUrl)
    if (timeRemainingInSeconds > 0 && imageUrl === activeImageUrl) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      const randomImageUrl =
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
      this.setState({activeImageUrl: randomImageUrl})
    }
  }

  resetGame = () => {
    console.log('rest game')

    const {tabsList, imagesList} = this.props
    this.setState = {
      timeRemainingInSeconds: 60,
      activeTabId: tabsList[0].tabId,
      activeImageUrl: imagesList[0].imageUrl,
      score: 0,
    }
  }

  render() {
    const {
      timeRemainingInSeconds,
      activeTabId,
      activeImageUrl,
      score,
    } = this.state
    // console.log(activeTabId)
    const {tabsList} = this.props
    // console.log(imagesList)
    // console.log(tabsList)
    const filteredImages = this.getFilteredImages()
    // console.log(filteredImages)
    return (
      <div className="app-container">
        <Navbar timeRemainingInSeconds={timeRemainingInSeconds} score={score} />
        {timeRemainingInSeconds > 0 ? (
          <div>
            <img src={activeImageUrl} alt="match" />
            <ul className="tabs-list">
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  clickTabItem={this.clickTabItem}
                  isActive={activeTabId === eachTab.tabId}
                />
              ))}
            </ul>
            <ul className="images-list">
              {filteredImages.map(eachImage => (
                <ImageItem
                  key={eachImage.id}
                  imageDetails={eachImage}
                  updateScore={this.updateScore}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="game-over">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
            />
            <h1>YOUR SCORE</h1>
            <p>{score}</p>
            <button type="button" onClick={this.resetGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
