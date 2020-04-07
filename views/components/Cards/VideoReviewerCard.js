import React, { Component } from "react";
import interview from '../../assets/images/interview.jpg';
import iconPlay from '../../assets/icons/play-button.png'
import './VideoReviewerCard.scss';

export default class VideoReviewerCard extends Component {
  render() {
    return (
      <div className="video-reviwer-card">
        <div className="video-reviwer-card__thumbnail">
          <img className="video-reviwer-card__thumbnail__image" src={interview}></img>
          <img className="video-reviwer-card__thumbnail__play" src={iconPlay}></img>
        </div>
        <div className="video-reviwer-card__description">
          <div className="video-reviwer-card__description__content">
            “With ?Gigs, we are able to find talented developers in a matter of weeks instead of months. The quality of talent they supply is extremely high as the developers are able to immediately onboard and ramp incredibly fast.”
          </div>
          <div className="video-reviwer-card__description__signature">
            <span>Susan Cain</span>, CEO Starbucks
          </div>
        </div>
      </div>
    )
  }
}