import React, { Component } from "react";
import './MostViewCard.scss';
import mostCard from '../../assets/images/most-view.png';
import freelancer from '../../assets/images/freelancer.jpg';
export default class MostViewCard extends Component {
  render() {
    return (
      <div className="most-view-card">
        <div className="most-view-card__thumbnail">
          <img className="most-view-card__thumbnail__img" src={mostCard}></img>
          <div className="most-view-card__thumbnail__viewer">
            <div className="most-view-card__thumbnail__viewer__title">
              Pastel
          </div>
            <div className="most-view-card__thumbnail__viewer__content">
              <img src={freelancer}></img>
              <img src={freelancer}></img>
              <img src={freelancer}></img>
              <div className="most-view-card__thumbnail__viewer__content__total">
                +24
            </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}