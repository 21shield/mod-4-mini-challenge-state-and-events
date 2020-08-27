import React from 'react'
import StarRating from './StarRating'

class SpiceItem extends React.Component {

  state ={
    favorited: false
  }

  handleClick = (e) => {

    this.setState((previousState) => ({
      favorited: !previousState.favorited
    })
    )
  }
  


  render() {
    const { image, title, description, notes, rating } = this.props.spice
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite">
            <span role="img" aria-label="heart" onClick={this.handleClick}>
              {/* TODO: find a way to toggle this value when the button is clicked!  */}
             {/* true will always be true */}
              {this.state.favorited ? "🤍" : "♡"}
            </span>
          </button>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Tasting Notes: <em>{notes}</em></p>
          <div>Rating: <StarRating percentage={rating / 5} /></div>
        </div>
      </div>
    )
  }
}

export default SpiceItem