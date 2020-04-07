import React, { Component } from "react";
import './TutorialCard.scss';

export default class TutorialCard extends Component {
  render() {
    const { image, title, description } = this.props.tutorial;
    return (
      <div className="tutorial-card">
        <div className="tutorial-card__img">
          <img src={image}></img>
        </div>
        <div className="tutorial-card__title">
          {title}
        </div>
        <div className="tutorial-card__description">
          {description}
        </div>
      </div>
    )
  }
}