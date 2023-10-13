// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super()
    this.state = {
      reviewsList: props.reviewsList,
      counter: 0,
    }
  }

  beforePage = () => {
    const {counter} = this.state

    if (counter >= 1) {
      this.setState(prevState => ({counter: prevState.counter - 1}))
    }
  }

  afterPage = () => {
    const {reviewsList, counter} = this.state
    const lenghtOfArray = reviewsList.length
    if (counter <= lenghtOfArray - 2) {
      this.setState(prevState => ({counter: prevState.counter + 1}))
    }
  }

  render() {
    const {reviewsList, counter} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[counter]

    return (
      <div className="main-div">
        <div className="small-div">
          <h1 className="heading-review">Reviews</h1>
          <div className="arrows-page">
            <button
              data-testid="leftArrow"
              type="button"
              className="button-icon"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                onClick={this.beforePage}
              />{' '}
            </button>
            <div className="middle-div">
              <img className="imgs-page" src={imgUrl} alt={username} />
              <p className="heading">{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              data-testid="rightArrow"
              type="button"
              className="button-icon"
            >
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                onClick={this.afterPage}
              />{' '}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
