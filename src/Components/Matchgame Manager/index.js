import './index.css'
import {Component} from 'react'
import TabItem from '../Tab Items'
import ImageItems from '../Image Items'

class MatchGame extends Component {
  state = {
    bgimg: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    activTab: 'FRUIT',
    gameover: false,
    seconds: 60,
    score: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.thick, 1000)
  }

  thick = () => {
    this.setState(prev => {
      if (prev.seconds === 1) {
        clearInterval(this.timerId)
        return {gameover: true, seconds: 0}
      }
      return {seconds: prev.seconds - 1}
    })
  }

  checkimg = url => {
    const {bgimg} = this.state
    const {imagesList} = this.props
    console.log(imagesList[0].imageUrl, url)
    this.setState(prev => {
      if (url === bgimg) {
        const index = Math.ceil(Math.random() * 30)
        const tmpimg = imagesList[index].imageUrl
        return {bgimg: tmpimg, score: prev.score + 1}
      }
      clearInterval(this.timerId)
      return {gameover: true}
    })
  }

  startagain = () => {
    this.timerId = setInterval(this.thick, 1000)
    this.setState({
      bgimg:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      activTab: 'FRUIT',
      gameover: false,
      seconds: 60,
      score: 0,
    })
  }

  changetab = id => {
    this.setState({activTab: id})
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {bgimg, activTab, gameover, seconds, score} = this.state
    const fs = seconds < 10 ? `0${seconds}` : seconds
    const individtabs = imagesList.filter(each => activTab === each.category)
    return (
      <nav>
        <ul className="navContaner">
          <img
            className="matchimg"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <div className="scorelogo">
            <p className="score">
              Score: <span className="sp">{score}</span>
            </p>
            <img
              className="timlogo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
              alt="timer"
            />
            <p className="sp">{fs} sec</p>
          </div>
        </ul>
        {!gameover && (
          <div className="gameCard">
            <img src={bgimg} alt="match" className="bgimg" />
            <ul className="tabsCont">
              {tabsList.map(each => (
                <TabItem
                  info={each}
                  key={each.tabId}
                  fun={this.changetab}
                  activ={activTab}
                />
              ))}
            </ul>
            <ul className="imageItems">
              {individtabs.map(each => (
                <ImageItems
                  imginfo={each}
                  key={each.id}
                  checkimgfun={this.checkimg}
                />
              ))}
            </ul>
          </div>
        )}
        {gameover && (
          <div className="gameover">
            <div className="overcard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
                alt="trophy"
                className="trophy"
              />
              <p className="parascore">Your Score</p>
              <p className="parascore">{score}</p>
              <button
                type="button"
                className="againbtn"
                onClick={this.startagain}
              >
                {' '}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                />
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}
      </nav>
    )
  }
}
export default MatchGame
