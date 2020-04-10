import React, { Component } from 'react';
import topic1 from '../../assets/images/topics/topics.png';
import topic2 from '../../assets/images/topics/topics2.png';
import topic3 from '../../assets/images/topics/topics3.png';

import './TopicCard.scss';

export default class TopicCard extends Component {
  render() {
    return (
      <div className="topic-card">
        <div className="topic-card__content">
          <img src={topic2}></img>
          <div className="topic-card__content__child">
            <img src={topic1}></img>
            <img src={topic3}></img>
          </div>
        </div>
      </div>
    )
  }
}