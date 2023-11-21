// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onTextInputCount = event => {
    this.setState({
      count: event.target.value,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="calculator-container">
          <div className="letter-counting">
            <h1 className="heading">Calculate the Letters you enter </h1>
            <label className="phrase" htmlFor="phrase">
              {' '}
              Enter the phrase{' '}
            </label>
            <input
              type="text"
              className="input-text"
              id="phrase"
              onChange={this.onTextInputCount}
              placeholder="Enter the Phrase"
            />
            <p className="button" type="button">
              {' '}
              No.of letters: {count.length}
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
